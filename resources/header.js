const firstQuestion = name => {
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

module.exports = {
    firstQuestion
}