from django.db import models

class ShortInfo(models.Model):
    text = models.CharField(max_length=1000)
    date = models.DateTimeField(auto_now_add = True)

class Moto(models.Model):
    text = models.CharField(max_length=1000)
    author = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add = True)
