from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'api/(?P<lang>(es)|(en))/index/$', views.index_json, name='index_json'),
    url(r'api/(?P<lang>(es)|(en))/blogs/$', views.blogs_json, name='blogs_json'),
    url(r'api/blog/(?P<slug>.*)/$', views.blog_json, name='blog_json'),
    url(r'api/(?P<lang>(es)|(en))/projects/$', views.projects_json, name='projects_json'),
    url(r'api/project/(?P<slug>.*)/$', views.project_json, name='project_json'),
    url(r'api/(?P<lang>(es)|(en))/writings/$', views.writings_json, name='writings_json'),
    url(r'api/writing/(?P<slug>.*)/$', views.writing_json, name='writing_json'),
    url(r'^.*$', views.index, name="general-url"),
]
