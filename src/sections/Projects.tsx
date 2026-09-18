import { motion } from "framer-motion";
import { SectionHeading } from "../components/ui/SectionHeading";
import { projects } from "../data/site";

export function Projects() {
    return (
        <section id="projects" className="section section--alt">
            <div className="shell">
                <SectionHeading
                    eyebrow="Selected work "
                    title="Projects that speak for themselves."
                    lead="Have a look around, and reach out if you would like to build something together."
                />

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.12 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="project-card"
                        >
                            <div className="project-card__visual">
                                <img src={project.image} alt="" loading="lazy" />
                            </div>

                            <div className="project-card__body">
                                <p className="project-card__category">{project.category}</p>
                                <h3>{project.shortTitle}</h3>
                                <p>{project.description}</p>

                                <div className="project-card__stack">
                                    {project.stack.map((item) => (
                                        <span key={item} className="chip">
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-card__links">
                                    <a
                                        href={project.github}
                                        className="project-link"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub ↗
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
