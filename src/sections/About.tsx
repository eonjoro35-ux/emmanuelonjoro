import { motion } from "framer-motion";
import { SectionHeading } from "../components/ui/SectionHeading";
import { aboutParagraphs, highlights, profile } from "../data/site";

export function About() {
    return (
        <section id="about" className="section section--alt">
            <div className="shell">
                <SectionHeading
                    eyebrow="About me "
                    title={
                        <>
                            Software-minded. <span style={{ color: "var(--accent)" }}>People-focused.</span>
                        </>
                    }
                />

                <div className="about-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.6 }}
                        className="about-text"
                    >
                        {aboutParagraphs.map((paragraph) => (
                            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                        ))}

                        <div className="about-stats">
                            {highlights.map((item) => (
                                <div key={item.label} className="about-stat">
                                    <strong>{item.value}</strong>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.aside
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="card"
                    >
                        <p className="resume-label">Quick facts</p>

                        <ul className="resume-list">
                            <li>
                                <strong>Based in</strong>
                                <span>{profile.location}</span>
                            </li>
                            <li>
                                <strong>Currently</strong>
                                <span>SQA Tester &amp; SKREEDA</span>
                            </li>
                            <li>
                                <strong>Working</strong>
                                <span>At SKREEDA</span>
                            </li>
                            <li>
                                <strong>Also enjoys</strong>
                                <span>Graphic design, street photography, digital literacy training</span>
                            </li>
                        </ul>

                        <a
                            href="#contact"
                            className="btn-ghost"
                            style={{ marginTop: "1.6rem" }}
                        >
                            Get in touch <span aria-hidden="true">→</span>
                        </a>
                    </motion.aside>
                </div>
            </div>
        </section>
    );
}
