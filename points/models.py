from django.db import models
from users.models import CustomUser
from review.models import Review
from django.core.validators import MinValueValidator, MaxValueValidator


class Point(models.Model):
    user = models.OneToOneField(CustomUser, null=False, on_delete=models.CASCADE)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, blank=False)
    latitude  = models.DecimalField(max_digits=9, decimal_places=6, blank=False)
    description = models.CharField(max_length=500, blank=False)
    photo = models.ImageField(upload_to="uploads/")
    total_rating = models.IntegerField(validators=[MinValueValidator(1, message='Value must be greater than or equal to 1'), MaxValueValidator(5, message='Value must be less than or equal to 5')], blank=False)
    reviews = models.ForeignKey(Review, null=True, on_delete=models.CASCADE)