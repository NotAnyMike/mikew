# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-09-08 03:11
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0007_auto_20170907_2006'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='background_color',
            field=models.CharField(blank=True, default=None, max_length=6, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='color',
            field=models.CharField(blank=True, default=None, max_length=6, null=True),
        ),
    ]