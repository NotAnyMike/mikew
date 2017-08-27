from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Moto, ShortInfo
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import MotoSerializer, ShortInfoSerializer

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
        
