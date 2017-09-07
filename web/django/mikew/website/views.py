from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Moto, ShortInfo, Blog, Project, Writing
from .serializers import MotoSerializer, ShortInfoSerializer, BlogSerializer, CompleteBlogSerializer, ProjectSerializer, CompleteProjectSerializer, WritingSerializer, CompleteWritingSerializer

def index(req):
    index = render(req, 'index.html')
    return index

@api_view(['GET'])
def index_json(req,lang):
    if req.method == "GET" :
        moto = Moto.objects.filter(lang=lang).order_by('-date')
        if len(moto) > 0: moto = moto[0]
        motoSerializer = MotoSerializer(moto, many=False)

        shortInfo = ShortInfo.objects.filter(lang=lang).order_by('-date')
        if len(shortInfo) > 0 : shortInfo = shortInfo[0]
        shortInfoSerializer = ShortInfoSerializer(shortInfo, many=False)
        
        projects = Project.objects.filter(lang=lang, visible=True).order_by('-date')[:3]
        projectSerializer = ProjectSerializer(projects, many=True)

        toReturn = {
                'moto': motoSerializer.data,
                'shortInfo': shortInfoSerializer.data,
                'someWorks': projectSerializer.data
                }

        return Response(toReturn)
        
@api_view(['GET'])
def blogs_json(req, lang):
    if req.method == 'GET':
        moto = Moto.objects.filter(lang=lang).order_by('-date')[0]
        motoSerializer = MotoSerializer(moto, many=False)

        blogs = Blog.objects.filter(lang=lang, visible=True).order_by('-date')
        blogSerializer = BlogSerializer(blogs, many=True)

        toReturn = {
            'moto': motoSerializer.data,
            'blogs': blogSerializer.data,
            }

        return Response(toReturn)

@api_view(['GET'])
def blog_json(req, slug):
    if req.method == 'GET':
        blog = Blog.objects.filter(slug=slug).order_by('-date')[0]
        blogSerializer = CompleteBlogSerializer(blog, many=False)

        return Response(blogSerializer.data)
        
@api_view(['GET'])
def projects_json(req, lang):
    if req.method == 'GET':
        moto = Moto.objects.filter(lang=lang).order_by('-date')[0]
        motoSerializer = MotoSerializer(moto, many=False)

        projects = Project.objects.filter(lang=lang, visible=True).order_by('-date')
        projectSerializer = ProjectSerializer(projects, many=True)

        toReturn = {
            'moto': motoSerializer.data,
            'projects': projectSerializer.data,
            }

        return Response(toReturn)

@api_view(['GET'])
def project_json(req, slug):
    if req.method == 'GET':
        project = Project.objects.filter(slug=slug).order_by('-date')[0]
        projectSerializer = CompleteProjectSerializer(project, many=False)

        return Response(projectSerializer.data)
        
@api_view(['GET'])
def writings_json(req, lang):
    if req.method == 'GET':
        moto = Moto.objects.filter(lang=lang).order_by('-date')[0]
        motoSerializer = MotoSerializer(moto, many=False)

        writings = Writing.objects.filter(lang=lang,visible=True).order_by('-date')
        writingSerializer = WritingSerializer(writings, many=True)

        toReturn = {
            'moto': motoSerializer.data,
            'writings': writingSerializer.data,
            }

        return Response(toReturn)

@api_view(['GET'])
def writing_json(req, slug):
    if req.method == 'GET':
        writing = Writing.objects.filter(slug=slug).order_by('-date')[0]
        writingSerializer = CompleteWritingSerializer(writing, many=False)

        return Response(writingSerializer.data)
