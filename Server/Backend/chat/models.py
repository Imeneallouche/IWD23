from django.db import models
from django.contrib.auth.models import User

from accounts.models import Patient, Therapist

# Create your models here.


class Chat(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, 
                                blank=False, null=False)
    therapist = models.ForeignKey(Therapist, on_delete=models.CASCADE, 
                                blank=False, null=False)
    # text = models.CharField(max_length=300)
    #date = models.DateTimeField(auto_now_add=True)
    #has_seen = models.BooleanField(default=False)

    def __str__(self):
       return f"{self.id}-{self.patient}-{self.therapist}"



class Message(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, 
                               related_name='sent_messages', blank=False, null=False)
    receiver = models.ForeignKey(User, on_delete=models.CASCADE, 
                                 related_name='received_messages', blank=False, null=False)
    conversation = models.ForeignKey(Chat, on_delete=models.CASCADE, blank=False, null=False)
    content = models.TextField()

    def save(self, *args, **kwargs):
        if self.sender == self.conversation.patient.user:
            self.receiver = self.conversation.therapist.user
        elif self.sender == self.conversation.therapist.user:
            self.receiver = self.conversation.patient.user
        else:
            raise ValueError("The sender is not part of the conversation.")
        super().save(*args, **kwargs)
