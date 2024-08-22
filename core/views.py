from django.shortcuts import render
from django.core.paginator import Paginator
from .models import Product
from .utils import add_products


# Create your views here.


def home(request):
    # print(add_products())
    return render(request, 'core/home.html')

def aboutUs(request):
    return render(request, 'core/about.html')

def services(request):
    return render(request, 'core/services.html')

def contact(request):
    return render(request, 'core/contact.html')

def products(request):
    products = Product.objects.all()
    products_pages = Paginator(products, 10)
    current_page = request.GET.get('page') if request.GET.get('page') else 1
    products = products_pages.get_page(current_page)
    context = {
        'products':products,
        'pages': str(products_pages.num_pages),
        'current_page': str(current_page),
    }
    return render(request, 'core/products.html',context = context)

def product_details(request,product_id):
    product = Product.objects.get(id = product_id)
    context = {
        'product':product
    }
    return render(request, 'core/product-details.html',context = context)