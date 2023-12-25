from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PointSerializer
from .models import Point
from django.http import JsonResponse, request
from django.http import JsonResponse
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response


class UserView(viewsets.ModelViewSet):
    serializer_class = PointSerializer
    queryset = Point.objects.all()


@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def createPoint(request: request):
    print("hello")
    serializer = PointSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse({'success': True})
    return JsonResponse({'error': serializer.errors}, status=400)
