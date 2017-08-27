from django.db import models

class ShortInfo(models.Model):
    text = models.CharField(max_length=1000)
    date = models.DateTimeField(auto_now_add = True)

class Moto(models.Model):
    text = models.CharField(max_length=1000)
    author = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add = True)

class Blog(models.Model):
    slug = models.SlugField(max_length=100, unique=True)
    title = models.CharField(max_length=100)
    small_sentence = models.CharField(max_length=100, default=None, null=True, blank=True)
    img_header = models.CharField(max_length=1000)
    summary = models.CharField(max_length=1000)
    body= models.TextField()
    date = models.DateTimeField(auto_now_add = True)
    visible = models.BooleanField(default=True)
