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






