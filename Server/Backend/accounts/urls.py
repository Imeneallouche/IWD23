from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from . import views

urlpatterns = [
    path('patient', views.PatientListView.as_view()),
    path('patient/<int:pk>', views.PatientDetailView.as_view()),
    path('patient/register', views.PatientRegisterView.as_view()),
    path('therapist', views.TherapistListView.as_view()),
    path('therapist/<int:pk>', views.TherapistDetailView.as_view()),
    path('therapist/register', views.TherapistRegisterView.as_view()),
    path('users', views.UserListView.as_view()),
    path('login', obtain_auth_token),
    path('logout', views.Logout.as_view()),

]
