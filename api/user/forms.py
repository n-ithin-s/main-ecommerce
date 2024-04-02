from django import forms
from.models import User




class NewForm(forms.ModelForm):
    class Meta:
        model=User
        fields=('name','email','phone')

     