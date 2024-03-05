from django.shortcuts import render, redirect
from django.http.request import HttpRequest
from django.http.response import HttpResponse
from app.forms import New_project_form
from app.text import *

# Create your views here.


def landing_page(request: HttpRequest) -> HttpResponse:
    return render(request, "menu.html")


def spread_sheet(request: HttpRequest, n, name) -> HttpResponse:
    return render(request, "spreadsheet.html", {"number": n, "name": name})


def table_of_contents(request):
    return render(request, "manual.html")


def topic_page(request, topic):

    match topic:  # python switch case
        case "Toolbox":
            content = zip(toolbox_headers, toolbox_paragraphs)

            context = {"topic": "About Toolbox", "content": content}
        case "Hotkeys":
            content = zip(hotkeys_headers, hotkeys_paragraphs)

            context = {"topic": "About Hotkeys", "content": content}
        case "SavingLoading":
            content = zip(saveload_headers, saveload_paragraphs)

            context = {"topic": "About Saving and Loading", "content": content}
        case "Functions":
            content = zip(function_headers, function_paragraphs)

            context = {"topic": "About Functions", "content": content}
        case "_":  # this the the python-equivallent of default
            context = {"topic": ""}

    return render(request, "topic.html", context)
