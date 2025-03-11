export const templates = [
  { id: "blank", 
    label: "Blank document", 
    imageUrl: "/blank-document.svg" ,
    initialContent: ""
},
  { id: "software-proposal", 
    label: "Software development proposal", 
    imageUrl: "/software-proposal.svg" ,
    initialContent:`
    <div>
        <header>
            <h1>Software Proposal</h1>
            <p>Submitted by: <strong>Name</strong></p>
            <p>Date: <strong>2025-03-11</strong></p>
        </header>
        
        <section>
            <h2>Project Overview</h2>
            <p>This proposal outlines the development of a software application aimed at [Brief description of the purpose of the software]. The software will feature [List key features] to enhance user experience and efficiency.</p>
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
            <p>The scope of this project includes the development, testing, and deployment of the software application. User training and support will also be provided to ensure smooth adoption of the new system.</p>
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
        </section>`
},
  { id: "project-proposal", 
    label: "Project Proposal", 
    imageUrl: "/project-proposal.svg" ,
    initialContent:`  <div>
        <header>
            <h1>Software Proposal</h1>
            <p>Submitted by: <strong>Name</strong></p>
            <p>Date: <strong>2025-03-11</strong></p>
        </header>
        
        <section>
            <h2>Project Overview</h2>
            <p>This proposal outlines the development of a software application aimed at [Brief description of the purpose of the software]. The software will feature [List key features] to enhance user experience and efficiency.</p>
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
            <p>The scope of this project includes the development, testing, and deployment of the software application. User training and support will also be provided to ensure smooth adoption of the new system.</p>
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
        </section>`
     
    
},
  { id: "business-letter", 
    label: "Business letter", 
    imageUrl: "/business-letter.svg" ,
    initialContent: `
      <div>
        <header>
            <h1>Business Letter</h1>
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
            <p>[Recipient's Name]</p>
            <p>[Recipient's Title]</p>
            <p>[Company's Name]</p>
            <p>[Company's Address]</p>
            <p>[City, State, ZIP Code]</p>
        </section>
        
        <section>
            <p>Dear [Recipient's Name],</p>
            <p>I am writing to [state the purpose of your letter]. [Provide a brief introduction and context for your letter].</p>
            <p>[Include the main body of your letter here. This section can be multiple paragraphs long, depending on the content and purpose of the letter. Provide details, explanations, and any necessary information to support the purpose of your letter].</p>
            <p>[Conclude your letter with a summary of the key points, a call to action, or any next steps you would like the recipient to take].</p>
            <p>Thank you for your attention to this matter. I look forward to your response.</p>
            <p>Sincerely,</p>
            <p>[Your Name]</p>
        </section>
    </div>`
},
  { id: "resume", 
    label: "Resumé", 
    imageUrl: "/resume.svg" ,
    initialContent: `

    <div>
        <header>
            <h1>[Your Name]</h1>
            <p>[Your Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>[Your Email Address]</p>
            <p>[Your Phone Number]</p>
        </header>
        
        <section>
            <h2>Objective</h2>
            <p>[Brief statement about your career goals and what you aim to achieve with this resumé.]</p>
        </section>
        
        <section>
            <h2>Education</h2>
            <p><strong>[Degree]</strong> - [Field of Study]</p>
            <p>[University Name], [Graduation Year]</p>
        </section>
        
        <section>
            <h2>Experience</h2>
            <p><strong>[Job Title]</strong></p>
            <p>[Company Name], [Start Date] - [End Date]</p>
            <ul>
                <li>[Responsibility or Achievement 1]</li>
                <li>[Responsibility or Achievement 2]</li>
                <li>[Responsibility or Achievement 3]</li>
                <!-- Add more responsibilities or achievements as needed -->
            </ul>
            <p><strong>[Job Title]</strong></p>
            <p>[Company Name], [Start Date] - [End Date]</p>
            <ul>
                <li>[Responsibility or Achievement 1]</li>
                <li>[Responsibility or Achievement 2]</li>
                <li>[Responsibility or Achievement 3]</li>
                <!-- Add more responsibilities or achievements as needed -->
            </ul>
        </section>
        
        <section>
            <h2>Skills</h2>
            <ul>
                <li>[Skill 1]</li>
                <li>[Skill 2]</li>
                <li>[Skill 3]</li>
                <!-- Add more skills as needed -->
            </ul>
        </section>
        
        <section>
            <h2>Certifications</h2>
            <ul>
                <li>[Certification 1]</li>
                <li>[Certification 2]</li>
                <li>[Certification 3]</li>
                <!-- Add more certifications as needed -->
            </ul>
        </section>
        
        <section>
            <h2>Projects</h2>
            <p><strong>[Project Name]</strong></p>
            <p>[Brief description of the project, your role, and the outcome.]</p>
            <p><strong>[Project Name]</strong></p>
            <p>[Brief description of the project, your role, and the outcome.]</p>
            <!-- Add more projects as needed -->
        </section>`
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
    initialContent: `
     <div>
        <header>
            <h1>Letter</h1>
            <p>Submitted by: <strong>Name</strong></p>
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
            <p>[Recipient's Name]</p>
            <p>[Recipient's Title]</p>
            <p>[Company's Name]</p>
            <p>[Company's Address]</p>
            <p>[City, State, ZIP Code]</p>
        </section>
        
        <section>
            <p>Dear [Recipient's Name],</p>
            <p>I am writing to [state the purpose of your letter]. [Provide a brief introduction and context for your letter].</p>
            <p>[Include the main body of your letter here. This section can be multiple paragraphs long, depending on the content and purpose of the letter. Provide details, explanations, and any necessary information to support the purpose of your letter].</p>
            <p>[Conclude your letter with a summary of the key points, a call to action, or any next steps you would like the recipient to take].</p>
            <p>Thank you for your attention to this matter. I look forward to your response.</p>
            <p>Sincerely,</p>
            <p>[Your Name]</p>
        </section>
    </div>`
},
];
