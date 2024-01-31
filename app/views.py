from django.shortcuts import render, redirect
from django.http.request import HttpRequest
from django.http.response import HttpResponse
from app.forms import New_project_form

# Create your views here.


def landing_page(request: HttpRequest) -> HttpResponse:
    return render(request, "menu.html")


def spread_sheet(request: HttpRequest, n, name) -> HttpResponse:
    return render(request, "spreadsheet.html", {"number": n, "name": name})


def table_of_contents(request):
    return render(request, "manual.html")


def topic_page(request, topic):
    context = {}
    return render(request, "topic.html", context)
