from django.db import models
from django.contrib.auth.models import User

class Project(models.Model):
    project_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    tone = models.CharField(max_length=100)
    purpose = models.CharField(max_length=255)
    content = models.TextField()
    type = models.CharField(max_length=100)
    generated_content = models.TextField()
    created_time = models.DateTimeField(auto_now_add=True)
    username = models.ForeignKey(User, on_delete=models.CASCADE, related_name='projects')

    def __str__(self):
        return self.title