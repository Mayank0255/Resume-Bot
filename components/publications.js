const publicationsSection = `
    \\section{Publications}
    \\begin{itemize}
`

const setPublication = publication => {
    return `
        \\item ${publication}
    \\end{itemize}`;

}

module.exports = publicationsHolder = {
    publicationsSection,
    setPublication
}