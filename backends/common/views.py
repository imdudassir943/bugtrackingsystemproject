from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Attachment, BugType, BugStatus
from .serializers import AttachmentSerializer, BugTypeSerializer, BugStatusSerializer


class AttachmentListCreateView(generics.ListCreateAPIView):
    queryset = Attachment.objects.all().order_by('-created_at')
    serializer_class = AttachmentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(uploaded_by=self.request.user)


class AttachmentDetailView(generics.RetrieveDestroyAPIView):
    queryset = Attachment.objects.all()
    serializer_class = AttachmentSerializer
    permission_classes = [permissions.IsAuthenticated]


class BugChoicesView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        bug_types = [{'value': t.value, 'label': t.label} for t in BugType]
        bug_statuses = [{'value': s.value, 'label': s.label} for s in BugStatus]
        return Response({
            'bug_types': bug_types,
            'bug_statuses': bug_statuses
        })
