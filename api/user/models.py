from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    class Meta:
        permissions = [
            ('can_update_own_details', 'Can update own details'),
        ]
    name=models.CharField(max_length=50,default='Anonymous')
    email=models.EmailField(max_length=234, unique=True)
    

    username=None
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=[]

    phone=models.CharField(max_length=20,blank=True,null=True)

    session_token=models.CharField(max_length=10,default=0)
    created_date=models.DateTimeField(auto_now_add=True,null=True)
    updated_date=models.DateTimeField(auto_now=True,null=True)
