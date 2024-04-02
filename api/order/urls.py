from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views  import OrderViewSet
from .import views
router = DefaultRouter()
router.register(r'',OrderViewSet)

urlpatterns = [
    path('',include(router.urls)),
]