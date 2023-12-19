# Generated by Django 4.2.6 on 2023-12-12 15:11

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0002_alter_customuser_username'),
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text_review', models.CharField(max_length=500)),
                ('numeric_review', models.IntegerField(validators=[django.core.validators.MinValueValidator(1, message='Value must be greater than or equal to 1'), django.core.validators.MaxValueValidator(5, message='Value must be less than or equal to 5')])),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='users.customuser')),
            ],
        ),
    ]