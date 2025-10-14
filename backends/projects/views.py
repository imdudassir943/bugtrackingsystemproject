from rest_framework import generics, permissions
from .models import Project
from .serializers import ProjectSerializer


class ProjectListCreateView(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        
        user = self.request.user
        if user.role != "manager":
            raise PermissionError("Only managers can create projects.")
        serializer.save(manager=user)


class ProjectDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_update(self, serializer):
        
        project = self.get_object()
        user = self.request.user
        if project.manager != user:
            raise PermissionError("Only the project manager can update this project.")
        serializer.save()

    def perform_destroy(self, instance):
        
        user = self.request.user
        if instance.manager != user:
            raise PermissionError("Only the project manager can delete this project.")
        instance.delete()

