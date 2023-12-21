from django.db import models
from users.models import CustomUser
from points.models import Point
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils.text import slugify


class Review(models.Model):
    user = models.ForeignKey(CustomUser, null=False, on_delete=models.CASCADE)
    text_review = models.CharField(max_length=500, blank=False)
    numeric_review = models.IntegerField(validators=[MinValueValidator(1, message='Value must be greater than or equal to 1'), MaxValueValidator(5, message='Value must be less than or equal to 5')], blank=False)
    point = models.ForeignKey(Point, on_delete=models.CASCADE, null=False)
    username = models.SlugField(max_length=255, blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.username:
            self.username = slugify(self.user.get_username())

        super().save(*args, **kwargs)