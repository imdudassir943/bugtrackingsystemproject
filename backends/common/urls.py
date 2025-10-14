from django.urls import path
from .views import (
    AttachmentListCreateView,
    AttachmentDetailView,
    BugChoicesView,
)

urlpatterns = [
    path('attachments/', AttachmentListCreateView.as_view(), name='attachment-list-create'),
    path('attachments/<int:pk>/', AttachmentDetailView.as_view(), name='attachment-detail'),
    path('bug-choices/', BugChoicesView.as_view(), name='bug-choices'),
]
