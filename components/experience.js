const experienceSection = `
    \\end{itemize}

    \\section{Work Experience}
    
    %% Another custom command provide by scimisc-cv.sty.
    %% First two argumetns are typeset on the first line in bold; 3rd and 4th arguments are typset on second line in italics. 2nd, 3rd and 4th arguments are OPTIONAL
`

const setRoleAndLocation = (role, location) => {
    return `
        \\cvsubsection{${role}}[${location}]`;
}

const setCompanyAndTimeline = (company, timeline) => {
    return `
        [${company}][${timeline}]`;
}

const setDesc = (description) => {
    return `
        ${description}`;
}

module.exports = {
    experienceSection,
    setRoleAndLocation,
    setCompanyAndTimeline,
    setDesc
}