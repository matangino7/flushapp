from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from review import views

router = routers.DefaultRouter()
router.register(r'review', views.UserView, 'review')

urlpatterns = [
    path('', include(router.urls)),
]