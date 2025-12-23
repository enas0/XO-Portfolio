// ================= TEAM MEMBER DATA =================
const TEAM = {
  sara: {
    name: "Sara Khirfan",
    photo: "assets/images/team-members/sara.png",
    bio: "I am a passionate and results-oriented software engineer skilled in system analysis, UI/UX, and the full SDLC. I’m Head of Project Planning and Design at XO for Software and a Generative AI Intern at HTU. Through my internship and ongoing learning, I’m working to become an AI-powered software engineer.",
    linkedin: "https://www.linkedin.com/in/sara-khirfan3112",
    github: "https://github.com/SaraKhirfan",
    email: "mailto:sara.khirfan@outlook.com",
    educationHtml: `
      <strong>Bachelor's Degree in Computer Information Systems</strong><br/>
      The University of Jordan<br/>
      <span style="opacity:.7">Oct 2021 - Jul 2025</span>
    `,
    projects: [
      { title: "LEVIN – Space Biology Research", img: "assets/images/projects/project3.png", desc: "As the UI/UX Designer for the web and mobile platforms and the Mobile Developer, I designed user-centered experiences and developed the LEVIN mobile app to help students and researchers explore and validate their ideas. Being part of a 3rd place winning project at NASA Space Apps Amman was a proud achievement." },
      { title: "TaskOrbit – Graduation Project", img: "assets/images/projects/team-member-proj/taskorbit.png", desc: "TaskOrbit is a Scrum-based project management mobile app developed as my graduation project at the University of Jordan. I led the project end-to-end, handling requirements, UI/UX design, and full-stack development using Flutter and Firebase. The project earned Grade A (4.0/4.0)." }
    ],
    certsHtml: `
      <div><strong>AWS Academy Generative AI Foundations | AWS</strong> <span style="float:right;opacity:.7">Nov 2025 - Dec 2025</span></div><br/>
      <div><strong>Aspire Leaders Program | Harvard University</strong> <span style="float:right;opacity:.7">Oct 2025 - Dec 2025</span></div><br/>
      <div><strong>AWS Academy Cloud Foundations | AWS </strong> <span style="float:right;opacity:.7">Apr 2025 - May 2025</span></div><br/>
      <div><strong>UI/UX Design | The Hope International</strong> <span style="float:right;opacity:.7">Nov 2023 - Feb 2024</span></div>
    `
  },
  hayat: {
    name: "Hayat Al-barbarawi",
    photo: "assets/images/team-members/hayat2.png",
    bio: "A passionate Software Engineer with a bachelor’s degree in Computer Information Systems and intensive training in full-stack development. Proficient in building robust backend systems and intuitive user interfaces using Python, Django, and modern web technologies. Currently working as a Software Engineer at XO for Software, where I contribute to designing and developing scalable, user-centered digital solutions. A fast learner and collaborative team player, eager to contribute to innovative software products in dynamic tech environments.",
    linkedin: "https://www.linkedin.com/in/hayat-hani",
    github: "https://github.com/hayat-hani",
    email: "mailto:hayatalbarbarawi@gmail.com",
    educationHtml: `
      <strong>Software Engineering Career Bridging Program</strong><br/>
      General Assembly<br/>
      GPA: 4.0/4.0<br/>
      <span style="opacity:.7">Sep 2025 – Oct 2025</span><br/>
      <strong>Bachelor's Degree in Computer Information Systems</strong><br/>
      The University of Jordan<br/>
      GPA: 3.71/4.0<br/>
      <span style="opacity:.7">Oct 2021 - Aug 2025</span>
    `,
    projects: [
      { title: "SkillHub – Learning & Skill-Sharing Platform", img: "assets/images/projects/team-member-proj/skillhub.png", desc: "SkillHub is a Django-powered personal development platform that helps users track skills, manage projects, and organize their learning journey in a structured and user-friendly way.", link: "https://skillhub-2119f1896bd4.herokuapp.com/" },
      { title: "TaskOrbit – Graduation Project", img: "assets/images/projects/team-member-proj/taskorbit.png", desc: "TaskOrbit is a Scrum-based project management mobile application developed as my graduation project at the University of Jordan. I worked as the Frontend and Backend Developer, contributing to feature implementation and full-stack development using Flutter and Firebase. The project received an A grade (4.0/4.0)." }
    ],
    certsHtml: `
      <div><strong>Software Engineering | General Assembly</strong> <span style="float:right;opacity:.7">Sep 2025 - Oct 2025</span></div><br/>
      <div><strong>Flutter and Dart | Udemy</strong> <span style="float:right;opacity:.7">Oct 2024 - Jan 2025</span></div><br/>
      <div><strong>AWS Academy Cloud Foundations | AWS Academy</strong> <span style="float:right;opacity:.7">Aug 2024 - Sep 2024</span></div><br/>
      <div><strong>English Language Diploma | JU Gate Academy</strong> <span style="float:right;opacity:.7">Jan 2023 - Jul 2023</span></div>
    `
  },
  enas: {
    name: "Enas Al-Thaher",
    photo: "assets/images/team-members/e.png",
    bio: "I am a passionate and detail-oriented Front-End Developer at XO for Software, with skills in front-end web development and UI/UX design. I focus on building responsive and user-friendly web interfaces by translating UI designs into functional and well-structured front-end code.",
    linkedin: "https://jo.linkedin.com/in/enas-althaher-1651042b7",
    github: "https://github.com/enas0",
    email: "mailto:enasalthaher91@gmail.com",
    educationHtml: `
      <strong>Computer Science Student</strong><br/>
      The University of Jordan<br/>
      <span style="opacity:.7"> Oct 2023 </span>
    `,
    projects: [
      { title: "Food Security in Jordan", img: "assets/images/projects/project7.jpeg", desc: "As the Front-End Developer, I implemented responsive and functional web interfaces for the Food Security in Jordan platform for the Pixelsite Web Competition. This project allowed me to strengthen my front-end development skills while contributing to a platform addressing an important topic. Winning 1st place in the competition." },
      { title: "LIBROLOOP — Where Books Connect People ", img: "assets/images/projects/project5.png", desc: "As Front-End Developer for LibroLoop, I built responsive web pages for a platform connecting readers, communities, and publishers, gaining hands-on experience in translating requirements into clean and maintainable front-end code." },
      { title: "My Accessible Journey ", img: "assets/images/projects/project6.png", desc: "As the UI/UX Designer and Front-End Developer for My Accessible Journey, a project in the Orange Accessibility Challenge 2025, I designed and implemented user-centered, responsive web interfaces to help people with disabilities plan and enjoy their travel experiences" }
    ],
    certsHtml: `
     <div><strong> Fall Stack Engineer | Code Cademy  </strong> <span style="float:right;opacity:.7">NOV 2025 </span></div><br/>
      <div><strong>Problem Solving |NASA </strong> <span style="float:right;opacity:.7">Sep 2025 - Oct 2025</span></div><br/>
      <div><strong>UI/UX Design | Code Cademy </strong> <span style="float:right;opacity:.7"> Dec 2025 </span></div>
    `
  },


  // add other members here: hayat, hashem, sedra, ...

  majd: {
    name: "Majd Anas",
    photo: "assets/images/team-members/majd.png",
    bio: " a computer science and front-end developer who is always looking for new things to learn.",
    linkedin: "https://www.linkedin.com/in/majd-anas-746180386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github: "https://github.com/majd-anas",
    email: "majdanas2004@gmail.com",
    educationHtml: `
      <strong>Computer science, University of Jordan .<br/>
      <span style="opacity:.7"> 2023-now</span>
    `,
    projects: [
      { title: "LEVIN – Space Biology Research", img: "assets/images/projects/project3.png", desc: "As the UI/UX Designer for the web and mobile platforms and the Mobile Developer, I designed user-centered experiences and developed the LEVIN mobile app to help students and researchers explore and validate their ideas. Being part of a 3rd place winning project at NASA Space Apps Amman was a proud achievement." },

    ],

  },

  mahmoud: {
    name: "Mahmoud",
    photo: "assets/images/team-members/mahmoud.png",
    bio: " An ambitious HR professional focused on building strong teams, delivering practical people solutions, and supporting sustainable company growth.",
    linkedin: "https://www.linkedin.com/in/sanker5h?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/sanker5h",
    email: "malmasri552@gmail.com ",
    educationHtml: `
      <strong>Bachelor's Degree in Computer  Science </strong><br/>
     Al-Hussain Bin Talal<br/>
      <span style="opacity:.7">Oct2020-Jul2024</span>
    `,

  },

  //notcomplete
  hashem: {
    name: "Hashem Shatat",
    photo: "assets/images/team-members/hashem.png",
    bio: "Founder and CEO of XO for Software, specializing in software development, IT solutions, artificial intelligence, web and mobile app development, and UI/UX design. He focuses on building innovative digital solutions and supporting tech talent through educational initiatives and collaborations.",
    linkedin: "https://www.linkedin.com/in/hashem-shatat-559796331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github: "https://github.com/has73m",
    email: "hashemtthat@gmail.com",
    educationHtml: `
      <strong>Computer science student  </strong><br/>
      The University of Jordan<br/>
      <span style="opacity:.7">Oct2023-now</span>
    `,
    projects: [
      { title: "LEVIN – Space Biology Research", img: "assets/images/projects/project3.png", desc: "As the UI/UX Designer for the web and mobile platforms and the Mobile Developer, I designed user-centered experiences and developed the LEVIN mobile app to help students and researchers explore and validate their ideas. Being part of a 3rd place winning project at NASA Space Apps Amman was a proud achievement." },
      { title: "Semsem Educational Platform", img: "assets/images/projects/project1.png", desc: " A fun and interactive learning platform designed to boost children’s creativity and early skills." },
      { title: "Say2Buy Platform", img: "assets/images/projects/project2.png", desc: " A modern AI-powered shopping assistant designed to make online shopping easier and smarter." },


    ],
    certsHtml: `
      <div><strong>NASA space apps 2025 Problem solver|Nasa</strong> <span style="float:right;opacity:.7">2025</span></div><br/>
      <div><strong>Labiba for AI AI agents|IEEE CIS </strong> <span style="float:right;opacity:.7">2025</span></div><br/>
      <div><strong>AI for beginners |HP </strong> <span style="float:right;opacity:.7">2025</span></div><br/>
      <div><strong>Problem solver|NASA </strong> <span style="float:right;opacity:.7">2025</span></div><br/>
      <div><strong>NASA space apps 2024|Al-Hussein Technical University </strong> <span style="float:right;opacity:.7">2024</span></div><br/>
      <div><strong>Fintech rally|participation  </strong> <span style="float:right;opacity:.7">2025</span></div><br/>
       <div><strong>Fintech rally|3rd Place Winning Team  </strong> <span style="float:right;opacity:.7">2025</span></div><br/>
       <div><strong>Ai week 2025|participation  </strong> <span style="float:right;opacity:.7">2025</span></div><br/>
          <div><strong> web development session workshop |IEEE </strong> <span style="float:right;opacity:.7">2025</span></div><br/>
    `

  },

  yousefAwar: {
    name: "Yousef Awar",
    photo: "assets/images/team-members/yousefawar.png",
    bio: " Back-End Developer specializing in PHP with experience in building server-side logic, handling databases, and developing dynamic web applications. Strong background in computer science, problem-solving, and writing clean, maintainable code.",
    linkedin: "https://www.linkedin.com/in/yousef-alawar-09bb2437b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/YousefAlawar",
    email: "yousefalawar777@gmail.com",
    educationHtml: `
      <strong>Computer Science Student</strong><br/>
      Zarqa University<br/>
      <span style="opacity:.7">2023-Present</span>
    `,
    projects: [
      { title: "Back-End Developer", img: "assets/images/projects/team-member-proj/yousefAwar1.png", desc: "Built the PHP back-end logic for managing car data and handling database operations." },

    ],

  },

  leen: {
    name: "Leen Hamad ",
    photo: "assets/images/team-members/leen.png",
    bio: "Computer Science student at Zarqa University with basic knowledge of Java and web development.",
    linkedin: " https://www.linkedin.com/in/leen-hamad-626241384%EF%BF%BC",
    github: "https://github.com/leenhamad",
    email: "leenhamad356@gmail.com ",
    educationHtml: `
      <strong>Computer Science Student</strong><br/>
      Zarqa University <br/>
      <span style="opacity:.7">2024 -Now</span>
    `,
    projects: [

      { title: "Restaurant Menu Website", img: "assets/images/projects/team-member-proj/leen1.png", desc: "Built a static website using HTML. Created pages for restaurant info, menu, and feedback form." },
      { title: "Gym Project (Java, In Progress)", img: "assets/images/projects/team-member-proj/leen2.png", desc: " Developing a gym management system using Java; implementing features and applying class concepts." },

    ],


  },

  lujain: {
    name: "Lujaen alnablse",
    photo: "assets/images/team-members/lujain.png",
    bio: " A motivated and versatile Data Science and Artificial Intelligence student with strong expertise in *Python programming* and *web design & development. Recognized for a **leadership-oriented personality, quick learning ability, and adaptability across diverse fields. Passionate about exploring new knowledge and applying innovative solutions to real-world challenges. Experienced in collaborative projects, competitions, and initiatives that combine **technical skills with creativity and social impac\n- Skilled in *Python programming, data analysis, and web development*.  ||Skilled: Strong *leadership and communication abilities*, proven through workshops, volunteering, and project initiatives. & Quick learner with a passion for *continuous growth and multidisciplinary exploration*.&  Active participant in *entrepreneurship, innovation, and AI-focused programs*.  &Driven by a mission to make technology *accessible and impactful for diverse communities",
    linkedin: " https://www.linkedin.com/in/lujaen-alnablse-b7412b350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github: "https://github.com/lujaenyousef9-prog",
    email: " Lujaenwaseem597@gmail.com",
    educationHtml: `
      <strong> Data science and artificial intelligence Student  </strong><br/>
     al hussein bin talal university  <br/>
      <span style="opacity:.7">2023-Now</span>
    `,
    projects: [
      {
        title: "Food Security Project", img: "assets/images/projects/team-member-proj/foodSecPro.png", desc: `An intelligent platform combining meteorology, agriculture, and travel to help users plan smartly
       | Achievement: 2nd place at the national level.` },
      { title: "Rehlati – Website for People with Disabilities", img: "assets/images/projects/team-member-proj/Rehlati.png", desc: "Designed and developed accessible web interfaces focused on usability and inclusivity.Achievement: 4th place at the national level." },

    ],
    certsHtml: `
      <div><strong>Influential Leadership Workshop (6 hours) |Arab Advisory Center</strong> <span style="float:right;opacity:.7">21/06/2024 </span></div><br/>
      <div><strong> Success and Career Development Skills Workshop (6 hours)  |Arab Advisory Center   </strong> <span style="float:right;opacity:.7"> 13/07/2024</span></div><br/>
      <div><strong>Entrepreneurs & Small Business Support Conference Ministry of Youth | Center for Entrepreneurship & Innovation  </strong> <span style="float:right;opacity:.7"> 19/11/2025 </span></div><br/>
      <div><strong>Experience Certificate | Presentation & Performance on Stage, Guitar Playing  |King Abdullah II Cultural Center</strong> <span style="float:right;opacity:.7">01/03/2025</span></div><br/>
      <div><strong>Certificate of Participation | Public Relations Officer with IEEE Organization</strong> <span style="float:right;opacity:.7"> 15/10/2025</span></div><br/>
      <div><strong>Ambassador in Codescape|IEEE Competition  </strong> <span style="float:right;opacity:.7"> 19/07/2025  </span></div><br/>
      <div><strong>Python Programming Course  </strong> <span style="float:right;opacity:.7">   12/03/2025 </span></div><br/>
     <div><strong> “My Journey” Project for Persons with Disabilities |Al-Hussein Bin Talal University/strong> <span style="float:right;opacity:.7">15/12/2025 </span></div><br/>
      <div><strong>Pixlsite Competition – Second Place Nationwide |Al-Isra University</strong> <span style="float:right;opacity:.7">01/10/2025 </span></div><br/>
      <div><strong>Supporting Persons with Disabilities |Zarqa Autism Center</strong> <span style="float:right;opacity:.7">16/08/2024  </span></div><br/>
      <div><strong> Entrepreneurship & Artificial Intelligence Bootcamp (3 days training)  Ministry of Youth | Jerash </strong> <span style="float:right;opacity:.7">29–31/05/2025 </span></div><br/>
      <div><strong> Students for Students Initiative | Al-Hussein Bin Talal University</strong> <span style="float:right;opacity:.7"> 06/05/2024 </span></div>
    `
  },

  //notcomplete
  raghad: {
    name: "Raghad Zubeidi",
    photo: "assets/images/team-members/raghad.png",
    bio: "Business Information Technology graduate, working in verification and supporting organizational and financial processes, with experience in project coordination and frontend development. || Experience in verification, quality assurance, organizational tasks, and project management support",
    linkedin: "http://linkedin.com/in/raghad-zubeidi-0a6286356",
    github: " ",
    email: "raghad1zubeidi@gmail.com",
    educationHtml: `
      <strong>Bachelor's Degree in Business Information Technology</strong></br>
      The University of Jordan<br/>
      <span style="opacity:.7">Oct 2021 - Jul 2025</span>
    `,

    certsHtml: `
      <div><strong>FrontEnd developer |Zain Jordan| 2024</strong> <span style="float:right;opacity:.7">Nov 2025 - Dec 2025</span></div><br/>

    `
  },

  omar: {
    name: "Omar ",
    photo: "assets/images/team-members/omar.png",
    bio: " I am Omar Mohammed, a Full-Stack Web Developer with a strong focus on Back-End development using ASP.NETI am continuously working on enhancing my technical skills and building scalable, high-quality software solutions that meet both user and business needs.",
    linkedin: "https://www.linkedin.com/in/omar-almahrouqe/",
    github: "https://github.com/Omartsr",
    email: "omar.tsr05@gmail.com",
    educationHtml: `
      <strong>Computer science student</strong><br/>
      The University of Jordan<br/>
      <span style="opacity:.7">Oct 2023 - Now</span>
    `,
    projects: [
      { title: "SkyCue", img: "assets/images/projects/project4.png", desc: "An intelligent platform combining meteorology, agriculture, and travel to help users plan smartly." },
    ],
    certsHtml: `
     <div><strong>Nasa Space App Hackathon Participation </strong> <span style="float:right;opacity:.7">Oct 2025</span></div><br/>
     <div><strong>Introduction to Web Development| Princess Sumaya University For Technology</strong> <span style="float:right;opacity:.7">1 Oct 2024-6 Oct 2024</span></div><br/>
      <div><strong>Full Stack ASP.net Core MVC Training|Masna3 Tech</strong> <span style="float:right;opacity:.7">19 Dec 2025</span></div><br/>
    `
  },

  yousefAjori: {
    name: "yousef Alajori",
    photo: "assets/images/team-members/yousefAjori.png",
    bio: "I am Yousef Alajore, a Cybersecurity student and a Full Stack Developer, interested in building secure applications and developing integrated technical solutions. ",
    linkedin: "https://www.linkedin.com/in/yousef-alajore-b8b98131a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
    github: "https://github.com/y-se6 ",
    email: " yousefalajore116@gmial.com",
    educationHtml: `
      <strong> Cyberscurity Student  </strong><br/>
      Al Zarqa University <br/>
      <span style="opacity:.7">Oct 2023 - Now</span>
    `,


  },

  rema: {
    name: "Rema",
    photo: "assets/images/team-members/rema.png",
    bio: " Developed user interfaces and contributed to enhancing user experience for a food security solution.",
    linkedin: " https://www.linkedin.com/in/rema-abohuq-615b25341",
    github: " https://github.com/rema-2004",
    email: " abohuqrema@gmail.com",
    educationHtml: `
      <strong> Computer Science Student  </strong><br/>
       Al-Hussein Bin Talal University<br/>
      <span style="opacity:.7">2023 – Present</span>
    `,
    projects: [
      {
        title: "Food Security Project", img: "assets/images/projects/team-member-proj/foodSecPro.png", desc: `An intelligent platform combining meteorology, agriculture, and travel to help users plan smartly
       | Achievement: 2nd place at the national level.` },
      { title: "Rehlati – Website for People with Disabilities", img: "assets/images/projects/team-member-proj/Rehlati.png", desc: "Designed and developed accessible web interfaces focused on usability and inclusivity.Achievement: 4th place at the national level." },

    ],
    certsHtml: `
      <div><strong>Certificate of Appreciation | President of Al-Hussein Bin Talal University  </strong> <span style="float:right;opacity:.7">  2025</span></div><br/>
      <div><strong>Teach Girls Program | Abdul Hameed Shoman Foundation </strong> <span style="float:right;opacity:.7">  2020</span></div><br/>\
      <div><strong>Entrepreneurship and Artificial Intelligence Program | Ministry of Youth  </strong> <span style="float:right;opacity:.7">  2025</span></div><br/>
     <div><strong>Volunteer Work Certificate (732 Hours) | Nahno Platform |  </strong> <span style="float:right;opacity:.7">  </span></div><br/>
     <div><strong>Certificate of Appreciation | Jisour Project  </strong> <span style="float:right;opacity:.7">  2023</span></div><br/>
    `

    /*
      : {
      name: "",
      photo: "assets/images/team-members/.png",
      bio: " ",
      linkedin: " ",
      github: " ",
      email: " ",
      educationHtml: `
        <strong>   </strong><br/>
         <br/>
        <span style="opacity:.7"></span>
      `,
      projects: [
      
      ],
      certsHtml: `
        <div><strong> | </strong> <span style="float:right;opacity:.7"> </span></div><br/>
       
      `
    },*/
  },

  rama: {
    name: "Rama",
    bio: "Frontend-focused Computer Science student crafting clean, responsive web experiences. Passionate about user-centric design and turning ideas into functional, visually appealing interfaces.",
    linkedin: "https://www.linkedin.com/in/rama-shabaneh-086840314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/Rama-ah",
    email: "Pamatv535@gmail.com ",
    educationHtml: `
      <strong>Computer Science Student</strong><br/>
      The University of Jordan<br/>
      <span style="opacity:.7">Oct 2023 - Now</span>
    `,
    projects: [

      { title: "SkyCue", img: "assets/images/projects/project4.png", desc: "An intelligent platform combining meteorology, agriculture, and travel to help users plan smartly." },
      { title: "Semsem Educational Platform", img: "assets/images/projects/project1.png", desc: " A fun and interactive learning platform designed to boost children’s creativity and early skills." },
    ]
  },




};

