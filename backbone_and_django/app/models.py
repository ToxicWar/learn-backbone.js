from django.db import models


class Task(models.Model):
    title = models.CharField('Title', max_length=1000)
    is_completed = models.BooleanField('Is completed', default=False)
