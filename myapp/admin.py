from django.contrib import admin
from . models import Product, Customer, Cart, Payment, OrderPlaced, Wishlist
from django.urls import reverse
from django.utils.html import format_html
from django.contrib.auth.models import Group

# Register your models here.
@admin.register(Product)
class ProductModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'discounted_price','category', 'product_images']
   
@admin.register(Customer)
class CustomerModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'locality','city', 'state', 'zipcode']

@admin.register(Cart)
class CartModelAdmin(admin.ModelAdmin):
    list_display = ['id','user','product','quantity']
    def product(self,obj):
        link = reverse("admin:app_product_change",args=[obj.product.pk])
        return format_html('<a href="{}">{}</a>',link, obj.product.title)

@admin.register(Payment)
class CartModelAdmin(admin.ModelAdmin):
    list_display = ['id','user','amount','razorpay_order_id','razorpay_payment_status','razorpay_payment_id','paid']

@admin.register(OrderPlaced)
class CartModelAdmin(admin.ModelAdmin):
    list_display = ['id','user','customer','product' ,'quantity','ordered_date','status','payment']
    def customers(self,obj):
        link = reverse("admin:app_product_change",args=[obj.product.pk])
        return format_html('<a href="{}">{}</a>',link, obj.product.name)
  

@admin.register(Wishlist)
class CartModelAdmin(admin.ModelAdmin):
    list_display = ['id','user','product']
    def products(self,obj):
        link = reverse("admin:app_product_change",args=[obj.product.pk])
        return format_html('<a href="{}">{}</a>',link, obj.product.title)
  

admin.site.unregister(Group)  