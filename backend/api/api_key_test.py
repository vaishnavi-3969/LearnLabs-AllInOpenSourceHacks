
from dotenv import load_dotenv
import os
import openai

# Load environment variables from the .env file
load_dotenv()

# Access the OpenAI API key
openai_api_key = os.getenv("OPENAI_API_KEY")

print(openai_api_key)