from django.urls import path, include
from users.views import get_user_list, GetUserList

urlpatterns = [path("get-user-list/", GetUserList.as_view())]

