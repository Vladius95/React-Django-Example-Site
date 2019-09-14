from django.urls import path, include
from .views import current_user, UserList

urlpatterns = [
    path("", include(("frontend.urls", "frontend"))),
    path("current_user/", current_user),
    path("users/", UserList.as_view()),
]

