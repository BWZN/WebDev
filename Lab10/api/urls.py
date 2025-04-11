from django.urls import path
from api import views

urlpatterns = [
    path('companies/', views.companies_list),
    path('companies/<int:id>/', views.company_detail),
    path('companies/<int:id>/vacancies/', views.company_vacancies),
    path('vacancies/', views.VacancyListCreateAPIView.as_view()),
    path('vacancies/<int:pk>/', views.VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', views.TopTenVacanciesAPIView.as_view()),
]
