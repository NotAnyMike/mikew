# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-09-07 20:06
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0006_shortinfo_lang'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='background_color',
            field=models.CharField(default=None, max_length=6, null=True),
        ),
        migrations.AddField(
            model_name='project',
            name='color',
            field=models.CharField(default=None, max_length=6, null=True),
        ),
    ]
