import json
from openai import OpenAI
import os


class LearnLabsAI:
    # SYSTEM_MESSAGE_TEMPLATE = """You are an AI agent part of an educational AI app aimed to make studying easier for students and teaching easier for teachers.
    # There are various tasks that you can perform for example generating question and answers for a topic and formatting notes. You will be asked to perform
    # one of those tasks at a time, with detailed informationa about required input and output. Follow instructions carefully and don't reply with anything extra."""
    SYSTEM_MESSAGE_TEMPLATE = """You are an AI agent part of an educational AI app aimed to make studying easier for students and teaching easier for teachers.
    Your task is to `{task_description}`. Following are the intructions for the task: `{task_instructions}`"""

    @staticmethod
    def get_open_ai_response(system_message, user_message):
        client = OpenAI(
          api_key="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",
        )

        completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": system_message},
                {"role": "user", "content": user_message}
            ]
        )

        print(completion.choices[0].message.content)


    @staticmethod
    def generate_flashcards(topic):
        
        # # setup inputs for AI model
        # task_description = "generate content for flashcards for a given topic. Each flashcard has a front and a back. Front part is a prompt, a keyword, a word to define, etc.\
        # Back part is corresponding answer. Content of front should be as brief as possible, if possible use one word, if not then as few words as possible.\
        # Generate exactly 20 flashcards for the given topic. Make it so the flashcards cover the topic well enough to give a good high level understanding."
        # task_instructions = "Input: topic name. Output: 20 JSON Formatted flashcards in a JSON list. Each of the flashcard in the list is a JSON dictionary with 2 keys: front and back.\
        # The values of front and back should be content for front end back respectively. Only give output the JSON formatted 20 flashcards content."
        # system_message = LearnLabsAI.SYSTEM_MESSAGE_TEMPLATE.format(task_description=task_description, task_instructions=task_instructions)
        
        # user_message = f"Topic to generate 20 flashcards in JSON format: `{topic}`"

        # # fetch and parse response
        # response = LearnLabsAI.get_open_ai_response(system_message, user_message)
        # try:
        #     response = "[" + response.strip("[")
        #     response = response.strip("]") + "]"
        #     flashcards = json.loads(response)
        # except:
        #     flashcards = []
        
        # return flashcards

        flashcards = [
            {"front": "Black Box Testing", "back": "A method of software testing that examines the functionality of an application without peering into its internal structures or workings."},
            {"front": "White Box Testing", "back": "A form of application testing that provides the tester with complete knowledge of the application being tested, including access to source code and design documents."},
            {"front": "Unit Testing", "back": "A level of software testing where individual components or functions of a software application are tested in isolation."},
            {"front": "Integration Testing", "back": "The phase in software testing where individual software modules are combined and tested as a group to ensure they work together as expected."},
            {"front": "System Testing", "back": "The process of testing an integrated system to verify that it meets specified requirements."},
            {"front": "Acceptance Testing", "back": "A type of testing to determine whether the system satisfies the acceptance criteria and to enable the customer to determine whether to accept the system."},
            {"front": "Regression Testing", "back": "Testing conducted to ensure that a recent program or code change has not adversely affected existing features."},
            {"front": "Load Testing", "back": "The process of putting demand on a system and measuring its response. It helps ensure that a software application can handle the expected load without performance degradation."},
            {"front": "Usability Testing", "back": "Testing that evaluates a product's user interface to ensure it is easy to use."},
            {"front": "Security Testing", "back": "A type of testing to ensure that the software systems and applications are secure."}
        ]
        return flashcards

    @staticmethod
    def format_notes(notes):
        # TODO: Format notes by AI (replace with actual implementation)
        formatted_notes = """
            <h1>Introduction to LearnLabs</h1>
            <p>Welcome to LearnLabs, your go-to platform for AI-driven education assistance. 
            Here's a brief overview of what you can achieve with our powerful features:</p>

            <h2>Flashcards</h2>
            <p>Effortlessly generate flashcards for different topics to enhance your learning experience.</p>

            <h2>Notes Formatter</h2>
            <p>Organize and format your raw notes with our intelligent notes formatter. 
            Say goodbye to messy and unstructured notes!</p>

            <h2>Practice Questions Generator</h2>
            <p>Prepare for exams by generating practice questions and their correct answers with ease.</p>

            <p>Explore more features and start your journey towards smarter learning with LearnLabs!</p>
        """
        return formatted_notes
    
    @staticmethod
    def generate_questions(topic):
        # TODO: Generate questions by AI (replace with actual implementation)
        questions_and_answers = [
            {"question": "What is the main goal of Black Box Testing?", "answer": "To test the functionality of an application without knowing its internal details."},
            {"question": "Explain the concept of Regression Testing.", "answer": "Testing conducted to ensure that recent changes haven't adversely affected existing features."},
            {"question": "In White Box Testing, what does the tester have access to?", "answer": "Complete knowledge of the application, including source code and design documents."},
            {"question": "What is the purpose of Load Testing?", "answer": "To measure a system's response under different levels of demand."},
            {"question": "Define Acceptance Testing.", "answer": "Testing to determine if the system satisfies acceptance criteria and is ready for customer acceptance."},
            {"question": "How does Unit Testing contribute to software development?", "answer": "It tests individual components or functions in isolation to ensure they work correctly."},
            {"question": "What is the focus of Usability Testing?", "answer": "Evaluating a product's user interface to ensure it is easy to use."},
            {"question": "Why is Security Testing important?", "answer": "To ensure that software systems and applications are secure and protected against vulnerabilities."},
            {"question": "What does Integration Testing involve?", "answer": "Combining and testing individual software modules as a group to ensure they work together."},
            {"question": "Explain the concept of System Testing.", "answer": "The process of testing an integrated system to verify that it meets specified requirements."}
        ]
        return questions_and_answers


# LearnLabsAI.generate_flashcards("Introduction to large language models")