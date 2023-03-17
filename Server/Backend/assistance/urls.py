from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from . import views

urlpatterns = [
    path('', views.PatientListView.as_view()),
    path('therapist', views.TherapistListView.as_view()),
    path('users', views.UserListView.as_view()),
    path('auth', obtain_auth_token),

]
