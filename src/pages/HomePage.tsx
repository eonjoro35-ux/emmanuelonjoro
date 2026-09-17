import { motion } from "framer-motion";
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";


const projects = [
    {
        title: "Industrial Attachment Logbook Management System",
        category: "Web Application",
        shortTitle: "Logbook management",
        description: "A focused digital workflow for recording attachment activities, tracking progress, and keeping student records organized.",
        imageClass: "project-visual--logbook",
        image: "https://unsplash.com/photos/a-calendar-with-glasses-on-a-table-next-to-a-pair-of-glasses-OLvQEjwCSVI",
        github: "https://github.com/EmmanuelOnjoro/industrial-attachment-logbook-management-system",
    },
    {
        title: "Car Hire Management System",
        category: "Management Platform",
        shortTitle: "Car hire platform",
        description: "A practical platform for organizing vehicle listings, customer details, and bookings for a car hire service.",
        imageClass: "project-visual--car-hire",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=85",
        github: "https://github.com/EmmanuelOnjoro/car-hire-management-system",
    },
    {
        title: "Portfolio Website",
        category: "Frontend Development",
        shortTitle: "Portfolio website",
        description: "A personal digital home for presenting technical ability, creative direction, work history, and reliable user experiences.",
        imageClass: "project-visual--portfolio",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=85",
        github: "https://github.com/EmmanuelOnjoro/portfolio-website",
    },
];

const services = [
    {
        number: "01",
        title: "Web Development",
        description: "Responsive, modern websites and web applications built around clear goals, reliable code, and a smooth user journey.",
        tags: ["React", "TypeScript", "Responsive UI"],
    },
    {
        number: "02",
        title: "Software Testing",
        description: "Thoughtful testing and debugging that finds friction early and helps digital products perform consistently in the real world.",
        tags: ["QA", "Debugging", "Reliability"],
    },
    {
        number: "03",
        title: "UI / UX Design",
        description: "Clean, intuitive interfaces that make complex tasks feel understandable, accessible, and enjoyable to use.",
        tags: ["Wireframes", "Accessibility", "Interaction"],
    },
    {
        number: "04",
        title: "IT & HMIS Support",
        description: "Practical system administration, digital workflow support, and troubleshooting shaped by hands-on HMIS experience.",
        tags: ["HMIS", "Systems", "Documentation"],
    },
];

