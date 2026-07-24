from pydantic import BaseModel


class StoryRequest(BaseModel):
    prompt: str
    animation_style: str
    language: str
    duration: str
    age_group: str
    voice: str
    emotion: str


class StoryResponse(BaseModel):
    status: str
    message: str
    story: str