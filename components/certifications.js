const certificationsSection = `
    \\section{Certifications}
    \\begin{itemize}
`

const setCertification = certificate => {
    return `
        \\item ${certificate}
    \\end{itemize}`;

}

module.exports = certificationsHolder = {
    certificationsSection,
    setCertification
}