from django.db import models
from api.product.models import Product
from api.user.models import User

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product_list = models.ManyToManyField(Product, null=True)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'Order by {self.user.name}'
