from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework import  status
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import UserSerializer,NewSerializer
from .models import User
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login,logout
import re
import random
import json
from.models import User
from .forms import NewForm
from django.shortcuts import render,redirect
from rest_framework.parsers import JSONParser  # Import JSONParser
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated



def session_token_generate(length=10):
    return ''.join(random.SystemRandom().choice([chr(i) for i in range(97,123)] + [str(i) for i in range(10)]) for _ in range(length))

@csrf_exempt
def signin(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Send a post request with valid parameters only'})

    try:
        data = json.loads(request.body)
        email = data.get("email", "")
        password = data.get("password", "")

        if not re.match("^[\w\.\+\-]+\@[\w]+\.[a-z]{2,3}$",email):
            return JsonResponse({'error':'Invalid Email Id'})

        if len(password) < 3:
            return JsonResponse({'error': 'Password length too short, it needs to be at least 3 characters'})

        UserModel = get_user_model()

        try:
            user = UserModel.objects.get(email=email)

            if user.check_password(password):
                usr_dict = UserModel.objects.filter(email=email).values().first()
                usr_dict.pop('password')

                if user.session_token != "0":
                    user.session_token = "0"
                    user.save()
                    # return JsonResponse({'error': "Previous session already exists!"})

                token = session_token_generate()
                user.session_token = token
                user.save()
                login(request, user)
                return JsonResponse({'token': token, 'user': usr_dict})
            else:
                return JsonResponse({'error': 'Invalid password, please enter the correct password'})

        except UserModel.DoesNotExist:
            return JsonResponse({'error': 'Invalid email, Enter a valid user'})

    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON data'})
    
@csrf_exempt
def signout(request, id):
    logout(request)
    UserModel = get_user_model()

    user = UserModel.objects.get(pk=id)
    user.session_token = "0"
    user.save()

    return JsonResponse({'success': 'Logout success'})

class UserViewSet(viewsets.ModelViewSet):
    permission_classes_by_action = {'create':[AllowAny]}

    queryset=User.objects.all().order_by('id')
    serializer_class= UserSerializer
    #register user
    @action(detail=False, methods=['post'], permission_classes=[AllowAny])
    
    def register(self, request):
        
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()

            # Automatically log in the user after registration
            login(request, user)

            # Generate and set session token
            token = session_token_generate()
            user.session_token = token
            user.save()
            
            return Response({'token': token, 'user': UserSerializer(user).data}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get_permissions(self):
        action =self.action

        if action in self.permission_classes_by_action:
            return [permission() for permission in self.permission_classes_by_action[action]]
        else:
            return[AllowAny()]
        

from rest_framework.decorators import api_view, permission_classes
@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def update_user(request, id):
    """
    Update a user instance.
    """
    user = get_object_or_404(User, id=id)

    # Assuming 'UserSerializer' is your serializer class for 'User' model
    serializer = UserSerializer(user, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
