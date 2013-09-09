from rest_framework import viewsets
from .serializers import TaskSerializer
from .models import Task


class TaskList(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class TaskDetail(viewsets.generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TaskSerializer
    model = Task
