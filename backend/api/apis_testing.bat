@echo off

SET BASE_URL=http://localhost:8000/api

echo Testing Flashcards...
curl -X POST %BASE_URL%/flashcards/ -d "topic=Software Testing"

echo Testing Format Notes...
curl -X POST %BASE_URL%/format_notes/ -d "notes=This is a test note."

echo Testing Questions...
curl -X POST %BASE_URL%/questions/ -d "topic=Software Testing"

echo Tests complete.
