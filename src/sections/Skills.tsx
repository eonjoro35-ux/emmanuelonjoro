import { motion } from "framer-motion";
import { SectionHeading } from "../components/ui/SectionHeading";
import { skills } from "../data/site";

export function Skills() {
    return (
        <section id="skills" className="section">
            <div className="shell">
                <SectionHeading
                    eyebrow="Skills"
                    title="Skills & tools"
                    lead="The languages, frameworks and tools I reach for most often."
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{ duration: 0.55 }}
                    className="skills-grid"
                >
                    {skills.map((skill) => (
                        <div key={skill.name} className="skill">
                            <img src={skill.icon} alt="" width={32} height={32} loading="lazy" />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
