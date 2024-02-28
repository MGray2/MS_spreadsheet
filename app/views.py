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

            headers = [
                toolbox_h1,
                toolbox_h2,
                toolbox_h3,
                toolbox_h4,
                toolbox_h5,
                toolbox_h6,
            ]
            paragraphs = [
                toolbox_custom,
                toolbox_clear,
                toolbox_save,
                toolbox_load,
                toolbox_restore,
                toolbox_print,
            ]
            content = zip(headers, paragraphs)

            context = {"topic": "About Toolbox", "content": content}
        case "Hotkeys":
            headers = [
                hotkeys_h1,
                hotkeys_h2,
                hotkeys_h3,
            ]
            paragraphs = [
                hotkeys_cc,
                hotkeys_cf,
                hotkeys_crc,
            ]
            content = zip(headers, paragraphs)

            context = {"topic": "About Hotkeys", "content": content}
        case "SavingLoading":
            context = {"topic": "About Saving and Loading"}
        case "Restore":
            context = {"topic": "About Restoring"}
        case "Functions":
            context = {"topic": "About Functions"}
        case "_":  # this the the python-equivallent of default
            context = {"topic": ""}

    return render(request, "topic.html", context)
