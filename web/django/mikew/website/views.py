from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Moto, ShortInfo, Blog, Project
from .serializers import MotoSerializer, ShortInfoSerializer, BlogSerializer, CompleteBlogSerializer, ProjectSerializer, CompleteProjectSerializer

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
        moto = Moto.objects.order_by('-date')[0]
        motoSerializer = MotoSerializer(moto, many=False)

        blogs = Blog.objects.filter(visible=True).order_by('-date')
        blogSerializer = BlogSerializer(blogs, many=True)

        toReturn = {
            'moto': motoSerializer.data,
            'blogs': blogSerializer.data,
            }

        return Response(toReturn)
        
@api_view(['GET'])
def projects_json(req):
    if req.method == 'GET':
        moto = Moto.objects.order_by('-date')[0]
        motoSerializer = MotoSerializer(moto, many=False)

        projects = Project.objects.filter(visible=True).order_by('-date')
        projectSerializer = ProjectSerializer(projects, many=True)

        toReturn = {
            'moto': motoSerializer.data,
            'projects': projectSerializer.data,
            }

        return Response(toReturn)

@api_view(['GET'])
def blog_json(req, slug):
    if req.method == 'GET':
        blog = Blog.objects.filter(slug=slug).order_by('-date')[0]
        blogSerializer = CompleteBlogSerializer(blog, many=False)

        return Response(blogSerializer.data)

@api_view(['GET'])
def project_json(req, slug):
    if req.method == 'GET':
        project = Project.objects.filter(slug=slug).order_by('-date')[0]
        projectSerializer = CompleteProjectSerializer(project, many=False)

        return Response(projectSerializer.data)
