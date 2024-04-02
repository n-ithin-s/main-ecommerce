from django.db import models

# Create your models here.

class Category(models.Model):
    image = models.ImageField(upload_to="images/", blank=True, null=True)
    name = models.CharField(max_length=255,null=True)
    description = models.TextField()
    created_date=models.DateTimeField(auto_now_add=True,null=True)
    updated_date=models.DateTimeField(auto_now=True,null=True)

    def __str__(self):
        return self.name


