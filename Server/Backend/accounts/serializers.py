from django.core.exceptions import ValidationError
from rest_framework import serializers
from .models import Therapist, Patient
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields = "__all__"

class PatientSerializer(serializers.ModelSerializer):
    role = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Patient
        fields = ["id","username","email", "role"]
    
    def get_role(self, obj):
        return 'patient'

class PatientRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['id', 'username', 'email']
    
    def validate_email(self, value):
        """
        Check if the email already exists in the database
        """
        if Patient.objects.filter(email=value).exists():
            raise ValidationError("Email already exists")
        return value
    



class TherapistSerializer(serializers.ModelSerializer):        
    role = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Therapist
        fields = ["id","username", "email", "role"]
        # fields = "__all__"

    def get_role(self, obj):
        return 'therapist'

class TherapistRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Therapist
        fields = ["id", "username", "email"]
    
    def validate_email(self, value):
        """
        Check if the email already exists in the database
        """
        if Therapist.objects.filter(email=value).exists():
            raise ValidationError("Email already exists")
        return value