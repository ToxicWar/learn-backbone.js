from django.conf.urls import patterns, url, include
from rest_framework import routers
import views

router = routers.DefaultRouter()
router.register(r'tasks', views.TaskViewSet)

urlpatterns = patterns('',
    url(r'^$', 'app.views.home', name='Home'),
    url(r'', include(router.urls)),
)
