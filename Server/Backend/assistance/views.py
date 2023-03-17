from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from .models import Patient, Therapist
from .serializers import PatientSerializer, TherapistSerializer, UserSerializer


class UserListView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PatientListView(generics.ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    
    def perform_create(self, serializer):
        username = self.request.data.get("username")
        email = self.request.data.get("email")
        password = self.request.data.get("password")
        user = User.objects.create_user(username, email, password)
        user.save()
        serializer.save(user=user)


        authenticated_user = authenticate(username=username, password=password)
        token, _ = Token.objects.get_or_create(user=authenticated_user)

        # Login the user
        login(self.request, authenticated_user)

        # Return a response with the token
        response_data = {'token': token.key}
        print(response_data)
        return Response(response_data, status=status.HTTP_201_CREATED)

class TherapistListView(generics.ListCreateAPIView):
    queryset = Therapist.objects.all()
    serializer_class = TherapistSerializer

    def perform_create(self, serializer):

        return super().perform_create(serializer)




