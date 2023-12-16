# Generated by Django 4.2.6 on 2023-12-12 15:11

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('review', '0001_initial'),
        ('users', '0002_alter_customuser_username'),
    ]

    operations = [
        migrations.CreateModel(
            name='Point',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('longitude', models.DecimalField(decimal_places=6, max_digits=9)),
                ('latitude', models.DecimalField(decimal_places=6, max_digits=9)),
                ('description', models.CharField(max_length=500)),
                ('photo', models.ImageField(upload_to='uploads/')),
                ('total_rating', models.IntegerField(validators=[django.core.validators.MinValueValidator(1, message='Value must be greater than or equal to 1'), django.core.validators.MaxValueValidator(5, message='Value must be less than or equal to 5')])),
                ('reviews', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='review.review')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='users.customuser')),
            ],
        ),
    ]