from django.urls import path
from . import views

app_name = 'api'
urlpatterns = [
    path('api/flashcards/', views.flashcards, name='flashcards'),
    path('api/format_notes/', views.format_notes, name='format_notes'),
    path('api/questions/', views.questions, name='questions'),
]