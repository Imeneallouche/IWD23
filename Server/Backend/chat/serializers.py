from rest_framework import serializers
from accounts.serializers import PatientSerializer, TherapistSerializer
from .models import Chat, Message


# class MessageSerializer(serializers.ModelSerializer): 
#     conversation = ChatSerializer()
#     class Meta:
#         model = Message
#         fields = "__all__"


class MessageSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Message
        fields = "__all__"
        read_only_fields = ['receiver']

class ChatSerializer(serializers.ModelSerializer): 
    patient = PatientSerializer()
    therapist = TherapistSerializer()
    message_set = MessageSerializer(many=True, read_only=True)
    class Meta:
        model = Chat
        fields = ["id", "patient", "therapist", "message_set"]


class ChatCreatSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Chat
        fields = "__all__"



