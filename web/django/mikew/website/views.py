from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Moto, ShortInfo, Blog
from .serializers import MotoSerializer, ShortInfoSerializer, BlogSerializer

def index(req):
    index = render(req, 'index.html')
    return index

@api_view(['GET'])
def index_json(req):
    if req.method == "GET" :
        moto = Moto.objects.order_by('-date')[0]
        motoSerializer = MotoSerializer(moto, many=False)

        shortInfo = ShortInfo.objects.order_by('-date')[0]
        shortInfoSerializer = ShortInfoSerializer(shortInfo, many=False)

        toReturn = {
                'moto': motoSerializer.data,
                'shortInfo': shortInfoSerializer.data
                }

        return Response(toReturn)
        
@api_view(['GET'])
def blogs_json(req):
    if req.method == 'GET':
        blogs = Blog.objects.filter(visible=True).order_by('-date')
        blogSerializer = BlogSerializer(blogs, many=True)

        return Response(blogSerializer.data)
