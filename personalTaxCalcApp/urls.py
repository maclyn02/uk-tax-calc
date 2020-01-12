from django.urls import path
from .import views

urlpatterns = [
    path('', views.homepage, name='homepage'),
    patterns('',url(r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root':settings.STATIC_ROOT)}),)

]
