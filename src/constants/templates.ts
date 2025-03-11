export const templates = [
  { id: "blank", 
    label: "Blank document", 
    imageUrl: "/blank-document.svg" ,
    initialContent: ""
},
  { id: "software-proposal", 
    label: "Software development proposal", 
    imageUrl: "/software-proposal.svg" ,
    initialContent:``
},
  { id: "project-proposal", 
    label: "Project Proposal", 
    imageUrl: "/project-proposal.svg" ,
    initialContent:`
     <header>
            <h1>Software Project Proposal</h1>
            <p>Submitted by: <strong>Name</strong></p>
            <p>Date: <strong>2025-03-11</strong></p>
        </header>
        
        <section>
            <h2>Project Overview</h2>
            <p>This project aims to develop a software application that will streamline and automate the workflow of [Brief description of the purpose of the software]. The proposed software will include features such as [List key features] to enhance user experience and efficiency.</p>
        </section>
        
        <section>
            <h2>Objectives</h2>
            <ul>
                <li>Objective 1: [Description of objective 1]</li>
                <li>Objective 2: [Description of objective 2]</li>
                <li>Objective 3: [Description of objective 3]</li>
                <!-- Add more objectives as needed -->
            </ul>
        </section>
        
        <section>
            <h2>Scope</h2>
            <p>The scope of this project includes the development, testing, and deployment of the software application. It will also involve user training and support to ensure smooth adoption of the new system.</p>
        </section>
        
        <section>
            <h2>Timeline</h2>
            <ul>
                <li>Phase 1: Requirement Analysis - [Start Date] to [End Date]</li>
                <li>Phase 2: Design - [Start Date] to [End Date]</li>
                <li>Phase 3: Development - [Start Date] to [End Date]</li>
                <li>Phase 4: Testing - [Start Date] to [End Date]</li>
                <li>Phase 5: Deployment - [Start Date] to [End Date]</li>
                <li>Phase 6: Maintenance and Support - Ongoing</li>
            </ul>
        </section>
        
        <section>
            <h2>Budget</h2>
            <p>The estimated budget for this project is $[Amount]. This includes costs for software development, testing, deployment, and initial support and training.</p>
        </section>
        
        <section>
            <h2>Team</h2>
            <p>The project team will consist of the following members:</p>
            <ul>
                <li>Project Manager: [Name]</li>
                <li>Lead Developer: [Name]</li>
                <li>QA Specialist: [Name]</li>
                <li>UI/UX Designer: [Name]</li>
                <li>Technical Support: [Name]</li>
                <!-- Add more team roles as needed -->
            </ul>
        </section>
        
        <section>
            <h2>Risks and Mitigation</h2>
            <p>Potential risks for this project include [List potential risks]. To mitigate these risks, the team will [Describe mitigation strategies].</p>
        </section>
        
        <footer >
            <p>&copy; 2025 Insert name. All rights reserved.</p>
        </footer>
    </div>
    `
},
  { id: "business-letter", 
    label: "Business letter", 
    imageUrl: "/business-letter.svg" ,
    initialContent: ``
},
  { id: "resume", 
    label: "Resumé", 
    imageUrl: "/resume.svg" ,
    initialContent: ``
},
  { id: "cover-letter", 
    label: "Cover letter", 
    imageUrl: "/cover-letter.svg" ,
    initialContent: `
     <div>
        <header>
            <h1>Cover Letter</h1>
            <p>Submitted by: <strong>Matt Valenz</strong></p>
            <p>Date: <strong>2025-03-11</strong></p>
        </header>
        
        <section>
            <p>[Your Name]</p>
            <p>[Your Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>[Your Email Address]</p>
            <p>[Your Phone Number]</p>
        </section>
        
        <section>
            <p>[Date]</p>
        </section>
        
        <section>
            <p>[Employer's Name]</p>
            <p>[Company's Name]</p>
            <p>[Company's Address]</p>
            <p>[City, State, ZIP Code]</p>
        </section>
        
        <section>
            <p>Dear [Employer's Name],</p>
            <p>I am writing to express my interest in the [Job Title] position at [Company's Name] as advertised [where you found the job posting]. With [number] years of experience in [Your Field], I am confident in my ability to contribute effectively to your team.</p>
            <p>In my previous role at [Previous Company], I [describe key responsibilities and achievements]. I have developed strong skills in [list relevant skills], which I believe will be beneficial in this role.</p>
            <p>I am particularly drawn to this opportunity at [Company's Name] because [mention any specific reasons you are interested in the company and position]. I am excited about the possibility of bringing my unique background and perspective to your innovative team.</p>
            <p>Thank you for considering my application. I look forward to the opportunity to discuss how my skills and experiences align with the needs of your team. Please feel free to contact me at [Your Phone Number] or via email at [Your Email Address] to schedule an interview.</p>
            <p>Sincerely,</p>
            <p>[Your Name]</p>
        </section>
    </div>`
},
  { id: "letter", 
    label: "Letter", 
    imageUrl: "/letter.svg" ,
    initialContent: ``
},
];
