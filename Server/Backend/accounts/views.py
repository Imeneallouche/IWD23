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


class PatientRegisterView(CreatUserRegisterMixin, generics.CreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientRegisterSerializer

class PatientListView(generics.ListAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    # authentication_classes = [authentication.TokenAuthentication]
    # permission_classes = [permissions.IsAuthenticated]

class PatientDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    

class TherapistRegisterView(CreatUserRegisterMixin, generics.CreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = TherapistRegisterSerializer

class TherapistListView(generics.ListAPIView):
    queryset = Therapist.objects.all()
    serializer_class = TherapistSerializer

    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        print(request.user)
        return super().get(request, *args, **kwargs)

class TherapistDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Therapist.objects.all()
    serializer_class = TherapistSerializer


class Logout(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request, format=None):
        # Get the token of the current user
        token = Token.objects.get(user=request.user)
        # Delete the token to force logout
        token.delete()
        return Response(status=status.HTTP_200_OK)




