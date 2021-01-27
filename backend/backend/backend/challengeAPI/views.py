import requests

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from django.core import serializers

from django.conf import settings

@api_view(['GET'])
def YouTubeListVideos(request):

    youtube_url = 'https://www.googleapis.com/youtube/v3/search'
    video_url = 'https://www.googleapis.com/youtube/v3/videos'
   
    
    search_params = {
        'key' : settings.YOUTUBE_API_KEY,
        'part' : 'snippet',
        'q' : request.GET.get('keyword'),
        'maxResults': 200,
        'type' : 'video',
        'order' : 'date'

    }

    rqst = requests.get(youtube_url, params=search_params)
    results = rqst.json()['items']

    ids = []

    for result in results:
        ids.append(result['id']['videoId'])

    video_params = {
        'key' : settings.YOUTUBE_API_KEY,
         'part' : 'snippet, contentDetails, statistics',
         'id' : ','.join(ids)

    } 

    rqst = requests.get(video_url, params=video_params)
    results =  rqst.json()['items']

    videos = []
    for result in results:

        video = {
            'title' : result['snippet']['title'],
            'id' : result['id'],
            'url': f'https://www.youtube.com/watch?v={result["id"]}',
            'thumbnail': result['snippet']['thumbnails']['high']['url'],
            'chanelTitle': result['snippet']['channelTitle'],
            'viewCount': result['statistics']['viewCount'],
            'publishedAt': result['snippet']['publishedAt'],
            'description' : result['snippet']['description'],
        }

        videos.append(video)




    return Response(videos, status=status.HTTP_200_OK)


