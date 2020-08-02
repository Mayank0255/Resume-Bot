const messageResponses = {
    "begin": {
        "id": 1,
        "questions": [
            {
                "asked": false,
                "question": "Hey, would you like to begin with your resume?",
                "quick_replies": [
                    "Ya sure",
                    "Not now"
                ]
            },
            {
                "asked": false,
                "question": "It might take about 10-15 minutes. That's fine right?",
                "quick_replies": [
                    "Yes that's fine",
                    "Sorry then"
                ]
            }
        ]
    },
    "header": {
        "id": 2,
        "questions": [
            {
                "asked": false,
                "question": "So, tell me what's your full name?"
            },
            {
                "asked": false,
                "question": "What's your email address that you would like to share?"
            },
            {
                "asked": false,
                "question": "Your Phone Number??"
            },
            {
                "asked": false,
                "question": "Can you give us a link to your Linkedin profile?",
                "quick_replies": [
                    "I don't have a Linkedin account!"
                ]
            },
            {
                "asked": false,
                "question": "What's the link to your portfolio?",
                "quick_replies": [
                    "I don't have a portfolio yet!"
                ]
            }
        ]
    },
    "education": {
        "id": 3,
        "questions": [
            {
                "asked": false,
                "question": "Would you like to begin with the Education section? or would you like to skip it?",
                "quick_replies": [
                    "Yes, let's begin",
                    "Let's skip it"
                ]
            },
            {
                "asked": false,
                "question": [
                    {
                        "done": false,
                        "ask": "What's the Institute Name??"
                    },
                    {
                        "done": false,
                        "ask": "Where is it located?"
                    },
                    {
                        "done": false,
                        "ask": "What was/is your Stream over there?"
                    },
                    {
                        "done": false,
                        "ask": "What was/is your Major over there?"
                    },
                    {
                        "done": false,
                        "ask": "What was your CGPA or Percentage??"
                    },
                    {
                        "done": false,
                        "ask": "Do you want to add another education?",
                        "quick_replies": [
                            "Yes, I do",
                            "No, this is enough"
                        ]
                    }
                ]
            }
        ]
    },
    "skills": {
        "id": 4,
        "questions": [
            {
                "asked": false,
                "question": "Would you like to begin with the Skills section? or would you like to skip it?",
                "quick_replies": [
                    "Yes, let's begin",
                    "Let's skip it"
                ]
            },
            {
                "asked": false,
                "question": [
                    {
                        "done": false,
                        "ask": "Give a sub-title to the type of skills like languages, programming, etc."
                    },
                    {
                        "done": false,
                        "ask": "Give us all the skills related to the sub-title you just wrote. (Note: separate them with a comma)"
                    },
                    {
                        "done": false,
                        "ask": "Do you want to add another skill sub-title?",
                        "quick_replies": [
                            "Yes, I do",
                            "No, this is enough"
                        ]
                    }
                ]
            }
        ]
    },
    "work experience": {
        "id": 5,
        "questions": [
            {
                "asked": false,
                "question": "Would you like to begin with the Work Experience section? or would you like to skip it?",
                "quick_replies": [
                    "Yes, let's begin",
                    "Let's skip it"
                ]
            },
            {
                "asked": false,
                "question": [
                    {
                        "done": false,
                        "ask": "What's the name of the organisation??"
                    },
                    {
                        "done": false,
                        "ask": "What was your role over there? e.g.: software developer"
                    },
                    {
                        "done": false,
                        "ask": "Where's the organisation located? e.g.: Gurgaon, Haryana"
                    },
                    {
                        "done": false,
                        "ask": "What was the timeline of your experience there? e.g.: July 2020 - August 2020"
                    },
                    {
                        "done": false,
                        "ask": "Give us a description of it in a single paragraph."
                    },
                    {
                        "done": false,
                        "ask": "Do you want to add another experience?",
                        "quick_replies": [
                            "Yes, I do",
                            "No, this is enough"
                        ]
                    }
                ]
            }
        ]
    },
    "projects": {
        "id": 6
    },
    "achievements": {
        "id": 7
    },
    "certifications": {
        "id": 8
    },
    "publications": {
        "id": 9
    },
    "end": {
        "id": 10
    }

}

module.exports = messageResponses;