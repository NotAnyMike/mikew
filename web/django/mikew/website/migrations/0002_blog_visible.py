# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-27 22:07
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='visible',
            field=models.BooleanField(default=False),
        ),
    ]