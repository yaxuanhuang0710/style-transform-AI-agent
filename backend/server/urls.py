from django.contrib import admin
from django.urls import path, re_path, include
from . import views

urlpatterns = [
    path("admin/", admin.site.urls),
    re_path('signin', views.signin),
    re_path('signup', views.signup),
    re_path('token', views.token),
    path('project/', include('project.urls')),
]
