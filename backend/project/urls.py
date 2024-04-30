from django.urls import re_path
from . import views

urlpatterns = [
    re_path('create', views.create_project),
    re_path('get',views.get_projects),
    re_path('test', views.test),
]


##re_path('signup', views.signup),
