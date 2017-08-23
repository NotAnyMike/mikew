from django.shortcuts import render
from django.http import HttpResponse

def index(req):
    index = render(req, 'index.html')
    return index
