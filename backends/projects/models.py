from django.db import models
from django.conf import settings

user = settings.AUTH_USER_MODEL

class Project(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    manager = models.ForeignKey(user, on_delete=models.CASCADE, related_name="project_manager", blank=True, limit_choices_to={'role': 'manager'})

    qas = models.ManyToManyField(user, related_name="project_qas", blank=True, limit_choices_to={'role': 'qa'})

    developer = models.ManyToManyField(user, related_name="project_developer", blank=True, limit_choices_to={'role': 'developer'})

    def __str__(self):
        return self.name
