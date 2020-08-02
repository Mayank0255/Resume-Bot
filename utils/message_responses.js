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
        "id": 4
    },
    "work experience": {
        "id": 5
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
    }
}

module.exports = messageResponses;