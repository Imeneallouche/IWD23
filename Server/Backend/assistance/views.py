from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework import authentication, permissions , status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from .models import Patient, Therapist
from .mixins import CreatUserRegisterMixin
from .serializers import ( PatientSerializer, TherapistSerializer,
                        UserSerializer, PatientRegisterSerializer, 
                        TherapistRegisterSerializer )


class UserListView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PatientListView(generics.ListAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    

class PatientRegisterView(CreatUserRegisterMixin, generics.CreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientRegisterSerializer


class TherapistRegisterView(CreatUserRegisterMixin, generics.CreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = TherapistRegisterSerializer

class TherapistListView(generics.ListAPIView):
    queryset = Therapist.objects.all()
    serializer_class = TherapistSerializer




