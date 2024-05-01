from .models import Project
from rest_framework import serializers
from django.contrib.auth.models import User

class ProjectSerializer(serializers.ModelSerializer):
    #user = serializers.PrimaryKeyRelatedField(queryset = User.objects.all())
    
    class Meta:
        model = Project
        fields = ['project_id', 'user', 'title', 'tone', 'purpose', 'type', 'content', 'generated_content', 'created_time', ]