from rest_framework import generics, permissions
from .models import Bug
from .serializers import BugSerializer

class BugListCreateView(generics.ListCreateAPIView):
    queryset = Bug.objects.all().order_by('-id')
    serializer_class = BugSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class BugDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Bug.objects.all()
    serializer_class = BugSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
