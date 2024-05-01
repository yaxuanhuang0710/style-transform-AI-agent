#from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework import status
#from rest_framework.authtoken.models import Token
from .serializers import ProjectSerializer
from .models import Project

# Test if main can reach this view.
@api_view(["GET"])
def test(request):
    return Response({"message": "Hello, world!"})

@api_view(["POST"])
def create_project(request):
    #serializer = ProjectSerializer(data=request.data, context={'request': request})
    serializer = ProjectSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
# def show_all_projects(request, user_id):
#     try:
#         user = User.objects.get(id=user_id)
#     except User.DoesNotExist:
#         return Response({'error': 'User not found'}, status=404)

#     projects = Project.objects.filter(user=user)
#     project_titles = [project.title for project in projects]

#     return Response({'project_titles': project_titles})
def show_all_projects(request, user_id):
    user = get_object_or_404(User, id=user_id)
    projects = Project.objects.filter(user=user)
    project_titles = [project.title for project in projects]
    return Response({'project_titles': project_titles})


@api_view(['GET'])
def show_detail(request, project_id):
    try:
        project = Project.objects.get(project_id=project_id)
    except Project.DoesNotExist:
        return Response({'error': 'Project not found'}, status=404)

    serializer = ProjectSerializer(project)
    return Response(serializer.data)