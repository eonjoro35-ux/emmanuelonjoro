import { motion } from "framer-motion";
import { SectionHeading } from "../components/ui/SectionHeading";
import { certifications, education, experience } from "../data/site";

/**
 * Condensed CV: experience, education and certifications only.
 * The referees block was removed - contact details are shared on request.
 */
export function Resume() {
    return (
        <section id="resume" className="section">
            <div className="shell">
                <SectionHeading
                    eyebrow="Resume "
                    title="Experience & education"
                    lead="A short version of my CV. The full document is available to download."
                />

                <div className="resume-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.12 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="resume-label">Work experience</p>

                        <div className="timeline">
                            {experience.map((role) => (
                                <article key={role.period} className="timeline__item">
                                    <p className="timeline__period">{role.period}</p>
                                    <h3 className="timeline__title">{role.title}</h3>
                                    <p className="timeline__company">{role.company}</p>

                                    <ul className="timeline__points">
                                        {role.points.map((point) => (
                                            <li key={point.slice(0, 24)}>{point}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.12 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="resume-block">
                            <p className="resume-label">Education</p>

                            <ul className="resume-list">
                                {education.map((item) => (
                                    <li key={item.title}>
                                        <strong>{item.title}</strong>
                                        <span>{item.detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="resume-block">
                            <p className="resume-label">Certifications</p>

                            <ul className="resume-list">
                                {certifications.map((item) => (
                                    <li key={item}>
                                        <strong>{item}</strong>
                                    </li>
                                ))}
                            </ul>
                        </div>


                    </motion.div>
                </div>
            </div>
        </section>
    );
}
