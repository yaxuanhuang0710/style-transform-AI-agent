from .models import Project
from rest_framework import serializers

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['project_id', 'title', 'tone', 'purpose', 'content', 'type', 'generated_content', 'created_time', 'username']