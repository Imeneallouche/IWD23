from django.urls import path
from . import views


urlpatterns = [
    path('conversation', views.ChatList.as_view()),
    path('conversation/<int:pk>', views.ChatDetail.as_view()),
    path('message', views.MessageList.as_view()),
    path('message/<int:pk>', views.MessageDetail.as_view()),
]
