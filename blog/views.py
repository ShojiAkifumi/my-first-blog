from django.shortcuts import render
from django.utils import timezone
from .models import Post

# Create your views here.
def post_list(request):
    posts = ["勇者", "魔法使い", "戦士"]
    return render(request, 'blog/post_list.html', {'posts':posts})