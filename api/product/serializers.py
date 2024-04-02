from rest_framework import serializers
from .models import Product

class ProductSerializers(serializers.ModelSerializer):
    category_name=serializers.CharField(source='category.name',read_only=True)
    class Meta:
        model=Product
        fields='__all__'

