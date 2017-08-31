from django.contrib import admin
from . import models

@admin.register(models.Moto)
class MotoAdmin(admin.ModelAdmin):
    list_display = ('pk','author', 'date', 'lang')

@admin.register(models.ShortInfo)
class ShortInfoAdmin(admin.ModelAdmin):
    list_display = ('pk', 'text', 'date', 'lang')

@admin.register(models.Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('pk', 'title', 'date', 'lang')
    
@admin.register(models.Project)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('pk', 'title', 'date', 'lang')

@admin.register(models.Writing)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('pk', 'title', 'date', 'lang')

@admin.register(models.Tech)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('pk', 'title')
