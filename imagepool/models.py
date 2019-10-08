from django.db import models
from users.models import CustomUser


class ImagePool(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    uploaded = models.DateTimeField(
        db_index=True, auto_now_add=True, verbose_name="Выгружен"
    )
    image = models.ImageField(upload_to="images/%Y/%m/%d/", verbose_name="Изображение")

    class Meta:
        ordering = ["user", "-uploaded"]
        verbose_name = "изображение"
        verbose_name_plural = "изображения"

    def delete(self, *args, **kwargs):
        self.image.delete(save=False)
        super().delete(*args, **kwargs)
