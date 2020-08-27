const achievementsSection = `
    \\section{Achievements}
    \\begin{itemize}
`

const setAchievement = achievement => {
    return `
        \\item ${achievement}
    \\end{itemize}`;

}

module.exports = achievementsHolder = {
    achievementsSection,
    setAchievement
}