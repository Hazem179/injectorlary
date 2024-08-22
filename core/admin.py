from django.contrib import admin
from .models import *




admin.site.site_header = ("InjectorLary Admin")
admin.site.site_title = ("InjectorLary Admin Portal")
admin.site.index_title = ("Welcome to InjectorLary Admin Portal")

admin.site.register(Product)

