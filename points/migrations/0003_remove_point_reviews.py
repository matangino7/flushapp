# Generated by Django 4.2.6 on 2023-12-16 15:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('points', '0002_alter_point_photo'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='point',
            name='reviews',
        ),
    ]
