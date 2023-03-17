from django.db import models

from accounts.models import Patient, Therapist

# Create your models here.


class Chat(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    therapist = models.ForeignKey(Therapist, on_delete=models.CASCADE)
    text = models.CharField(max_length=300)
    #date = models.DateTimeField(auto_now_add=True)
    #has_seen = models.BooleanField(default=False)

    def __str__(self):
       return f"{self.room_id}-{self.author}-{self.friend}"



class Message(models.Model):
    content = models.CharField(max_length=500)
    conversation = models.ForeignKey(Chat, on_delete=models.CASCADE)
    # sender