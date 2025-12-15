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
      <div><strong>Flutter Development | Uruk Business Center</strong> <span style="float:right;opacity:.7">Jul 2025 - Aug 2025</span></div><br/>
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
      { title: "SkillHub – Learning & Skill-Sharing Platform", img: "assets/images/projects/team-member-proj/skillhub.png", desc: "SkillHub is a Django-powered personal development platform that helps users track skills, manage projects, and organize their learning journey in a structured and user-friendly way.", link:"https://skillhub-2119f1896bd4.herokuapp.com/"},
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
      ${
        p.link
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
