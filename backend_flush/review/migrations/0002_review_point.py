# Generated by Django 4.2.6 on 2023-12-16 15:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('points', '0003_remove_point_reviews'),
        ('review', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='point',
            field=models.OneToOneField(default=None, on_delete=django.db.models.deletion.DO_NOTHING, to='points.point'),
        ),
    ]