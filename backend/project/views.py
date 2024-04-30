from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.authtoken.models import Token
from .serializers import ProjectSerializer
from .models import Project

# Test if main can reach this view.
@api_view(["GET"])
def test(request):
    return Response({"message": "Hello, world!"})

@api_view(["POST"])
def create_project(request):
    serializer = ProjectSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(username=request.user)
        ## Save all data. such as username, project_id, title, tone, purpose, content, type, created_time.
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_projects(request):
    user_id = request.query_params.get('user_id')
    if user_id is not None:
        projects = Project.objects.filter(user_id=user_id)
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)
    else:
        return Response({"error": "User ID is required"}, status=status.HTTP_400_BAD_REQUEST)