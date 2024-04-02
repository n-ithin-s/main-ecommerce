from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Category
from .serializers import CategorySerializers


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializers

