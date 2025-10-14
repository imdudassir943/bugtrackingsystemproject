from django.contrib import admin
from .models import Attachment


@admin.register(Attachment)
class AttachmentAdmin(admin.ModelAdmin):
    list_display = ('id', 'file', 'uploaded_by', 'created_at', 'updated_at')
    list_filter = ('uploaded_by', 'created_at')
    search_fields = ('uploaded_by__username',)
    readonly_fields = ('created_at', 'updated_at')

