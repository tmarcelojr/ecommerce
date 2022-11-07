from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product

# Since we are working with djanjo rest we need to serialize our json for our frontend

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        # we can list all or specific fiels but doing this will just return all the fields
        fields = '__all__'