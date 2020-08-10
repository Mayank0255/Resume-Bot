const setName = name => {
    return `
    \\documentclass{article}
    \\usepackage{scimisc-cv}
    \\usepackage{hyperref}
                    
    \\title{Resume Template}
    \\author{${name}}
    \\date{May 2020}
                    
    %% These are custom commands defined in scimisc-cv.sty
    \\cvname{${name}}`
}

const setEmail = email => {
    return `
    \\cvpersonalinfo{
    ${email} \\cvinfosep`
}

const setPhone = phone => {
    return `
    ${phone} \\cvinfosep`
}

const setLinkedin = link => {
    return `
    \\href{${link}}{LinkedIn} \\cvinfosep`
}

const setPortfolio = link => {
    return `
    \\href{${link}}{Portfolio}`
}

module.exports = {
    setName,
    setEmail,
    setPhone,
    setLinkedin,
    setPortfolio
}