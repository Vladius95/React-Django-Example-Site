from django.urls import path, include
from core.views import current_user, CreateUser

urlpatterns = [path("log-in/", current_user), path("sign-up/", CreateUser.as_view())]

