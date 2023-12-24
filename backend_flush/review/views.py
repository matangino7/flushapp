from rest_framework import viewsets
from .serializers import ReviewSerializer
from .models import Review
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import requests

class UserView(viewsets.ModelViewSet):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()

@api_view(['GET'])
def fetch_reviews(request, point_id):
    """
    This function returns all the reviews with the given point_id.
    Returns a serialized array of reviews or an empty array.
    """
    try:
        reviews = Review.objects.filter(point__id=point_id)
        
        if reviews:
            serializer = ReviewSerializer(reviews, many=True)
            return Response(serializer.data)
        else:
            return Response([])
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    

@api_view(['GET'])
def is_internet(request):
    try:
        my_request = requests.get('https://www.google.com', timeout=5)

        if my_request.status_code == 200:
            return Response({'status': 'ok'}, status=200)
        else:
            return Response({'status': 'bad'}, status=400)

    except requests.RequestException as e:
        return Response({'status': 'error', 'message': str(e)}, status=500)