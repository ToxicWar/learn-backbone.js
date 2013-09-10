from django.views.generic import TemplateView
from rest_framework import viewsets
from .serializers import TaskSerializer
from .models import Task


class TaskViewSet(viewsets.ModelViewSet):
    model = Task
    serializer_class = TaskSerializer


class Home(TemplateView):
    template_name = 'app/index.html'

home = Home.as_view()
