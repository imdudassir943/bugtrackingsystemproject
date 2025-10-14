from rest_framework import serializers
from .models import Attachment, BugType, BugStatus

class AttachmentSerializer(serializers.ModelSerializer):
    uploaded_by_username = serializers.CharField(source="uploaded_by.username", read_only=True)

    class Meta:
        model = Attachment
        fields = ["id", "file", "uploaded_by_username", "created_at", "updated_at"]


class BugTypeSerializer(serializers.ModelSerializer):
    value = serializers.CharField()
    label = serializers.CharField()


class BugStatusSerializer(serializers.ModelSerializer):
    value = serializers.CharField()
    label = serializers.CharField()
    