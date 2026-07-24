from fastapi import APIRouter
from pydantic import BaseModel

from app.services.story_generator import generate_story
from app.services.character_generator import generate_characters

router = APIRouter()


class StoryRequest(BaseModel):
    prompt: str
    animation_style: str
    language: str
    duration: str
    age_group: str
    voice: str
    emotion: str


@router.post("/generate-story")
def create_story(request: StoryRequest):

    story = generate_story(
        prompt=request.prompt,
        animation_style=request.animation_style,
        language=request.language,
        duration=request.duration,
        age_group=request.age_group,
        voice=request.voice,
        emotion=request.emotion,
    )

    characters = generate_characters(story)

    return {
        "success": True,
        "story": story,
        "characters": characters,
    }