/**
 * All editable site content lives here, so copy changes never require
 * touching the section components.
 */

const base = import.meta.env.BASE_URL;

export const asset = (path: string) => `${base}${path.replace(/^\//, "")}`;

export const profile = {
    firstName: "Emmanuel",
    lastName: "Onjoro",
    role: "Web Developer & Software Tester",
    roles: [
        "Web Developer",
        "Software Tester",
        "UI / UX Designer",
        "IT Support Specialist",
        "HMIS Support Professional",
    ],
    tagline:
        "I build modern, reliable and user-friendly digital experiences, and I test them until they hold up in the real world.",
    location: "Nairobi, Kenya",
    email: "emmanuelonjoro@gmail.com",
    phone: "+254 793 048 318",
    photo: asset("images/manu.webp"),
    photoFallback: asset("images/manu.jpg"),
    cv: asset("files/Emmanuel-Onjoro-CV.pdf"),
    socials: [
        { label: "GitHub", href: "https://github.com/ONJORO-III" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/emmanuel-onjoro" },
        { label: "Email", href: "mailto:emmanuelonjoro@gmail.com" },
    ],
};

export const navigation = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Resume", href: "#resume" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export const aboutParagraphs = [
    "I'm Emmanuel Onjoro, a software engineering enthusiast based in Kenya with a Diploma in Information Communication Technology. I enjoy taking an idea from a rough sketch to something people can actually open, understand and use.",
    "My background mixes development with real IT support work: building web interfaces, debugging awkward bugs, administering HMIS systems and keeping digital records tidy at a county referral hospital. That mix taught me to care as much about reliability as about how a page looks.",
];

export const highlights = [
    { value: "3+", label: "Years around IT & support work" },
    { value: "3", label: "Systems built end to end" },
    { value: "5", label: "Professional certifications" },
];

export const experience = [
    {
        period: "Dec 2025 - Present",
        title: "IT Support & Technical Associate",
        company: "Sile Communications Ltd",
        points: [
            "Run the support desk: troubleshooting, software installation and system configuration.",
            "Advise customers on hardware and software choices, and handle graphic design requests.",
            "Recognised for technical product expertise and performance excellence.",
        ],
    },
    {
        period: "Jan 2025 - Apr 2025",
        title: "IT Support & Customer Care",
        company: "Sile Communications Ltd",
        points: [
            "Handled customer technical assistance, sales support and social media management.",
        ],
    },
    {
        period: "Sep 2023 - Dec 2023",
        title: "Industrial Attachment - ICT",
        company: "Busia County Referral Hospital",
        points: [
            "Supported HMIS administration, database management and digital records.",
            "Contributed to UI/UX improvements and day-to-day system optimisation.",
        ],
    },
];

export const education = [
    {
        title: "Diploma in Information Communication Technology",
        detail: "Kitale National Polytechnic (2024 - 2025) · Machakos University (2022 - 2023)",
    },
    {
        title: "Kenya Certificate of Secondary Education",
        detail: "Bujwang'a Secondary School, Funyula (2018 - 2021)",
    },
];

export const certifications = [
    "Introduction to Cybersecurity",
    "Data Analysis Using Excel",
    "Digital Marketing & eCommerce",
    "Virtual Assistance",
    "Transcription Training & Mentorship",
];

export const services = [
    {
        number: "01",
        title: "Web Development",
        description:
            "Responsive websites and web applications built around clear goals, readable code and a smooth user journey.",
        tags: ["React", "TypeScript", "Responsive UI"],
    },
    {
        number: "02",
        title: "Software Testing",
        description:
            "Careful testing and debugging that finds friction early so products behave the same way for every user.",
        tags: ["QA", "Debugging", "Reliability"],
    },
    {
        number: "03",
        title: "UI / UX Design",
        description:
            "Clean, intuitive interfaces that make complex tasks feel understandable and accessible.",
        tags: ["Wireframes", "Accessibility", "Interaction"],
    },
    {
        number: "04",
        title: "IT & HMIS Support",
        description:
            "Practical system administration, workflow support and troubleshooting shaped by hands-on HMIS experience.",
        tags: ["HMIS", "Systems", "Documentation"],
    },
];

export const skills = [
    { name: "HTML5", icon: "https://img.icons8.com/color/48/html-5--v1.png" },
    { name: "CSS3", icon: "https://img.icons8.com/color/48/css3.png" },
    { name: "JavaScript", icon: "https://img.icons8.com/color/48/javascript--v1.png" },
    { name: "TypeScript", icon: "https://img.icons8.com/fluency/48/typescript--v1.png" },
    { name: "React", icon: "https://img.icons8.com/officel/48/react.png" },
    { name: "PHP", icon: "https://img.icons8.com/officel/48/php-logo.png" },
    { name: "MySQL", icon: "https://img.icons8.com/color/48/mysql-logo.png" },
    { name: "Tailwind CSS", icon: "https://img.icons8.com/color/48/tailwindcss.png" },
    { name: "Git", icon: "https://img.icons8.com/color/48/git.png" },
    { name: "GitHub", icon: "https://img.icons8.com/glyph-neue/48/github.png" },
    { name: "Figma", icon: "https://img.icons8.com/color/48/figma--v1.png" },
    { name: "VS Code", icon: "https://img.icons8.com/fluency/48/visual-studio-code-2019.png" },
    { name: "Windows", icon: "https://img.icons8.com/color/48/windows-11.png" },
    { name: "Excel", icon: "https://img.icons8.com/color/48/microsoft-excel-2019.png" },
];

export type Project = {
    title: string;
    shortTitle: string;
    category: string;
    description: string;
    stack: string[];
    image: string;
    github: string;
};

export const projects: Project[] = [
    {
        title: "Industrial Attachment Logbook Management System",
        shortTitle: "Logbook management",
        category: "Web Application",
        description:
            "A digital workflow for recording attachment activities, tracking weekly progress and keeping student records organised, replacing the paper logbook students normally carry around.",
        stack: ["PHP", "MySQL", "Bootstrap"],
        image: asset("images/project-logbook.svg"),
        github:
            "https://github.com/ONJORO-III/",
    },
    {
        title: "Car Hire Management System",
        shortTitle: "Car hire platform",
        category: "Management Platform",
        description:
            "A practical platform for organising vehicle listings, customer details and bookings for a car hire business, with availability checks so the same car is never double booked.",
        stack: ["PHP", "MySQL", "JavaScript"],
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=85",
        github: "https://github.com/ONJORO-III/",
    },
    {
        title: "ST. Bills Community School Website",
        shortTitle: "ST. Bills Community School",
        category: "Full-Stack Web Application",
        description:
            "A modern community school website built with React and Tailwind CSS, supported by a Node.js and Express backend with MongoDB for managing school content and data.",
        stack: ["React", "Tailwind CSS", "MongoDB", "Node.js", "Express"],
        image: asset("images/image.png"),
        github: "https://github.com/eonjoro35-ux/ST_Billy",
    },
];
