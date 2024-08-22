from django.urls import path
from . import views


app_name = 'core'
urlpatterns = [
path('', views.home,name="home"),
path('about-us/', views.aboutUs,name="aboutUs"),
path('services/',views.services,name="services"),
path('contact/',views.contact,name="contact"),
path('products/',views.products,name = "products"),
path('product-details/<int:product_id>/',views.product_details,name = "product-details"),
]
