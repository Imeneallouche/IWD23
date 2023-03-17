from rest_framework import serializers
from .models import Therapist, Patient
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields = "__all__"

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ["username","email"]


class TherapistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Therapist
        fields = ["username","email"]
        # fields = "__all__"