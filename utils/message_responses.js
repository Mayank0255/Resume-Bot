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
                "question": "So, tell me what's your name?"
            },
            {
                "question": "What's "
            },
            {
                "question": "So, tell me what's your name?"
            },
            {
                "question": "So, tell me what's your name?"
            },
        ]
    },
    "education": {
        "id": 3
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