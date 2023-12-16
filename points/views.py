from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PointSerializer
from .models import Point


class UserView(viewsets.ModelViewSet):
    serializer_class = PointSerializer
    queryset = Point.objects.all()