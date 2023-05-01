from django.db import models

# Create your models here.
class University(models.Model):
    name = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    state_province = models.CharField(max_length=255)
    domains = models.JSONField()
    web_pages = models.JSONField()
    alpha_two_code = models.CharField(max_length=2)

    class Meta:
        app_label = 'exampleapp'
