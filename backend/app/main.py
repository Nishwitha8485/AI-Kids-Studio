from fastapi import FastAPI

app = FastAPI(
    title="AI Kids Studio API",
    description="Backend API for AI Kids Studio",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "message": "Welcome to AI Kids Studio!"
    }

@app.get("/api/health")
def health():
    return {
        "status": "Backend Running Successfully 🚀"
    }