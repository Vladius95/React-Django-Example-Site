from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from users.forms import CustomUserCreationForm, CustomUserChangeForm
from users.models import CustomUser


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = (
        "email",
        "firstname",
        "secondname",
        "birthday",
        "is_staff",
        "is_active",
    )
    list_filter = ("email", "is_staff", "is_active")
    fieldsets = (
        (
            None,
            {"fields": ("email", "password", "firstname", "secondname", "birthday")},
        ),
        ("Permissions", {"fields": ("is_staff", "is_active")}),
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "email",
                    "password1",
                    "password2",
                    "firstname",
                    "secondname",
                    "birthday",
                    "is_staff",
                    "is_active",
                ),
            },
        ),
    )
    search_fields = ("email",)
    ordering = ("email",)


admin.site.register(CustomUser, CustomUserAdmin)