function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}
const EMPTY_MEMBER = {
  name: "Profile Coming Soon",
  photo: "",
  bio: "This team member profile is being prepared. Please check back soon.",
  linkedin: "",
  email: "",
  educationHtml: "",
  projects: [],
  certsHtml: ""
};

const id = getParam("id");
const data = TEAM[id] || EMPTY_MEMBER; // fallback

// Fill UI
document.getElementById("memberName").textContent = data.name || "";
document.getElementById("memberBio").textContent = data.bio || "";

// Photo
const img = document.getElementById("memberPhoto");
if (data.photo) {
  img.src = data.photo;
  img.alt = data.name || "Team member";
  img.style.display = "";
} else {
  img.style.display = "none"; // hide image circle if no photo
}

// Contact links
const linkedInEl = document.getElementById("memberLinkedIn");
const emailEl = document.getElementById("memberEmail");
const githubEl = document.getElementById("memberGithub");


if (data.linkedin) {
  linkedInEl.href = data.linkedin;
  linkedInEl.style.display = "";
} else {
  linkedInEl.style.display = "none";
}

if (data.github) {
  githubEl.href = data.github;
  githubEl.style.display = "";
} else {
  githubEl.style.display = "none";
}

if (data.email) {
  emailEl.href = data.email;
  emailEl.style.display = "";
} else {
  emailEl.style.display = "none";
}

