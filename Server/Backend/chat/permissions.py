from rest_framework.permissions import BasePermission

class IsRelatedToConversation(BasePermission):
    def has_object_permission(self, request, view, obj):
        # Get the user making the request
        user = request.user
        
        # Check if the user is related to the conversation
        conversation = obj.conversation
        if user == conversation.patient.user or user == conversation.therapist.user:
            return True
        
        return False
