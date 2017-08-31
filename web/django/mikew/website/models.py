from django.db import models

class ShortInfo(models.Model):
    text = models.CharField(max_length=1000)
    date = models.DateTimeField(auto_now_add = True)
    lang = models.CharField(max_length=2, default="en", choices=(('en','english'),('es','spanish')))

class Moto(models.Model):
    text = models.CharField(max_length=1000)
    author = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add = True)
    lang = models.CharField(max_length=2, default="en", choices=(('en','english'),('es','spanish')))

class Blog(models.Model):
    slug = models.SlugField(max_length=100, unique=True)
    title = models.CharField(max_length=100)
    small_sentence = models.CharField(max_length=100, default=None, null=True, blank=True)
    img_header = models.CharField(max_length=1000)
    summary = models.CharField(max_length=1000)
    body= models.TextField()
    date = models.DateTimeField(auto_now_add = True)
    visible = models.BooleanField(default=True)
    lang = models.CharField(max_length=2, default="en", choices=(('en','english'),('es','spanish')))

class Writing(models.Model):
    slug = models.SlugField(max_length=100, unique=True)
    title = models.CharField(max_length=100)
    small_sentence = models.CharField(max_length=100, default=None, null=True, blank=True)
    body= models.TextField()
    date = models.DateTimeField(auto_now_add = True)
    visible = models.BooleanField(default=True)
    lang = models.CharField(max_length=2, default="en", choices=(('en','english'),('es','spanish')))

class Project(models.Model):
    img_header = models.CharField(max_length=1000)
    slug = models.SlugField(max_length=100, unique=True)
    title = models.CharField(max_length=100)
    small_sentence = models.CharField(max_length=50, default=None, null=True, blank=True)
    summary = models.CharField(max_length=1000)
    body= models.TextField()
    date = models.DateTimeField(auto_now_add = True)
    visible = models.BooleanField(default=True)
    technologies = models.ManyToManyField('Tech')
    lang = models.CharField(max_length=2, default="en", choices=(('en','english'),('es','spanish')))

class Tech(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    img = models.CharField(max_length=100)

    def __str__(self):
        return self.title
