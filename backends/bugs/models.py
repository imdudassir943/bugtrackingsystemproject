from django.db import models
from django.core.exceptions import ValidationError
import os

def validate_screenshot(value):
    ext = os.path.splitext(value.name)[1] 
    valid_extensions = ['.png', '.gif']
    if ext.lower() not in valid_extensions:
        raise ValidationError("Only .png and .gif files are allowed.")

class Bug(models.Model):
    TYPE_CHOICES = [
        ('feature', 'Feature'),
        ('bug', 'Bug'),
    ]

    FEATURE_STATUS_CHOICES = [
        ('new', 'New'),
        ('started', 'Started'),
        ('completed', 'Completed'),
    ]

    BUG_STATUS_CHOICES = [
        ('new', 'New'),
        ('started', 'Started'),
        ('resolved', 'Resolved'),
    ]

    title = models.CharField(max_length=255, unique=True)
    description = models.TextField(blank=True, null=True)
    deadline = models.DateField(blank=True, null=True)
    screenshot = models.ImageField(
        upload_to="screenshots/",
        blank=True,
        null=True,
        validators=[validate_screenshot]
    )
    type = models.CharField(max_length=10, choices=TYPE_CHOICES)
    status = models.CharField(max_length=10)

    def clean(self):
        if self.type == "feature" and self.status not in dict(self.FEATURE_STATUS_CHOICES):
            raise ValidationError({"status": "Invalid status for feature. Must be one of: new, started, completed."})
        elif self.type == "bug" and self.status not in dict(self.BUG_STATUS_CHOICES):
            raise ValidationError({"status": "Invalid status for bug. Must be one of: new, started, resolved."})

    def __str__(self):
        return f"{self.title} ({self.type} - {self.status})"
