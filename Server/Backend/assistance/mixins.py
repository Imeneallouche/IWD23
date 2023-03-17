from django.contrib.auth.models import User

class CreatUserRegisterMixin:
    def perform_create(self, serializer):
        username = self.request.data.get("username")
        email = self.request.data.get("email")
        password = self.request.data.get("password")
        user = User.objects.create_user(username, email, password)
        user.save()

        serializer.save(user=user)
        return super().perform_create(serializer)