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

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Blog
        fields = ('title','slug','small_sentence','img_header','summary',)
