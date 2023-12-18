from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CostumePersonSerializer
from .models import CustomUser
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from users.models import CustomUser
from django.shortcuts import get_object_or_404

# Create your views here.

class UserView(viewsets.ModelViewSet):
    serializer_class = CostumePersonSerializer
    queryset = CustomUser.objects.all()


class LoginAPIView(APIView):

    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')
        user = CustomUser.objects.filter(email=email, password=password).first()

        if user:
            return Response({'successful': "login successful"}, status=status.HTTP_201_CREATED)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)