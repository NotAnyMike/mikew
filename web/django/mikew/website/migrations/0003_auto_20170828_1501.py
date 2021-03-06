# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-28 15:01
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0002_blog_visible'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img_header', models.CharField(max_length=1000)),
                ('slug', models.SlugField(max_length=100, unique=True)),
                ('title', models.CharField(max_length=100)),
                ('small_sentence', models.CharField(blank=True, default=None, max_length=50, null=True)),
                ('summary', models.CharField(max_length=1000)),
                ('body', models.TextField()),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('visible', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Tech',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=1000)),
                ('img', models.CharField(max_length=100)),
            ],
        ),
        migrations.AlterField(
            model_name='blog',
            name='visible',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='project',
            name='technologies',
            field=models.ManyToManyField(to='website.Tech'),
        ),
    ]
