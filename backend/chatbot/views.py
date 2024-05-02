from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework import status
import openai
from openai import OpenAI
# openai.api_key = 'sk-proj-i8McOAmG4v82pgL5Da5TT3BlbkFJEKeUAPUHFUzfQwDhYbeH'
# 'sk-proj-TXOEBJBBisfQZq4uZeEVT3BlbkFJLu1j7i8kSmZEcCejHeYr'

from openai import OpenAI

client = OpenAI(api_key='sk-proj-i8McOAmG4v82pgL5Da5TT3BlbkFJEKeUAPUHFUzfQwDhYbeH')

# Create your views here.
@api_view(['POST'])
def chat_with_gpt(request):
    # Expected input format: { "content": "text", "tone": "friendly", "type": "essay", "purpose": "inform" }
    try:
        # Validate and extract the required fields from the request data
        content = request.data.get('content')
        tone = request.data.get('tone')
        type = request.data.get('type')
        purpose = request.data.get('purpose')

        if not content:
            return JsonResponse({"error": "Content field is required."}, status=status.HTTP_400_BAD_REQUEST)
        
        # Construct the prompt based on input
        prompt = f"Please rewrite the following text with a {tone} tone, intended for a {type} about {purpose}: {content}"
        
        # Call OpenAI API
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "user", "content": prompt},
            ]
        )
        
        # Extract the generated text
        generated_content = str(response.choices[0].message.content)
        
        # Return the generated content
        return JsonResponse({"generated_content": generated_content}, status=status.HTTP_200_OK)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)