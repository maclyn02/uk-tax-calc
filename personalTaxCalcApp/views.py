from django.shortcuts import render
import os
# Create your views here.

def homepage(request):
    return render(request, 'taxCalc/homepage.html')
