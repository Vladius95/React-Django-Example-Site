from rest_framework import serializers
from users.models import CustomUser


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ("email", "login", "firstname", "secondname", "birthday")