export function HomePage() {
    const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isMessageSent, setIsMessageSent] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const heroEyebrowRef = useRef<HTMLSpanElement>(null);
    const heroFirstNameRef = useRef<HTMLSpanElement>(null);
    const heroLastNameRef = useRef<HTMLSpanElement>(null);
    const heroTitleRef = useRef<HTMLSpanElement>(null);
    const heroDescriptionRef = useRef<HTMLSpanElement>(null);
    const heroWorkLinkRef = useRef<HTMLSpanElement>(null);
    const heroContactLinkRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const typedInstances = [
            new Typed(heroEyebrowRef.current, {
                strings: ["Web Developer • Tester"],
                typeSpeed: 42,
                startDelay: 150,
                showCursor: false,
            }),
            new Typed(heroFirstNameRef.current, {
                strings: ["Emmanuel"],
                typeSpeed: 95,
                startDelay: 550,
                showCursor: false,
            }),
            new Typed(heroLastNameRef.current, {
                strings: ["Onjoro."],
                typeSpeed: 95,
                startDelay: 1250,
                showCursor: false,
            }),
            new Typed(heroTitleRef.current, {
                strings: ["Web Developer", "Software Tester", "UI / UX Designer", "IT Support Specialist", "HMIS Support Professional"],
                typeSpeed: 55,
                backSpeed: 32,
                backDelay: 1500,
                startDelay: 1950,
                loop: true,
                showCursor: false,
            }),
            new Typed(heroDescriptionRef.current, {
                strings: ["I’m a web developer and software tester focused on building modern, reliable and user-friendly digital experiences."],
                typeSpeed: 18,
                startDelay: 2300,
                showCursor: false,
            }),
            new Typed(heroWorkLinkRef.current, {
                strings: ["View my work"],
                typeSpeed: 45,
                startDelay: 3900,
                showCursor: false,
            }),
            new Typed(heroContactLinkRef.current, {
                strings: ["Let’s talk"],
                typeSpeed: 45,
                startDelay: 4300,
                showCursor: false,
            }),
        ];

        return () => typedInstances.forEach((instance) => instance.destroy());
    }, []);

    const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitError("");

        try {
            const response = await fetch("https://formsubmit.co/ajax/emmanuelonjoro@gmail.com", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: new FormData(event.currentTarget),
            });

            if (!response.ok) {
                throw new Error("Message delivery failed");
            }

            event.currentTarget.reset();
            setIsMessageSent(true);
        } catch {
            setSubmitError("That message could not be sent right now. Please try again or email me directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        if (!selectedProject) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedProject(null);
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedProject]);

    return (
        <div className="min-h-screen overflow-hidden bg-sky-50 text-black">
            <Header />

            <main>
                {/* HERO */}
                <section
                    id="home"
                    className="site-section site-section--home relative flex h-screen min-h-[680px] items-center overflow-hidden bg-[#f1ebe5] text-[#211714] dark:bg-[#211714] dark:text-[#f7f1eb]"
                >
                    {/* Background decoration */}
                    <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" />

                    <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl" />

                    <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 pt-20 lg:grid-cols-2 lg:px-8 lg:pt-24">
                        {/* LEFT */}
                        <motion.div
                            initial={{ opacity: 0, y: 35 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="relative z-10 order-2 lg:order-1"
                        >
                            <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-sky-600">
                                <span ref={heroEyebrowRef} aria-label="Web Developer • Tester" />
                            </p>

                            <h1 className="font-sans text-6xl font-black leading-[0.85] tracking-[-0.07em] sm:text-7xl md:text-8xl lg:text-[110px]">
                                <span ref={heroFirstNameRef} aria-label="Emmanuel" />
                                <br />
                                <span ref={heroLastNameRef} className="text-sky-500" aria-label="Onjoro." />
                            </h1>

                            <p className="hero-typewriter" aria-live="polite">
                                <span ref={heroTitleRef} />
                                <span className="hero-typewriter__cursor" aria-hidden="true">|</span>
                            </p>

                            <p className="mt-10 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
                                <span ref={heroDescriptionRef} aria-label="I’m a web developer and software tester focused on building modern, reliable and user-friendly digital experiences." />
                            </p>

                            <div className="mt-10 flex flex-wrap items-center gap-6">
                                <a
                                    href="#projects"
                                    className="rounded-full bg-black px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-sky-500"
                                >
                                    <span ref={heroWorkLinkRef} />
                                </a>

                                <a
                                    href="#contact"
                                    className="group text-sm font-bold"
                                >
                                    <span ref={heroContactLinkRef} />
                                    <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                        ↗
                                    </span>
                                </a>
                            </div>
                        </motion.div>

                        {/* RIGHT VISUAL */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 5 }}
                            transition={{
                                duration: 0.9,
                                ease: [0.17, 0.67, 0.35, 1.15],
                            }}
                            className="hero-visual relative order-1 flex min-h-[330px] items-center justify-center lg:order-2"
                        >
                            <div className="absolute left-5 top-10 h-40 w-40 rounded-full bg-sky-300/60 blur-sm" />

                            <div className="absolute bottom-5 right-5 h-32 w-32 rounded-full bg-sky-500/30 blur-sm" />

                            <div className="hero-art relative flex aspect-[0.78] w-[min(270px,68vw)] rotate-3 flex-col justify-between rounded-[45%_55%_50%_50%/45%_43%_57%_55%] bg-sky-400 p-5 shadow-2xl shadow-sky-900/10 sm:w-[min(310px,72vw)] sm:p-6 lg:w-[min(320px,100%)]">
                                <span className="text-xs font-black tracking-[0.2em]">
                                    EMMANUEL ONJORO
                                </span>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.92 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1.4, ease: "easeOut" }}
                                    className="relative flex min-h-[390px] items-center justify-center sm:min-h-[450px] lg:min-h-[460px]"
                                >
                                    {/* Ambient glow */}
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.08, 1],
                                            opacity: [0.35, 0.55, 0.35],
                                        }}
                                        transition={{
                                            duration: 8,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="absolute h-80 w-80 rounded-full bg-orange-500/30 blur-3xl"
                                    />

                                    {/* Orbiting stars */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            duration: 28,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                        className="absolute h-[350px] w-[350px] rounded-full border border-orange-300/20 sm:h-[410px] sm:w-[410px] lg:h-[430px] lg:w-[430px]"
                                    >
                                        <span className="absolute left-8 top-12 h-2 w-2 rounded-full bg-orange-300 shadow-[0_0_20px_rgba(251,146,60,0.9)]" />
                                        <span className="absolute right-12 top-20 h-3 w-3 rounded-full bg-amber-200 shadow-[0_0_25px_rgba(253,230,138,0.8)]" />
                                        <span className="absolute bottom-16 left-16 h-1.5 w-1.5 rounded-full bg-orange-400" />
                                        <span className="absolute bottom-8 right-24 h-2 w-2 rounded-full bg-amber-300" />
                                    </motion.div>

                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{
                                            duration: 38,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                        className="absolute h-[410px] w-[410px] rounded-full border border-white/10 sm:h-[490px] sm:w-[490px] lg:h-[520px] lg:w-[520px]"
                                    >
                                        <span className="absolute left-1/2 top-0 h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(251,146,60,0.9)]" />
                                        <span className="absolute bottom-10 right-16 h-2 w-2 rounded-full bg-amber-200" />
                                    </motion.div>

                                    {/* Photo */}
                                    <motion.div
                                        animate={{
                                            y: [0, -8, 0],
                                            rotate: [-1, 1, -1],
                                        }}
                                        transition={{
                                            duration: 10,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="relative z-10 h-[350px] w-[245px] overflow-hidden rounded-[48%_48%_42%_42%] border border-orange-300/30 bg-[#2b201c] shadow-2xl shadow-black/40 sm:h-[410px] sm:w-[285px] lg:h-[420px] lg:w-[295px]"
                                    >
                                        <img
                                            src={`${import.meta.env.BASE_URL}images/manu.png`}
                                            alt="Emmanuel Onjoro"
                                            className="h-full w-full object-cover object-center grayscale-[10%] transition duration-1000 hover:scale-105"
                                        />

                                        {/* Image overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#211714]/50 via-transparent to-orange-300/10" />
                                    </motion.div>

                                    {/* Floating particles */}
                                    <motion.span
                                        animate={{
                                            y: [0, -30, 0],
                                            opacity: [0.3, 1, 0.3],
                                        }}
                                        transition={{
                                            duration: 6,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="absolute left-10 top-32 h-3 w-3 rounded-full bg-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.8)]"
                                    />

                                    <motion.span
                                        animate={{
                                            y: [0, 25, 0],
                                            opacity: [0.2, 0.8, 0.2],
                                        }}
                                        transition={{
                                            duration: 7,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 1,
                                        }}
                                        className="absolute right-8 top-40 h-2 w-2 rounded-full bg-amber-200 shadow-[0_0_18px_rgba(253,230,138,0.8)]"
                                    />

                                    <motion.span
                                        animate={{
                                            y: [0, -20, 0],
                                            x: [0, 10, 0],
                                            opacity: [0.2, 0.9, 0.2],
                                        }}
                                        transition={{
                                            duration: 8,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 2,
                                        }}
                                        className="absolute bottom-24 left-20 h-2 w-2 rounded-full bg-orange-300"
                                    />
                                </motion.div>

                                <span className="self-end text-4xl">↗</span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ABOUT / CV */}
                <section
                    id="about"
                    className="site-section site-section--about relative overflow-hidden bg-[#f7f3ed] py-24 text-[#211714] md:py-36"
                >

                    <div className="site-section__veil site-section__veil--about" />
                    <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
                    <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl" />

                    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.65 }}
                            className="mb-14 flex flex-col justify-between gap-8 border-b border-black/15 pb-8 md:flex-row md:items-end"
                        >
                            <div>
                                <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-sky-600">
                                    About me / 01
                                </p>
                                <h2 className="max-w-3xl text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
                                    Software-minded. <span className="text-sky-500">People-focused.</span>
                                </h2>
                            </div>
                            <p className="max-w-xs text-sm font-bold uppercase leading-6 tracking-[0.12em] text-black/55">
                                Emmanuel Onjoro<br />
                                Software Engineering Enthusiast<br />
                                <span className="normal-case tracking-normal">0793048318 | emmanuelonjoro@gmail.com</span>
                            </p>
                        </motion.div>

                        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.5fr]">
                            <motion.aside
                                initial={{ opacity: 0, x: -24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.65 }}
                                className="space-y-10"
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.94 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.7, delay: 0.1 }}
                                    className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#211714] shadow-xl shadow-sky-900/10"
                                >
                                    <img
                                        src={`${import.meta.env.BASE_URL}images/manu.png`}
                                        alt="Emmanuel Onjoro"
                                        className="h-[23rem] w-full object-cover object-center grayscale-[10%] transition duration-700 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#211714]/75 via-transparent to-sky-300/10" />
                                    <p className="absolute bottom-5 left-5 text-xs font-black uppercase tracking-[0.2em] text-white">
                                        Emmanuel Onjoro
                                    </p>
                                </motion.div>

                                <div>
                                    <p className="cv-label">Career profile</p>
                                    <p className="mt-5 text-lg leading-8 text-black/70">
                                        Highly motivated and passionate Software Engineering enthusiast with a Diploma in Information Communication Technology. I bring a strong foundation in programming, system administration and database management, with hands-on experience in HMIS systems and real-world IT environments.
                                    </p>
                                </div>

                                <div>
                                    <p className="cv-label">Key skills</p>
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {["HTML", "CSS", "JavaScript", "PHP", "MySQL", "React.js", "HMIS Support", "IT Support", "Debugging", "Documentation"].map((skill) => (
                                            <span key={skill} className="cv-skill">{skill}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="border-l-4 border-sky-400 pl-5">
                                    <p className="text-sm font-black uppercase tracking-[0.15em] text-sky-600">Currently seeking</p>
                                    <p className="mt-3 text-xl font-bold leading-7">A Software Engineering Internship to contribute, solve and keep advancing.</p>
                                </div>
                            </motion.aside>

                            <div className="space-y-16">
                                <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{ duration: 0.65 }}
                                >
                                    <p className="cv-label">Work history</p>
                                    <div className="mt-7 space-y-10 border-l border-black/20 pl-6 md:pl-8">
                                        <article className="relative">
                                            <span className="cv-timeline-dot" />
                                            <p className="text-sm font-black uppercase tracking-[0.14em] text-sky-600">Dec 2025 - Current</p>
                                            <h3 className="mt-2 text-2xl font-black">Sile Communications Ltd</h3>
                                            <p className="mt-4 leading-7 text-black/65">IT support desk and technical troubleshooting, software installation and configuration, computer systems consultation, digital workflow management, and graphic design support.</p>
                                            <p className="mt-3 text-sm font-bold text-black/55">Achievement: Recognized for high technical product expertise and performance excellence.</p>
                                        </article>

                                        <article className="relative">
                                            <span className="cv-timeline-dot" />
                                            <p className="text-sm font-black uppercase tracking-[0.14em] text-sky-600">Jan 2025 - Apr 2025</p>
                                            <h3 className="mt-2 text-2xl font-black">Sile Communications Ltd</h3>
                                            <p className="mt-4 leading-7 text-black/65">IT support and customer technical assistance, social media management, sales and customer care services, and technical product advisory.</p>
                                        </article>

                                        <article className="relative">
                                            <span className="cv-timeline-dot" />
                                            <p className="text-sm font-black uppercase tracking-[0.14em] text-sky-600">Sep 2023 - Dec 2023</p>
                                            <h3 className="mt-2 text-2xl font-black">Busia County Referral Hospital</h3>
                                            <p className="mt-1 font-bold text-black/55">Industrial Attachment</p>
                                            <p className="mt-4 leading-7 text-black/65">HMIS system administration support, database management, digital records management, UI/UX improvement participation, and system optimization support.</p>
                                        </article>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{ duration: 0.65 }}
                                    className="grid gap-10 border-t border-black/15 pt-10 md:grid-cols-2"
                                >
                                    <div>
                                        <p className="cv-label">Education</p>
                                        <div className="mt-6 space-y-5 text-black/70">
                                            <div><p className="font-black text-black">Diploma in Information Communication Technology</p><p>Kitale National Polytechnic, 2024 - 2025</p><p>Machakos University, 2022 - 2023</p></div>
                                            <div><p className="font-black text-black">Certificate of Secondary Education</p><p>Bujwang'a Secondary School, Funyula, 2018 - 2021</p></div>
                                            <div><p className="font-black text-black">Certificate of Primary Education</p><p>Bumbe Primary School, Funyula, 2013 - 2017</p></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="cv-label">Other experience</p>
                                        <ul className="mt-6 space-y-3 text-lg font-bold text-black/70">
                                            <li>Graphic Design - Freelance</li>
                                            <li>Street Photography - Freelance</li>
                                            <li>Digital Literacy Trainer - Ajira Clubs (Machakos University / Kitale National Polytechnic)</li>
                                        </ul>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{ duration: 0.65 }}
                                    className="grid gap-10 border-t border-black/15 pt-10 md:grid-cols-2"
                                >
                                    <div>
                                        <p className="cv-label">Project engagements</p>
                                        <ul className="mt-6 space-y-3 text-lg font-bold text-black/70">
                                            <li>Industrial attachment logbook management system</li>
                                            <li>Car hire management system</li>
                                            <li>Portfolio website</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="cv-label">Certifications</p>
                                        <ul className="mt-6 space-y-3 text-black/70">
                                            <li>Transcription Training / Mentorship</li>
                                            <li>Virtual Assistance</li>
                                            <li>Data Analysis Using Excel</li>
                                            <li>Introduction to Cybersecurity</li>
                                            <li>Digital Marketing &amp; eCommerce</li>
                                        </ul>
                                    </div>
                                </motion.div>

                                <div className="border-t border-black/15 pt-10">
                                    <p className="cv-label">Referees</p>
                                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                                        <div className="cv-referee"><strong>David Okello</strong><span>Operations Manager, Sile Communications Ltd</span><span>Kitale Town | 0711344079</span></div>
                                        <div className="cv-referee"><strong>Daniel Oloo</strong><span>IT Department, Busia County Referral Hospital</span><span>Busia Town | 0796604080</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICES */}
                <section id="services" className="site-section services-section">
                    <img
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=85"
                        alt="Circuit board representing technology and digital systems"
                        loading="lazy"
                        className="services-section__background"
                    />
                    <div className="services-section__veil" />

                    <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7 }}
                            className="mb-14 max-w-3xl"
                        >
                            <p className="mb-6 text-sm font-black uppercase tracking-[0.25em] text-sky-300">
                                Services I offer / 02
                            </p>
                            <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.06em] text-white md:text-7xl">
                                Useful ideas, <span className="text-sky-300">built properly.</span>
                            </h2>
                            <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
                                From the first sketch to the final fix, I help turn digital needs into experiences people can actually use.
                            </p>
                        </motion.div>

                        <div className="services-grid">
                            {services.map((service, index) => (
                                <motion.article
                                    key={service.number}
                                    initial={{ opacity: 0, y: 28 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{ duration: 0.55, delay: index * 0.1 }}
                                    className="service-card group"
                                >
                                    <div className="service-card__top">
                                        <span className="service-card__number">{service.number}</span>
                                        <span className="service-card__arrow" aria-hidden="true">↗</span>
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <div className="service-card__tags">
                                        {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROJECTS */}
                <section
                    id="projects"
                    className="site-section site-section--projects bg-black py-28 text-white md:py-36"
                >

                    <div className="site-section__veil site-section__veil--projects" />
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
                            <div>
                                <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-sky-400">
                                    Selected work
                                </p>

                                <h2 className="max-w-3xl text-5xl font-bold tracking-[-0.05em] md:text-7xl">
                                    Projects that speak for themselves.
                                </h2>
                            </div>

                            <span className="text-sky-400">2024 — 2026</span>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {projects.map((project, index) => (
                                <motion.article
                                    key={project.title}
                                    whileHover={{ y: -8 }}
                                    transition={{ duration: 0.25 }}
                                    className="project-card group overflow-hidden rounded-3xl bg-slate-900"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setSelectedProject(project)}
                                        className={`project-visual ${project.imageClass}`}
                                        aria-label={`Open ${project.title} details`}
                                    >
                                        <img
                                            src={project.image}
                                            alt=""
                                            loading="lazy"
                                            className="project-visual__image"
                                        />
                                        <span className="project-visual__grid" />
                                        <span className="project-visual__number">0{index + 1}</span>
                                        <span className="project-visual__open">View case study ↗</span>
                                    </button>

                                    <div className="p-7">
                                        <p className="text-xs uppercase tracking-widest text-sky-400">
                                            {project.category}
                                        </p>

                                        <h3 className="mt-3 text-2xl font-bold">
                                            {project.shortTitle}
                                        </h3>

                                        <button
                                            type="button"
                                            onClick={() => setSelectedProject(project)}
                                            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white transition group-hover:gap-4"
                                        >
                                            Explore project <span aria-hidden="true">→</span>
                                        </button>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CONTACT */}
                <section
                    id="contact"
                    className="site-section contact-section bg-sky-400 py-24 md:py-32"
                >

                    <div className="site-section__veil site-section__veil--contact" />
                    <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-8">
                        <div className="self-center">
                            <p className="mb-8 text-sm font-black uppercase tracking-[0.25em]">
                                Get in touch
                            </p>

                            <h2 className="max-w-2xl text-6xl font-black leading-[0.85] tracking-[-0.07em] md:text-8xl">
                                Have a project?
                                <br />
                                <span className="text-white">Let’s build it.</span>
                            </h2>

                            <p className="mt-8 max-w-md text-lg leading-8 text-black/70">
                                Tell me what you are building, what needs solving, or where your digital idea should go next.
                            </p>

                            <a
                                href="mailto:emmanuelonjoro@gmail.com"
                                className="mt-8 inline-flex items-center gap-2 text-sm font-black underline decoration-2 underline-offset-4 transition hover:gap-4"
                            >
                                emmanuelonjoro@gmail.com <span aria-hidden="true">↗</span>
                            </a>
                        </div>

                        <form
                            action="https://formsubmit.co/emmanuelonjoro@gmail.com"
                            method="POST"
                            onSubmit={handleContactSubmit}
                            className={`contact-form ${isMessageSent ? "contact-form--success" : ""}`}
                        >
                            {isMessageSent ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="contact-success"
                                    role="status"
                                >
                                    <div className="contact-success__confetti" aria-hidden="true">
                                        {Array.from({ length: 18 }, (_, index) => (
                                            <span key={index} style={{ "--confetti-index": index } as React.CSSProperties} />
                                        ))}
                                    </div>
                                    <span className="contact-success__burst" aria-hidden="true">✦</span>
                                    <p className="contact-success__eyebrow">Transmission received</p>
                                    <h3>BOOM!</h3>
                                    <p className="contact-success__copy">Your message is on its way to Emmanuel. Thanks for reaching out.</p>
                                    <button
                                        type="button"
                                        className="contact-success__reset"
                                        onClick={() => setIsMessageSent(false)}
                                    >
                                        Send another message ↗
                                    </button>
                                </motion.div>
                            ) : (
                                <>
                                    <input type="hidden" name="_subject" value="New portfolio enquiry" />
                                    <input type="hidden" name="_template" value="table" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

                                    <div className="contact-form__row">
                                        <label>
                                            Your name
                                            <input type="text" name="name" placeholder="Jane Doe" required />
                                        </label>
                                        <label>
                                            Email address
                                            <input type="email" name="email" placeholder="jane@company.com" required />
                                        </label>
                                    </div>

                                    <label>
                                        Subject
                                        <input type="text" name="message_subject" placeholder="Let’s work together" required />
                                    </label>

                                    <label>
                                        Your message
                                        <textarea name="message" rows={6} placeholder="Tell me a little about your project..." required />
                                    </label>

                                    <button
                                        type="submit"
                                        className="contact-form__submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Sending..." : "Send message"} {!isSubmitting && <span aria-hidden="true">↗</span>}
                                    </button>
                                    {submitError && <p className="contact-form__error" role="alert">{submitError}</p>}
                                </>
                            )}
                        </form>
                    </div>
                </section>
            </main>
            <Footer />

            {selectedProject && (
                <div
                    className="project-modal-backdrop"
                    role="presentation"
                    onClick={() => setSelectedProject(null)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 12 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-modal-title"
                        className="project-modal"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setSelectedProject(null)}
                            className="project-modal__close"
                            aria-label="Close project details"
                        >
                            ×
                        </button>
                        <div className={`project-modal__visual project-visual ${selectedProject.imageClass}`}>
                            <img src={selectedProject.image} alt="" className="project-visual__image" />
                            <span className="project-visual__grid" />
                            <span className="project-visual__number">Project detail</span>
                        </div>
                        <div className="project-modal__content">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-500">{selectedProject.category}</p>
                            <h2 id="project-modal-title" className="mt-3 max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl">{selectedProject.title}</h2>
                            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">{selectedProject.description}</p>
                            <a
                                href={selectedProject.github}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-8 inline-flex items-center gap-3 rounded-full bg-sky-400 px-6 py-3 text-sm font-black text-black transition hover:bg-white hover:gap-5"
                            >
                                View on GitHub <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
