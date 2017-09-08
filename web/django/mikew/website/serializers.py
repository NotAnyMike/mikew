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
        fields = ('pk','title','slug','small_sentence','img_header','summary',)

class CompleteBlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Blog
        fields = ('pk','title','slug','small_sentence','img_header','summary','body',)

class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Tech
        fields = ('title','img',)

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Project
        fields = ('pk','title','slug','small_sentence','img_header',)

class CompleteProjectSerializer(serializers.ModelSerializer):
    technologies = TechnologySerializer(many=True, read_only=True)

    class Meta:
        model = models.Project
        fields = ('pk','title','slug','small_sentence','img_header','summary','body', 'technologies','color','background_color')

class WritingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Writing
        fields = ('pk','title','slug','small_sentence',)

class CompleteWritingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Writing
        fields = ('pk','title','slug','small_sentence','body',)
