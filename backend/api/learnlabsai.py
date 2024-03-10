class LearnLabsAI:
    @staticmethod
    def generate_flashcards(topic):

        # TODO: generate flashcards by AI
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
