from django.db import models

from api.category.models import Category

# Create your models here.


class Product(models.Model):
    image = models.ImageField(upload_to="images/", blank=True, null=True)
    name = models.CharField(max_length=255,null=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    created_date=models.DateTimeField(auto_now_add=True,null=True)
    updated_date=models.DateTimeField(auto_now=True,null=True)

    def __str__(self):
        return self.name