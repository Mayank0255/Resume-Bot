const skillsSection = `

    \\section{Skills}

    \\begin{itemize}
`

const setSkills = (subTitle, skills) => {
    return `
        \\item \\textbf{${subTitle}:} ${skills}`;
}

module.exports = skillsHolder = {
    skillsSection,
    setSkills
}