# Generated by Django 5.0.2 on 2024-03-05 14:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0006_remove_order_product_order_product'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='product',
        ),
    ]
