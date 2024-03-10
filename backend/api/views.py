from django.http import JsonResponse
from .learnlabsai import LearnLabsAI
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def flashcards(request):
    topic = request.POST.get('topic', 'software testing')
    flashcards = LearnLabsAI.generate_flashcards(topic)
    result = {"flashcards": flashcards}
    return JsonResponse({"result": result}, status=200)

@csrf_exempt
def format_notes(request):
    notes = request.POST.get('notes', '')
    formatted_notes = LearnLabsAI.format_notes(notes)
    result = {"formatted_notes": formatted_notes}
    return JsonResponse({"result": result}, status=200)

@csrf_exempt
def questions(request):
    topic = request.POST.get('topic', 'software testing')
    questions = LearnLabsAI.generate_questions(topic)
    result = {"questions": questions}
    return JsonResponse({"result": result}, status=200)