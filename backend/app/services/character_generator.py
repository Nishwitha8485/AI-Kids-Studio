import json
import google.generativeai as genai

model = genai.GenerativeModel("gemini-flash-latest")


def generate_characters(story):

    prompt = f"""
You are a character designer.

From the following story JSON:

{json.dumps(story, indent=2)}

Generate character descriptions.

Return ONLY valid JSON.

{{
    "characters": [
        {{
            "name": "Leo",
            "prompt": "A cute 6-year-old astronaut."
        }}
    ]
}}
"""

    response = model.generate_content(prompt)

    return json.loads(response.text)