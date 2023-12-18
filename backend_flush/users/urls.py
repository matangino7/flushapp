from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from users import views
from users.views import LoginAPIView

router = routers.DefaultRouter()
router.register(r'users', views.UserView, 'users')

urlpatterns = [
    path('', include(router.urls)),
    path('login/', LoginAPIView.as_view(), name='login')
]