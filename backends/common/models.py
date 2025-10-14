from django.db import models
from django.core.exceptions import ValidationError

class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        abstract =True

def validate_screenshot(file):
    valid_extensions = ['.gif', '.png']
    import os
    ext = os.path.splitext(file.name)[1].lower()
    if ext not in valid_extensions:
        raise ValidationError("only .png and .gif files are allowed")
        
class Attachment(BaseModel):
    file = models.FileField(upload_to="attachments/", validators=[validate_screenshot])
    uploaded_by = models.ForeignKey('users.User', on_delete=models.CASCADE)

    def __str__(self):
        return f"Attachment by {self.uploaded_by.username}"
    
class BugType(models.TextChoices):
    FEATURES = "feature", "Feature"
    Bug = "bug", "Bug"

class BugStatus(models.TextChoices):
    NEW = "New", "new"
    STARTED = "Started", "started"
    COMPLETED = "Completed", "completed"
    RESOLVED = "Resolved", "resolved"
