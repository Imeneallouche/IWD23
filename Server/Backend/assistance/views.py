from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework import authentication
from rest_framework import permissions
from .models import Patient, Therapist
from .serializers import PatientSerializer, TherapistSerializer, UserSerializer


class UserListView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PatientListView(generics.ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    
    def perform_create(self, serializer):
        username = self.request.data.get("username")
        email = self.request.data.get("email")
        password = self.request.data.get("password")
        user = User.objects.create_user(username, email, password)
        user.save()
        serializer.save(user=user)


        return super().perform_create(serializer)

class TherapistListView(generics.ListCreateAPIView):
    queryset = Therapist.objects.all()
    serializer_class = TherapistSerializer

    def perform_create(self, serializer):

        return super().perform_create(serializer)




