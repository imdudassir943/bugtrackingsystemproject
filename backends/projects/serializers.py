from rest_framework import serializers
from .models import Project
from users.models import User

class UserMiniSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = {
            "id", "username", "email", "role"
        }

class ProjectSerializer(serializers.ModelSerializer):
    manager = UserMiniSerializer(read_only=True)
    qas = UserMiniSerializer(many=True, read_only=True)
    developers = UserMiniSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = {
            'id', 'name', 'description', 'created_at', 'manager', 'qas', 'developers'
        }
        