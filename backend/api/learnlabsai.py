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

        return completion.choices[0].message.content


    @staticmethod
    def generate_flashcards(topic):
        
        # setup inputs for AI model
        task_description = "generate content for flashcards for a given topic. Each flashcard has a front and a back. Front part is a prompt, a keyword, a word to define, etc.\
        Back part is corresponding answer. Content of front should be as brief as possible, if possible use one word, if not then as few words as possible.\
        Generate exactly 20 flashcards for the given topic. Make it so the flashcards cover the topic well enough to give a good high level understanding."
        task_instructions = "Input: topic name. Output: 20 JSON Formatted flashcards in a JSON list. Each of the flashcard in the list is a JSON dictionary with 2 keys: front and back.\
        The values of front and back should be content for front end back respectively. Only give output the JSON formatted 20 flashcards content."
        system_message = LearnLabsAI.SYSTEM_MESSAGE_TEMPLATE.format(task_description=task_description, task_instructions=task_instructions)
        
        user_message = f"Topic to generate 20 flashcards in JSON format: `{topic}`"

        # fetch and parse response
        response = LearnLabsAI.get_open_ai_response(system_message, user_message)
        try:
            response = "[" + response.strip("[")
            response = response.strip("]") + "]"
            flashcards = json.loads(response)
        except:
            flashcards = []
        
        return flashcards

        # flashcards = [
        #     {"front": "Black Box Testing", "back": "A method of software testing that examines the functionality of an application without peering into its internal structures or workings."},
        #     {"front": "White Box Testing", "back": "A form of application testing that provides the tester with complete knowledge of the application being tested, including access to source code and design documents."},
        #     {"front": "Unit Testing", "back": "A level of software testing where individual components or functions of a software application are tested in isolation."},
        #     {"front": "Integration Testing", "back": "The phase in software testing where individual software modules are combined and tested as a group to ensure they work together as expected."},
        #     {"front": "System Testing", "back": "The process of testing an integrated system to verify that it meets specified requirements."},
        #     {"front": "Acceptance Testing", "back": "A type of testing to determine whether the system satisfies the acceptance criteria and to enable the customer to determine whether to accept the system."},
        #     {"front": "Regression Testing", "back": "Testing conducted to ensure that a recent program or code change has not adversely affected existing features."},
        #     {"front": "Load Testing", "back": "The process of putting demand on a system and measuring its response. It helps ensure that a software application can handle the expected load without performance degradation."},
        #     {"front": "Usability Testing", "back": "Testing that evaluates a product's user interface to ensure it is easy to use."},
        #     {"front": "Security Testing", "back": "A type of testing to ensure that the software systems and applications are secure."}
        # ]
        # return flashcards

    @staticmethod
    def format_notes(notes):

        # setup inputs for AI model
        task_description = "format notes. You will receive rough notes in plain text format, which may be highly unorganized. You are to\
        organize the notes and format them under headings. You should give out notes formatted with html tags, Use h1 headings and if necessary h2 also.\
        Use paragraphs for content within headings. Make it so that the notes are easy to read. Don't add to or subtract from any content from original notes."
        task_instructions = "Input: rough notes in plain text format. Output: The given notes organized and formatted with html tags."
        system_message = LearnLabsAI.SYSTEM_MESSAGE_TEMPLATE.format(task_description=task_description, task_instructions=task_instructions)
        
        user_message = f"Rough notes to organize and format: `{notes}`"
        
        # fetch and parse response
        response = LearnLabsAI.get_open_ai_response(system_message, user_message)
        print(response)
        # try:
        #     response = "[" + response.strip("[")
        #     response = response.strip("]") + "]"
        #     flashcards = json.loads(response)
        # except:
        #     flashcards = []
        
        return 

        # formatted_notes = """
        #     <h1>Introduction to LearnLabs</h1>
        #     <p>Welcome to LearnLabs, your go-to platform for AI-driven education assistance. 
        #     Here's a brief overview of what you can achieve with our powerful features:</p>

        #     <h2>Flashcards</h2>
        #     <p>Effortlessly generate flashcards for different topics to enhance your learning experience.</p>

        #     <h2>Notes Formatter</h2>
        #     <p>Organize and format your raw notes with our intelligent notes formatter. 
        #     Say goodbye to messy and unstructured notes!</p>

        #     <h2>Practice Questions Generator</h2>
        #     <p>Prepare for exams by generating practice questions and their correct answers with ease.</p>

        #     <p>Explore more features and start your journey towards smarter learning with LearnLabs!</p>
        # """
        # return formatted_notes
    
    @staticmethod
    def generate_questions(topic):

        # setup inputs for AI model
        task_description = "generate a set of questions and answers for a given topic. Generate exactly 20 question answer pairs for the given topic.\
        Make it so the questions cover the topic well enough to give a good high level understanding. Have varying styles of questions and only relavant to the topic."
        task_instructions = "Input: topic name. Output: 20 JSON Formatted question-answer pairs in a JSON list. Each of the question-answer pair in the list is\
        a JSON dictionary with 2 keys: 'question' and 'answer'. Only give output the JSON formatted 20 question answer pairs content."
        system_message = LearnLabsAI.SYSTEM_MESSAGE_TEMPLATE.format(task_description=task_description, task_instructions=task_instructions)
        
        user_message = f"Topic to generate 20 questions-answers pairs from in JSON format: `{topic}`"

        # fetch and parse response
        response = LearnLabsAI.get_open_ai_response(system_message, user_message)
        print(response)
        try:
            response = "[" + response.strip("[")
            response = response.strip("]") + "]"
            flashcards = json.loads(response)
        except:
            flashcards = []
        
        return flashcards


        # # TODO: Generate questions by AI (replace with actual implementation)
        # questions_and_answers = [
        #     {"question": "What is the main goal of Black Box Testing?", "answer": "To test the functionality of an application without knowing its internal details."},
        #     {"question": "Explain the concept of Regression Testing.", "answer": "Testing conducted to ensure that recent changes haven't adversely affected existing features."},
        #     {"question": "In White Box Testing, what does the tester have access to?", "answer": "Complete knowledge of the application, including source code and design documents."},
        #     {"question": "What is the purpose of Load Testing?", "answer": "To measure a system's response under different levels of demand."},
        #     {"question": "Define Acceptance Testing.", "answer": "Testing to determine if the system satisfies acceptance criteria and is ready for customer acceptance."},
        #     {"question": "How does Unit Testing contribute to software development?", "answer": "It tests individual components or functions in isolation to ensure they work correctly."},
        #     {"question": "What is the focus of Usability Testing?", "answer": "Evaluating a product's user interface to ensure it is easy to use."},
        #     {"question": "Why is Security Testing important?", "answer": "To ensure that software systems and applications are secure and protected against vulnerabilities."},
        #     {"question": "What does Integration Testing involve?", "answer": "Combining and testing individual software modules as a group to ensure they work together."},
        #     {"question": "Explain the concept of System Testing.", "answer": "The process of testing an integrated system to verify that it meets specified requirements."}
        # ]
        # return questions_and_answers


