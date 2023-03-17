from django.db import models
from django.contrib.auth.models import User



class Patient(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    email = models.EmailField(max_length=254, blank=False, null=False)
    username = models.CharField(
        blank=False, null=False,
        max_length=150,
        unique=True,
        help_text=(
            "Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only."
        ),
        error_messages={
            "unique": ("A user with that username already exists."),
        },
    )
    
    def __str__(self) -> str:
        return self.username
    
    def save(self, *args, **kwargs):
       if self.username == None:
           self.username = self.user.username
       super().save(*args, **kwargs) # Call the real save() method



class Therapist(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    email = models.EmailField(max_length=254, blank=True, null=True)
    username = models.CharField(
        blank=False, null=False,
        max_length=150,
        unique=True,
        help_text=(
            "Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only."
        ),
        error_messages={
            "unique": ("A user with that username already exists."),
        },
    )
    
    def __str__(self) -> str:
        return self.username
    
    def save(self, *args, **kwargs):
       if self.username == None:
           self.username = self.user.username
       super().save(*args, **kwargs) # Call the real save() method



class Room(models.Model):
    # room_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    room_id = models.AutoField(primary_key=True)
    patient = models.ForeignKey(Patient,on_delete=models.CASCADE)
    therapis = models.ForeignKey(Therapist, on_delete=models.CASCADE)
    #created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.room_id}-{self.author}-{self.friend}"
    




class Chat(models.Model):
    room_id = models.ForeignKey(Room, on_delete=models.CASCADE)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    therapist = models.ForeignKey(Therapist, on_delete=models.CASCADE)
    text = models.CharField(max_length=300)
    #date = models.DateTimeField(auto_now_add=True)
    #has_seen = models.BooleanField(default=False)

    #def __str__(self):
    #    return '%s - %s' %(self.id, self.date)

    





class Message(models.Model):
    content = models.CharField(max_length=500)
    conversation = models.ForeignKey(Chat, on_delete=models.CASCADE)

