from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("assistance.urls")),
    path('/api' , include('chat.urls'))
]