// Education
const edu = document.getElementById("memberEducation");
const eduSection = edu.closest(".member-block");
if (data.educationHtml && data.educationHtml.trim()) {
  edu.innerHTML = data.educationHtml;
  eduSection.style.display = "";
} else {
  eduSection.style.display = "none";
}

// Certifications
const certs = document.getElementById("memberCerts");
const certsSection = certs.closest(".member-block");
if (data.certsHtml && data.certsHtml.trim()) {
  certs.innerHTML = data.certsHtml;
  certsSection.style.display = "";
} else {
  certsSection.style.display = "none";
}

// Projects
const projectsWrap = document.getElementById("memberProjects");
const projectsScroll = projectsWrap.closest(".member-projects-scroll") || projectsWrap.parentElement;
const projectsSection = projectsWrap.closest(".member-block");

if (Array.isArray(data.projects) && data.projects.length > 0) {
  projectsWrap.innerHTML = data.projects.map(p => `
    <div class="member-card">
      <img class="member-project-img" src="${p.img}" alt="${p.title}">
      ${p.link
      ? `<a href="${p.link}" target="_blank" class="project-link">${p.title}</a>`
      : `<strong>${p.title}</strong>`
    }
      <p class="member-project-desc">${p.desc}</p>
    </div>
  `).join("");

  projectsSection.style.display = "";
  if (projectsScroll) projectsScroll.style.display = "";
} else {
  projectsSection.style.display = "none";
  if (projectsScroll) projectsScroll.style.display = "none";
}

document.getElementById("memberBackBtn").addEventListener("click", () => {
  window.location.href = "index.html#team";
});
