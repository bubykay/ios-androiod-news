from rest_framework import routers, serializers, viewsets, permissions, generics
from django.contrib.auth.models import User, Group
from .serializer import UserSerializer, GroupSerializer, NewsSerializer, PunchLinkSerializer, VanguardLinkSerializer
from .models import News, PunchLink, VanguardLink


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.filter(status='published').order_by('-createdAt')
    serializer_class = NewsSerializer

class PunchLinkViewSet(viewsets.ModelViewSet):
    queryset = PunchLink.objects.filter(status='unscraped')
    serializer_class = PunchLinkSerializer

class VanguardLinkViewSet(viewsets.ModelViewSet):
    queryset = VanguardLink.objects.filter(status='unscraped').order_by('-createdAt')
    serializer_class = VanguardLinkSerializer


