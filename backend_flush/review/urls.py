from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from review import views

router = routers.DefaultRouter()
router.register(r'review', views.UserView, 'review')

urlpatterns = [
    path('', include(router.urls)),
    path('fetchReviews/<int:point_id>/', views.fetch_reviews, name='fetch_reviews'),
    path('is_internet/', views.is_internet, name='is_internet'),
]