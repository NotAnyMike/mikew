from rest_framework import serializers
from . import models

class MotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Moto
        fields = ('author','text')

class ShortInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ShortInfo
        fields = ('text',)
