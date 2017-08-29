from django.contrib import admin
from . import models

@admin.register(models.Moto)
class MotoAdmin(admin.ModelAdmin):
    list_display = ('pk','author', 'date')

@admin.register(models.ShortInfo)
class ShortInfoAdmin(admin.ModelAdmin):
    list_display = ('pk', 'text', 'date')

@admin.register(models.Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('pk', 'title', 'date')
    
@admin.register(models.Project)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('pk', 'title', 'date')

@admin.register(models.Writing)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('pk', 'title', 'date')

@admin.register(models.Tech)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('pk', 'title')
