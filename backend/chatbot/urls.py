from django.urls import re_path
from . import views

urlpatterns = [
    re_path('chat_with_gpt', views.chat_with_gpt),
]