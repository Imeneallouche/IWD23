from django.db.models import Q
from rest_framework import generics, permissions
from .permissions import IsRelatedToConversation
from .models import Chat, Message
from .serializers import (ChatSerializer, 
                          ChatCreatSerializer, 
                          MessageSerializer)


class ChatList(generics.ListCreateAPIView, generics.DestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Chat.objects.filter(Q(patient__user=self.request.user) | Q(therapist__user=self.request.user))
    
    
    def get_serializer_class(self):
        if self.request.method == "GET":
            return ChatSerializer
        if self.request.method == "POST":
            return ChatCreatSerializer
    

class ChatDetail(generics.RetrieveDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Chat.objects.filter(Q(patient__user=self.request.user) | Q(therapist__user=self.request.user))
    
    def get_serializer_class(self):
        if self.request.method == "GET":
            return ChatSerializer
        if self.request.method == "PUT" or self.request.method == "PATCH":
            return ChatCreatSerializer
    

class MessageList(generics.ListCreateAPIView, generics.DestroyAPIView):
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated, IsRelatedToConversation]

    def get_queryset(self):
        return Message.objects.filter(Q(sender=self.request.user) | Q(receiver=self.request.user))
    
    def create(self, request, *args, **kwargs):
        request.data["sender"] = self.request.user.id

        return super().create(request, *args, **kwargs)
    

class MessageDetail(generics.RetrieveDestroyAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated, IsRelatedToConversation]
        
    


