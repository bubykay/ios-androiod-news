from django.db import models
from django.utils import timezone


# Create your models here
class Category(models.Model):
    name = models.CharField(max_length=10)

    def __str__(self):
        return self.name
    
    def __unicode__(self):
        return u'(%s) %s' % (self.activity_code.short, self.name)


class News(models.Model):
    class NewObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (
        ('draft', 'Draft'),
        ('published', 'Published')
    )

    title = models.CharField(max_length=150)
    createdAt = models.DateTimeField(default=timezone.now)
    slug = models.SlugField(max_length=140, unique_for_date='createdAt')
    content = models.TextField()
    status = models.CharField(choices=options, default='published', max_length=120)
    image = models.URLField()
    views = models.IntegerField(default=0)
    source = models.CharField(default='Kokoroyin', max_length=100)
    category = models.ForeignKey(Category, on_delete=models.PROTECT, default=81)
    objects = models.Manager()
    newsObject = NewObjects()

    # class Meta:
    #     ordering = ('-published',)

    def __str__(self):
        return self.title
    


class PunchLink(models.Model):
    options = (
        ('unscraped', 'Unscraped'),
        ('scraped', 'Scraped')
    )
    name = models.URLField()
    status = models.CharField(choices=options, default='unscraped', max_length=120)
    createdAt = models.DateTimeField(default=timezone.now)


    def __str__(self):
        return self.name

class VanguardLink(models.Model):
    options = (
        ('unscraped', 'Unscraped'),
        ('scraped', 'Scraped')
    )
    name = models.URLField()
    status = models.CharField(choices=options, default='unscraped', max_length=120)
    createdAt = models.DateTimeField(default=timezone.now)


    def __str__(self):
        return self.name