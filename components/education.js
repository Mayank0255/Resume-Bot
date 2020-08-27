const educationSection = `
    }
    
    \\begin{document}

    % \\maketitle %% This is LaTeX's default title constructed from \\title,\\author,\\date

    \\makecvtitle %% This is a custom command constructing the CV title from \\cvname, \\cvpersonalinfo

    \\section{Education}
`

const setInstituteAndLocation = (name, location) => {
    return `
    \\cvsubsection{${name}}[${location}]`;
}

const setStream = stream => {
    return `
    [${stream}][]`;
}

const setMajor = major => {
    return `
    \\begin{itemize}
        \\item \\textbf{Major:} ${major}`;
}

const setMarks = marks => {
    return `
    \\item \\textbf{${marks.includes('%') ? 'PERCENTAGE' : 'CGPA'}:} ${marks}
    \\end{itemize}`
}

module.exports = educationHolder = {
    educationSection,
    setInstituteAndLocation,
    setStream,
    setMajor,
    setMarks
}