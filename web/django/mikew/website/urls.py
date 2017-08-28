from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'api/index/$', views.index_json, name='index_json'),
    url(r'api/blogs/$', views.blogs_json, name='blogs_json'),
    url(r'api/blog/(?P<slug>.*)/$', views.blog_json, name='blog_json'),
    url(r'^.*$', views.index, name="general-url"),
]
