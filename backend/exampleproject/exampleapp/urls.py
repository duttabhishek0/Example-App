from django.urls import path
from .views import universities_by_country

urlpatterns = [
    path('universities/', universities_by_country, name='universities_by_country'),
]
