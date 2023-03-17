from django.urls import path
from . import views

urlpatterns = [
    path('', views.PatientListView.as_view()),
    path('therapist', views.TherapistListView.as_view()),
    path('users', views.UserListView.as_view()),

]
