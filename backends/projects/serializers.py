from rest_framework import serializers
from .models import Project
from users.models import User

class UserMiniSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "role"]
        
class ProjectSerializer(serializers.ModelSerializer):
    
    manager = UserMiniSerializer(read_only=True)
    qas = UserMiniSerializer(many=True, read_only=True)
    developers = UserMiniSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = [
            'id', 'name', 'description', 'created_at', 'manager', 'qas', 'developers'
        ]

class ProjectWriteSerializer(serializers.ModelSerializer):
    

    class Meta:
        model = Project
        fields = ['id', 'name', 'description', 'manager', 'qas', 'developers'] 
        

    
    def create(self, validated_data):
        qas_data = validated_data.pop('qas') if 'qas' in validated_data else []
        developers_data = validated_data.pop('developers') if 'developers' in validated_data else []

        
        project = Project.objects.create(**validated_data)

        
        project.qas.set(qas_data)
        project.developers.set(developers_data)
        
        return project



