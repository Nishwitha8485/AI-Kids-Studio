from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.story import router as story_router

app = FastAPI(
    title="AI Kids Studio API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Story Router with /api prefix
app.include_router(
    story_router,
    prefix="/api",
    tags=["Story"]
)


@app.get("/")
def root():
    return {
        "message": "Welcome to AI Kids Studio API 🚀"
    }


@app.get("/api/health")
def health():
    return {
        "status": "healthy"
    }