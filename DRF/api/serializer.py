from rest_framework import serializers
from django.contrib.auth.models import User, Group
from .models import News, PunchLink, VanguardLink


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'url', 'username', 'is_staff']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class NewsSerializer(serializers.ModelSerializer):
    category = serializers.CharField(read_only=True)
    class Meta:
        model = News
        fields = [field.name for field in News._meta.get_fields()]
        # fields = ['id', 'category']

class PunchLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = PunchLink
        fields = [field.name for field in PunchLink._meta.get_fields()]

class VanguardLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = VanguardLink
        fields = [field.name for field in VanguardLink._meta.get_fields()]
