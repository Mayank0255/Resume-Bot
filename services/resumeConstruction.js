const fs = require('fs');

const fontPackage = require('../components/scimisc-cv');
const headerHolder = require('../components/header');
const educationHolder = require('../components/education');
const skillsHolder = require('../components/skills');
const experienceHolder = require('../components/experience');
const projectsHolder = require('../components/projects');
const achievementsHolder = require('../components/achievements');
const certificationsHolder = require('../components/certifications');
const publicationsHolder = require('../components/publications');

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
                fs.appendFile(filePath, headerHolder.setName(message), err => {
                    if (err) throw err;
                });
                break
            case section.questions[1].question:
                fs.appendFile(filePath, headerHolder.setEmail(message), err => {
                    if (err) throw err;
                });
                break
            case section.questions[2].question:
                fs.appendFile(filePath, headerHolder.setPhone(message), err => {
                    if (err) throw err;
                });
                break
            case section.questions[3].question:
                fs.appendFile(filePath, headerHolder.setLinkedin(message), err => {
                    if (err) throw err;
                });
                break
            case section.questions[4].question:
                fs.appendFile(filePath, headerHolder.setPortfolio(message), err => {
                    if (err) throw err;
                });
                break
            default:
                break
        }
    } else if (sectionName === 'education') {
        if (educationPush) {
            fs.appendFile(filePath, educationHolder.educationSection, err => {
                if (err) throw err;
            });
            educationPush = false;
        }

        switch (question) {
            case section.questions[1].question[0].ask:
                institute = message;
                break
            case section.questions[1].question[1].ask:
                fs.appendFile(filePath, educationHolder.setInstituteAndLocation(institute, message), err => {
                    if (err) throw err;
                });
                break
            case section.questions[1].question[2].ask:
                fs.appendFile(filePath, educationHolder.setStream(message), err => {
                    if (err) throw err;
                });
                break
            case section.questions[1].question[3].ask:
                fs.appendFile(filePath, educationHolder.setMajor(message), err => {
                    if (err) throw err;
                });
                break
            case section.questions[1].question[4].ask:
                fs.appendFile(filePath, educationHolder.setMarks(message), err => {
                    if (err) throw err;
                });
                break
            default:
                break
        }
    } else if (sectionName === 'skills') {
        if (skillsPush) {
            fs.appendFile(filePath, skillsHolder.skillsSection, err => {
                if (err) throw err;
            });
            skillsPush = false;
        }

        switch (question) {
            case section.questions[1].question[0].ask:
                subSkill = message;
                break
            case section.questions[1].question[1].ask:
                fs.appendFile(filePath, skillsHolder.setSkills(subSkill, message), err => {
                    if (err) throw err;
                });
                break
            default:
                break
        }
    } else if (sectionName === 'work experience') {
        if (experiencePush) {
            fs.appendFile(filePath, experienceHolder.experienceSection, err => {
                if (err) throw err;
            });
            experiencePush = false;
        }

        switch (question) {
            case section.questions[1].question[0].ask:
                role = message;
                break
            case section.questions[1].question[1].ask:
                fs.appendFile(filePath, experienceHolder.setRoleAndLocation(role, message), err => {
                    if (err) throw err;
                });
                break
            case section.questions[1].question[2].ask:
                company = message;
                break
            case section.questions[1].question[3].ask:
                fs.appendFile(filePath, experienceHolder.setCompanyAndTimeline(company, message), err => {
                    if (err) throw err;
                });
                break
            case section.questions[1].question[4].ask:
                fs.appendFile(filePath, experienceHolder.setDesc(message), err => {
                    if (err) throw err;
                });
                break
            default:
                break
        }
    } else if (sectionName === 'projects') {
        if (projectsPush) {
            fs.appendFile(filePath, projectsHolder.projectsSection, err => {
                if (err) throw err;
            });
            projectsPush = false;
        }

        switch (question) {
            case section.questions[1].question[0].ask:
                title = message;
                break
            case section.questions[1].question[1].ask:
                fs.appendFile(filePath, projectsHolder.setTitleAndLink(title, message), err => {
                    if (err) throw err;
                });
                break
            case section.questions[1].question[2].ask:
                fs.appendFile(filePath, projectsHolder.setTimeline(message), err => {
                    if (err) throw err;
                });
                break
            case section.questions[1].question[3].ask:
                fs.appendFile(filePath, projectsHolder.setDescription(message), err => {
                    if (err) throw err;
                });
                break
            default:
                break
        }
    } else if (sectionName === 'achievements') {
        if (achievementsPush) {
            fs.appendFile(filePath, achievementsHolder.achievementsSection, err => {
                if (err) throw err;
            });
            achievementsPush = false;
        }

        switch (question) {
            case section.questions[1].question[0].ask:
                fs.appendFile(filePath, achievementsHolder.setAchievement(message), err => {
                    if (err) throw err;
                });
                break
            default:
                break
        }
    } else if (sectionName === 'certifications') {
        if (certificationsPush) {
            fs.appendFile(filePath, certificationsHolder.certificationsSection, err => {
                if (err) throw err;
            });
            certificationsPush = false;
        }

        switch (question) {
            case section.questions[1].question[0].ask:
                fs.appendFile(filePath, certificationsHolder.setCertification(message), err => {
                    if (err) throw err;
                });
                break
            default:
                break
        }
    } else if (sectionName === 'publications') {
        if (publicationsPush) {
            fs.appendFile(filePath, publicationsHolder.publicationsSection, err => {
                if (err) throw err;
            });
            publicationsPush = false;
        }

        switch (question) {
            case section.questions[1].question[0].ask:
                fs.appendFile(filePath, publicationsHolder.setPublication(message), err => {
                    if (err) throw err;
                });
                break
            default:
                break
        }
    }
}

module.exports = resumeConstruction;