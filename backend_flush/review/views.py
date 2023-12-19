from rest_framework import viewsets
from .serializers import ReviewSerializer
from .models import Review
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

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