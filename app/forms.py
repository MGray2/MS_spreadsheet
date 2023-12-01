from django import forms


class New_project_form(forms.Form):
    name = forms.CharField(max_length=20)
