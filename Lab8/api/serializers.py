from api.models import Product, Category
from rest_framework import serializers

class ProductSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    price = serializers.FloatField()
    description = serializers.CharField()
    count = serializers.IntegerField()
    is_active = serializers.BooleanField()
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
    
    def create(self, validated_data):
        return Product.objects.create(**validated_data)

class ProductModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'description', 'count', 'is_active', 'category')

class CategorySerializer(serializers.ModelSerializer):
    products = ProductModelSerializer(many=True, read_only=True) 
    class Meta:
        model = Category
        fields = ('id', 'name', 'products')