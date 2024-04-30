from django.db import models
from django.contrib.auth.models import User

class Project(models.Model):
    project_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    
    
    title = models.CharField(max_length=255, null=True, blank=True)
    tone = models.CharField(max_length=100, null=True, blank=True)
    purpose = models.TextField(max_length=100, null=True, blank=True)
    type = models.CharField(max_length=100, null=True, blank=True)
    content = models.TextField(null=True, blank=True)
    generated_content = models.TextField(null=True, blank=True)
    created_time = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    

    def __str__(self):
        return self.title