from django.urls import path
from django.contrib.auth.decorators import login_required
from imagepool.views import get_list, upload_file, delete_file

urlpatterns = [
    path("", login_required(get_list), name="imagepool_index"),
    path("upload/", login_required(upload_file), name="imagepool_upload"),
    path("<int:pk>/delete/", login_required(delete_file), name="imagepool_delete"),
]

