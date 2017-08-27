from django.contrib import admin
from . import models

@admin.register(models.Moto)
class MotoAdmin(admin.ModelAdmin):
    list_display = ('pk','author', 'date')

@admin.register(models.ShortInfo)
class ShortInfoAdmin(admin.ModelAdmin):
    list_display = ('pk', 'text', 'date')