## Tests
if __name__ == "__main__":
    # print(LearnLabsAI.generate_questions("Chemistry atomic model"))
    print(LearnLabsAI.generate_questions("Oral hygiene best practices"))
    # print(LearnLabsAI.generate_flashcards("Chemistry atomic model"))
    # notes = """Chemistry Atomic Models:

    #     - Dalton's Atomic Model:
    #     - Atoms are indivisible and indestructible.
    #     - All atoms of a given element are identical.
    #     - Atoms of different elements have different properties.
    #     - Atoms combine in simple whole-number ratios to form compounds.
        
    #     - Thomson's Atomic Model:
    #     - Atoms are composed of positively charged substance with negatively charged electrons embedded.
    #     - Often referred to as the "plum pudding model."

    #     - Rutherford's Atomic Model:
    #     - Atoms have a small, dense nucleus containing positively charged protons.
    #     - Electrons orbit the nucleus in a mostly empty space.

    #     - Bohr's Atomic Model:
    #     - Electrons orbit the nucleus in specific energy levels or shells.
    #     - Each electron shell has a fixed energy.
    #     - Electrons can jump between shells when absorbing or emitting energy.

    #     - Quantum Mechanical Model:
    #     - Based on the principles of quantum mechanics.
    #     - Describes electrons as existing in probability clouds or orbitals.
    #     - No fixed paths for electrons, but rather a range of probable locations.

    #     - Modern Atomic Model:
    #     - Combines the principles of the quantum mechanical model with wave-particle duality.
    #     - Describes the behavior of electrons using probability distributions.
    #     - Electrons are found in electron clouds surrounding the nucleus.

    #     Understanding the progression of atomic models is crucial in comprehending the nature of matter and the structure of atoms.
    #     """
    # print("Formatting first set of notes")
    # print(LearnLabsAI.format_notes(notes))
    # print("\n" * 3)

    # notes = """Software testing is a crucial part of the software development process. It ensures that the software behaves as expected and meets the requirements.

    # There are different types of software testing, such as black box testing, white box testing, unit testing, integration testing, system testing, and acceptance testing. Each type focuses on a specific aspect of the software.

    # Black box testing is about testing the functionality without looking at the internal code. In contrast, white box testing involves having complete knowledge of the internal code and design.

    # Unit testing checks individual components or functions in isolation. Integration testing combines these components to ensure they work together. System testing evaluates the entire integrated system.

    # Acceptance testing is performed to determine whether the system meets the acceptance criteria and is ready for customer use.

    # Regression testing ensures that recent changes in the code haven't adversely affected existing features. Load testing checks how the system responds under different levels of demand.

    # Usability testing focuses on the user interface to ensure it is user-friendly. Security testing is crucial to protect the software from vulnerabilities.

    # Software testing involves a planning phase where test objectives and scope are defined. Test cases and test data are designed, and the actual testing is executed. Defects are logged, retesting is done after fixes, and reports are generated.

    # Challenges in software testing include incomplete requirements, tight project schedules, complex software architectures, and evolving software.

    # There are various testing tools available, such as Selenium for automated web application testing, JUnit and TestNG for Java unit testing, and JIRA for test case management.

    # Effective testing is essential for delivering high-quality software to end-users.
    # """
    # print("Formatting second set of notes")
    # print(LearnLabsAI.format_notes(notes))

