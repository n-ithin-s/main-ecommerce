from django.db import migrations
from api.user.models import User


class Migration(migrations.Migration):

    def seed_data(apps,schema_editor):
        user=User(name="nithin",
                          email="nithinsatheesh31@gmail.com",
                          is_staff=True,
                          is_superuser=True,
                          phone="6238918926",
                         )
        user.set_password("12345")
        user.save()

    

    dependencies = [
        
    ]

    operations = [
        migrations.RunPython(seed_data),
        ]