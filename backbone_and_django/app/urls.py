from django.conf.urls import patterns, url, include
from rest_framework import routers
import views

router = routers.DefaultRouter()
router.register(r'tasks', views.TaskList)
# router.register(r'task/{id}', views.TaskDetail)

urlpatterns = patterns('app.views',
    url(r'^', include(router.urls)),
)
