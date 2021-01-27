from django.urls import path
from .views import(
    YouTubeListVideos,
)


urlpatterns = [
    path('videos/', YouTubeListVideos, name = 'index'),

]
