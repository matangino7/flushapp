from django.db import models
from users.models import CustomUser
from django.core.validators import MinValueValidator, MaxValueValidator


class Review(models.Model):
    user = models.OneToOneField(CustomUser, null=False, on_delete=models.CASCADE)
    text_review = models.CharField(max_length=500, blank=False)
    numeric_review = models.IntegerField(validators=[MinValueValidator(1, message='Value must be greater than or equal to 1'), MaxValueValidator(5, message='Value must be less than or equal to 5')], blank=False)