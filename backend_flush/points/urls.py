from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from points import views

router = routers.DefaultRouter()
router.register(r'points', views.UserView, 'points')

urlpatterns = [
    path('', include(router.urls)),
    path('pointsCreate/', views.createPoint, name='pointsCreate')
]