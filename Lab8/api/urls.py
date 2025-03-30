from django.urls import path
from api.views import products_list, product_detail, categories_list, category_detail, category_products

urlpatterns = [
    path('products/', products_list, name='products-list'),
    path('products/<int:pk>/', product_detail, name='product-detail'),
    path('categories/', categories_list, name='categories-list'),
    path('categories/<int:pk>/', category_detail, name='category-detail'),
    path('categories/<int:pk>/products/', category_products, name='category-products'),
]