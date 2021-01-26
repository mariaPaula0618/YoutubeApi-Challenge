from django.urls import path, re_path
from .views import(
    YouTubeListVideos,
)


urlpatterns = [
    path('videos/', YouTubeListVideos, name = 'index'),

]
