"""ReactDjangoExampleSite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
from django.conf.urls.static import static

from server.settings import MEDIA_URL, MEDIA_ROOT

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include(("frontend.urls", "frontend"))),
    path("api/auth/", obtain_jwt_token),
    path("api/", include("core.urls")),
    path("api/", include("users.urls")),
    path("imagepool/", include("imagepool.urls")),
]

urlpatterns += static(MEDIA_URL, document_root=MEDIA_ROOT)
