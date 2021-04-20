from django.contrib import admin
from .models import News, Category, VanguardLink, PunchLink


# Register your models here.
class CategoryAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Category._meta.get_fields()]
#
#
# @admin.register(News)
# class NewsAdmin(admin.ModelAdmin):
#     list_display = [field.name for field in News._meta.get_fields()]


admin.site.register(News)
admin.site.register(Category)
admin.site.register(VanguardLink)
admin.site.register(PunchLink)


