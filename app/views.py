from django.shortcuts import render
from django.http.request import HttpRequest
from django.http.response import HttpResponse

# Create your views here.


def landing_page(request: HttpRequest) -> HttpResponse:
    return render(request, "menu.html")


def spread_sheet(request: HttpRequest) -> HttpResponse:
    return render(request, "spreadsheet.html")
