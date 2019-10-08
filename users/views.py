from users.models import CustomUser
from users.serializers import UsersSerializer
from django.forms.models import model_to_dict

from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["GET"])
def get_user_list(request):
    users = CustomUser.objects
    return Response(users)


class GetUserList(generics.ListCreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UsersSerializer
