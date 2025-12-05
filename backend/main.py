from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from typing import Optional, List
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI()

# --- CORS CONFIGURATION ---
origins = [
    "http://localhost:5173", # Vite default
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allow all for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- MONGODB CONNECTION ---
uri = os.getenv("MONGO_URI")

if not uri:
    # Fallback if .env fails, though you should use .env
    print("WARNING: MONGO_URI not found.")

# Connect to MongoDB
client = MongoClient(uri, server_api=ServerApi('1'))
db = client['feedback_db']
collection = db['feedbacks']

try:
    client.admin.command('ping')
    print("✅ Connected to MongoDB!")
except Exception as e:
    print(f"❌ MongoDB Error: {e}")

# --- PYDANTIC MODELS ---
class FeedbackModel(BaseModel):
    name: str
    role: str
    company: str
    review: str
    rating: int
    initials: str
    color: str
    image: Optional[str] = None

# --- ENDPOINTS ---

@app.post("/api/feedback", status_code=201)
async def create_feedback(feedback: FeedbackModel):
    try:
        # 1. Convert Pydantic model to dict
        feedback_dict = feedback.dict()
        
        # 2. Insert into MongoDB
        # CRITICAL: pymongo modifies 'feedback_dict' in-place by adding '_id'
        result = collection.insert_one(feedback_dict)
        
        # 3. FIX: Convert the ObjectId to a string before returning
        # This prevents the "ObjectId is not iterable" error
        feedback_dict["_id"] = str(result.inserted_id)
        
        return {
            "message": "Feedback received successfully", 
            "id": str(result.inserted_id),
            "data": feedback_dict
        }
    except Exception as e:
        print(f"Error inserting: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/feedback", response_model=List[FeedbackModel])
async def get_feedbacks():
    try:
        # Fetch all feedbacks
        # We exclude '_id' here to keep the response matching FeedbackModel 
        # (unless you add an id field to the model)
        feedbacks = list(collection.find({}, {"_id": 0}))
        
        return feedbacks[::-1] # Newest first
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))