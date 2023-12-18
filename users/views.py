from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CostumePersonSerializer
from .models import CustomUser

# Create your views here.

class UserView(viewsets.ModelViewSet):
    serializer_class = CostumePersonSerializer
    queryset = CustomUser.objects.all()