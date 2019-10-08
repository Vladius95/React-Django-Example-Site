from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.utils.translation import gettext_lazy as _
from django.utils import timezone

from .managers import CustomUserManager


class CustomUser(AbstractBaseUser, PermissionsMixin):
    username = None

    email = models.EmailField(_("email address"), unique=True)
    login = models.CharField(max_length=25, verbose_name="Login")
    firstname = models.CharField(max_length=35, verbose_name="Firstname", null=True)
    secondname = models.CharField(max_length=35, verbose_name="Secondname", null=True)
    is_staff = models.BooleanField(default=False, verbose_name="Staff")
    is_active = models.BooleanField(default=True, verbose_name="Active User")
    date_joined = models.DateTimeField(default=timezone.now, verbose_name="Date Joined")
    birthday = models.DateField(blank=True, null=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email

    class Meta:
        ordering = ["-date_joined"]
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"

