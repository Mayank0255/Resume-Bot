const responsesStructure = {
    "begin": {
        "id": 1,
        "questions": [
            {
                "asked": false,
                "question": "Hey, would you like to begin with your resume? It might take about 10-15 minutes.",
                "quick_replies": [
                    "Ya sure",
                    "Not now"
                ]
            }
        ]
    },
    "header": {
        "id": 2,
        "questions": [
            {
                "asked": false,
                "question": "So, tell me what's your full name?",
                "quick_replies": []
            },
            {
                "asked": false,
                "question": "What's your email address that you would like to share?",
                "quick_replies": []
            },
            {
                "asked": false,
                "question": "Your Phone Number??",
                "quick_replies": []
            },
            {
                "asked": false,
                "question": "Can you give us a link to your Linkedin profile?",
                "quick_replies": [
                    "I don't have that!"
                ]
            },
            {
                "asked": false,
                "question": "What's the link to your portfolio?",
                "quick_replies": [
                    "I don't have that!"
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
                        "ask": "What's the Institute Name??",
                        "quick_replies": []
                    },
                    {
                        "done": false,
                        "ask": "Where is it located?",
                        "quick_replies": []
                    },
                    {
                        "done": false,
                        "ask": "What was/is your Stream over there?",
                        "quick_replies": []
                    },
                    {
                        "done": false,
                        "ask": "What was/is your Major over there?",
                        "quick_replies": []
                    },
                    {
                        "done": false,
                        "ask": "What was your CGPA or Percentage??",
                        "quick_replies": []
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
                        "ask": "Give a sub-title to the type of skills like languages, programming, etc.",
                        "quick_replies": []
                    },
                    {
                        "done": false,
                        "ask": "Give us all the skills related to the sub-title you just wrote. (Note: separate them with a comma)",
                        "quick_replies": []
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
                        "ask": "What's the name of the organisation??",
                        "quick_replies": []
                    },
                    {
                        "done": false,
                        "ask": "What was your role over there? e.g.: software developer",
                        "quick_replies": []
                    },
                    {
                        "done": false,
                        "ask": "Where's the organisation located? e.g.: Gurgaon, Haryana",
                        "quick_replies": []
                    },
                    {
                        "done": false,
                        "ask": "What was the timeline of your experience there? e.g.: July 2020 - August 2020",
                        "quick_replies": []
                    },
                    {
                        "done": false,
                        "ask": "Give us a description of it in a single paragraph.",
                        "quick_replies": []
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
        "id": 6,
        "questions": [
            {
                "asked": false,
                "question": "Would you like to begin with the Projects section? or would you like to skip it?",
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
                        "ask": "Name of the Project??",
                        "quick_replies": []
                    },
                    {
                        "done": false,
                        "ask": "Give us any kind of link related to it. e.g.: source code",
                        "quick_replies": []
                    },
                    {
                        "done": false,
                        "ask": "How much time did it take? e.g.: July 2020 - August 2020",
                        "quick_replies": []
                    },
                    {
                        "done": false,
                        "ask": "Give us a description of the project in one paragraph.",
                        "quick_replies": []
                    },
                    {
                        "done": false,
                        "ask": "Do you want to add another project?",
                        "quick_replies": [
                            "Yes, I do",
                            "No, this is enough"
                        ]
                    }
                ]
            }
        ]
    },
    "achievements": {
        "id": 7,
        "questions": [
            {
                "asked": false,
                "question": "Would you like to begin with your Achievements section? or would you like to skip it?",
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
                        "ask": "What's the achievement that you would like to share?",
                        "quick_replies": []
                    },
                    {
                        "done": false,
                        "ask": "Do you want to add another achievement?",
                        "quick_replies": [
                            "Yes, I do",
                            "No, this is enough"
                        ]
                    }
                ]
            }
        ]
    },
    "certifications": {
        "id": 8,
        "questions": [
            {
                "asked": false,
                "question": "Would you like to begin with your Certifications section? or would you like to skip it?",
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
                        "ask": "Which Certification would you like to begin with??",
                        "quick_replies": []
                    },
                    {
                        "done": false,
                        "ask": "Do you want to give another certification?",
                        "quick_replies": [
                            "Yes, I do",
                            "No, this is enough"
                        ]
                    }
                ]
            }
        ]
    },
    "publications": {
        "id": 9,
        "questions": [
            {
                "asked": false,
                "question": "Would you like to begin with your Publications section? or would you like to skip it?",
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
                        "ask": "What was the publication that you would like to give?",
                        "quick_replies": []
                    },
                    {
                        "done": false,
                        "ask": "Do you want to add another publication?",
                        "quick_replies": [
                            "Yes, I do",
                            "No, this is enough"
                        ]
                    }
                ]
            }
        ]
    },
    "end": {
        "id": 10,
        "questions": [
            {
                "asked": false,
                "question": "So, the questionnaire has finally come to an end. Would like to see your resume?",
                "quick_replies": [
                    "Ya, I surely would!",
                    "Nah!"
                ]
            }
        ]
    }
}

module.exports = responsesStructure;