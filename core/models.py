from django.db import models

# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=100,null=True,blank=True,verbose_name="Product Name")
    description = models.TextField(blank = True, null = True,verbose_name="Product Description")
    image = models.ImageField(upload_to='products', blank=True, null=True)
    def __str__(self):
        if self.name is not None:
            return self.name
        else:
            return str(self.id)
