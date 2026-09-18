import { motion } from "framer-motion";
import { SectionHeading } from "../components/ui/SectionHeading";
import { services } from "../data/site";

export function Services() {
    return (
        <section id="services" className="section section--alt">
            <div className="shell">
                <SectionHeading
                    eyebrow="Services"
                    title="Useful ideas, built properly."
                    lead="From the first sketch to the final fix, I help turn digital needs into experiences people can actually use."
                />

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.article
                            key={service.number}
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.12 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="card service-card"
                        >
                            <span className="service-card__number">{service.number}</span>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>

                            <div className="service-card__tags">
                                {service.tags.map((tag) => (
                                    <span key={tag} className="chip">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
