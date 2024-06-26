from django.urls import re_path
from . import views

urlpatterns = [
    re_path('create', views.create_project),
    re_path('test', views.test),
    re_path(r'^show_all_projects/(?P<user_id>[0-9]+)/?$', views.show_all_projects),
    re_path(r'^show_detail/(?P<project_id>[0-9]+)/?$', views.show_detail),
    re_path(r'^delete_project/(?P<project_id>[0-9]+)/?$', views.delete_project),
    re_path(r'^update_project/(?P<project_id>[0-9]+)/?$', views.update_project),
]


##re_path('signup', views.signup),
