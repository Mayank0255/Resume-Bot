const fs = require('fs');

const fontPackage = require('../resources/scimisc-cv');
const { setName, setEmail, setPhone, setLinkedin, setPortfolio } = require('../resources/header');
const { educationSection, setInstituteAndLocation, setMajor, setMarks, setStream } = require('../resources/education');
const { skillsSection, setSkills } = require('../resources/skills');
const { experienceSection, setRoleAndLocation, setCompanyAndTimeline, setDesc } = require('../resources/experience');
const { projectsSection, setTitleAndLink, setTimeline, setDescription } = require('../resources/projects');
const { achievementsSection, setAchievement } = require('../resources/achievements');
const { certificationsSection, setCertification } = require('../resources/certifications');
const { publicationsSection, setPublication } = require('../resources/publications');

let educationPush = true;
let skillsPush = true;
let experiencePush = true;
let projectsPush = true;
let achievementsPush = true;
let certificationsPush = true;
let publicationsPush = true;

let institute = '';
let subSkill = '';
let company = '';
let role = '';
let title = '';

const resumeConstruction = ( message, sectionName, question, section, folderPath ) => {
    const resume_template = fs.createWriteStream(folderPath + '/scimisc-cv.sty');
    resume_template.write(fontPackage);
    resume_template.end();

    const filePath = folderPath + '/main.tex';
    console.log(filePath);

    if (sectionName === 'header') {
        switch (question) {
            case section.questions[0].question:
                fs.appendFile(filePath, setName(message), err => {
                    if (err) throw err;
                });
                break
            case section.questions[1].question:
                fs.appendFile(filePath, setEmail(message), err => {
                    if (err) throw err;
                });
                break
            case section.questions[2].question:
                fs.appendFile(filePath, setPhone(message), err => {
                    if (err) throw err;
                });
                break
            case section.questions[3].question:
                fs.appendFile(filePath, setLinkedin(message), err => {
                    if (err) throw err;
                });
                break
            case section.questions[4].question:
                fs.appendFile(filePath, setPortfolio(message), err => {
                    if (err) throw err;
                });
                break
            default:
                break
        }
    } else if (sectionName === 'education') {
        if (educationPush) {
            fs.appendFile(filePath, educationSection, err => {
                if (err) throw err;
            });
            educationPush = false;
        }

        switch (question) {
            case section.questions[1].question[0].ask:
                institute = message;
                break
            case section.questions[1].question[1].ask:
                fs.appendFile(filePath, setInstituteAndLocation(institute, message), err => {
                    if (err) throw err;
                });
                break
            case section.questions[1].question[2].ask:
                fs.appendFile(filePath, setStream(message), err => {
                    if (err) throw err;
                });
                break
            case section.questions[1].question[3].ask:
                fs.appendFile(filePath, setMajor(message), err => {
                    if (err) throw err;
                });
                break
            case section.questions[1].question[4].ask:
                fs.appendFile(filePath, setMarks(message), err => {
                    if (err) throw err;
                });
                break
            default:
                break
        }
    } else if (sectionName === 'skills') {
        if (skillsPush) {
            fs.appendFile(filePath, skillsSection, err => {
                if (err) throw err;
            });
            skillsPush = false;
        }

        switch (question) {
            case section.questions[1].question[0].ask:
                subSkill = message;
                break
            case section.questions[1].question[1].ask:
                fs.appendFile(filePath, setSkills(subSkill, message), err => {
                    if (err) throw err;
                });
                break
            default:
                break
        }
    } else if (sectionName === 'work experience') {
        if (experiencePush) {
            fs.appendFile(filePath, experienceSection, err => {
                if (err) throw err;
            });
            experiencePush = false;
        }

        switch (question) {
            case section.questions[1].question[0].ask:
                role = message;
                break
            case section.questions[1].question[1].ask:
                fs.appendFile(filePath, setRoleAndLocation(role, message), err => {
                    if (err) throw err;
                });
                break
            case section.questions[1].question[2].ask:
                company = message;
                break
            case section.questions[1].question[3].ask:
                fs.appendFile(filePath, setCompanyAndTimeline(company, message), err => {
                    if (err) throw err;
                });
                break
            case section.questions[1].question[4].ask:
                fs.appendFile(filePath, setDesc(message), err => {
                    if (err) throw err;
                });
                break
            default:
                break
        }
    } else if (sectionName === 'projects') {
        if (projectsPush) {
            fs.appendFile(filePath, projectsSection, err => {
                if (err) throw err;
            });
            projectsPush = false;
        }

        switch (question) {
            case section.questions[1].question[0].ask:
                title = message;
                break
            case section.questions[1].question[1].ask:
                fs.appendFile(filePath, setTitleAndLink(title, message), err => {
                    if (err) throw err;
                });
                break
            case section.questions[1].question[2].ask:
                fs.appendFile(filePath, setTimeline(message), err => {
                    if (err) throw err;
                });
                break
            case section.questions[1].question[3].ask:
                fs.appendFile(filePath, setDescription(message), err => {
                    if (err) throw err;
                });
                break
            default:
                break
        }
    } else if (sectionName === 'achievements') {
        if (achievementsPush) {
            fs.appendFile(filePath, achievementsSection, err => {
                if (err) throw err;
            });
            achievementsPush = false;
        }

        switch (question) {
            case section.questions[1].question[0].ask:
                fs.appendFile(filePath, setAchievement(message), err => {
                    if (err) throw err;
                });
                break
            default:
                break
        }
    } else if (sectionName === 'certifications') {
        if (certificationsPush) {
            fs.appendFile(filePath, certificationsSection, err => {
                if (err) throw err;
            });
            certificationsPush = false;
        }

        switch (question) {
            case section.questions[1].question[0].ask:
                fs.appendFile(filePath, setCertification(message), err => {
                    if (err) throw err;
                });
                break
            default:
                break
        }
    } else if (sectionName === 'publications') {
        if (publicationsPush) {
            fs.appendFile(filePath, publicationsSection, err => {
                if (err) throw err;
            });
            publicationsPush = false;
        }

        switch (question) {
            case section.questions[1].question[0].ask:
                fs.appendFile(filePath, setPublication(message), err => {
                    if (err) throw err;
                });
                break
            default:
                break
        }
    }
}

module.exports = resumeConstruction;