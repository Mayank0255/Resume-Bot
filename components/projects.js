const projectsSection = `
    \\section{Projects}

    %% Another custom command provide by scimisc-cv.sty.
    %% First two argumetns are typeset on the first line in bold; 3rd and 4th arguments are typset on second line in italics. 2nd, 3rd and 4th arguments are OPTIONAL
    `

const setTitleAndLink = (title, link) => {
    return `
        \\cvsubsection{${title}}[\\href{${link}}{Click Here}]`;
}

const setTimeline = (timeline) => {
    return `
        [${timeline}][]`;
}

const setDescription = (description) => {
    return `
        ${description}`;
}

module.exports = projectsHolder = {
    projectsSection,
    setTitleAndLink,
    setTimeline,
    setDescription
}