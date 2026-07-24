import os
import json
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=API_KEY)

model = genai.GenerativeModel("gemini-flash-latest")


def generate_story(
    prompt,
    animation_style,
    language,
    duration,
    age_group,
    voice,
    emotion,
):
    full_prompt = f"""
You are an expert children's story writer.

Create a long, engaging children's story.

Topic: {prompt}
Animation Style: {animation_style}
Language: {language}
Duration: {duration}
Age Group: {age_group}
Voice: {voice}
Emotion: {emotion}

Generate a JSON object in this exact format:

{{
    "title": "",
    "characters": [],
    "scenes": [
        {{
            "scene_number": 1,
            "background": "",
            "narration": "",
            "dialogue": "",
            "actions": ""
        }}
    ]
}}

Requirements:
- Create 8-10 scenes.
- Keep language simple for children.
- Make the story educational and fun.
- Return ONLY valid JSON.
"""

    response = model.generate_content(full_prompt)

    return json.loads(response.text)