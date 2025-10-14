from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-user/', include("users.urls")),
    path('api-bugs/', include("bugs.urls")),
    path('api-projects/', include("projects.urls")),
    path('api-common/', include("common.urls")),
]

