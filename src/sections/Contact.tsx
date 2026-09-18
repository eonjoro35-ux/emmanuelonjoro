import { motion } from "framer-motion";
import { useState } from "react";
import type { FormEvent } from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { profile } from "../data/site";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;

        setIsSubmitting(true);
        setError("");

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
                method: "POST",
                headers: { Accept: "application/json" },
                body: new FormData(form),
            });

            if (!response.ok) {
                throw new Error("Message delivery failed");
            }

            form.reset();
            setIsSent(true);
        } catch {
            setError(
                "That message could not be sent right now. Please try again, or email me directly.",
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section">
            <div className="shell">
                <SectionHeading
                    eyebrow="Contact "
                    title="Have a project? Let's build it."
                />

                <div className="contact-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p style={{ maxWidth: "30rem", lineHeight: 1.8 }}>
                            Tell me what you are building, what needs solving, or where your digital
                            idea should go next. I reply to every message.
                        </p>

                        <div className="contact-details">
                            <a href={`mailto:${profile.email}`}>✉ {profile.email}</a>
                            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                                ☎ {profile.phone}
                            </a>
                            <a href={profile.socials[0].href} target="_blank" rel="noreferrer">
                                ⌥ {profile.socials[0].href.replace("https://", "")}
                            </a>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="_subject" value="New portfolio enquiry" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input
                            type="text"
                            name="_honey"
                            className="visually-hidden"
                            tabIndex={-1}
                            autoComplete="off"
                        />

                        <div className="contact-form__row">
                            <label>
                                Your name
                                <input type="text" name="name" placeholder="Jane Doe" required />
                            </label>

                            <label>
                                Email address
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="jane@company.com"
                                    required
                                />
                            </label>
                        </div>

                        <label>
                            Subject
                            <input
                                type="text"
                                name="message_subject"
                                placeholder="Let's work together"
                                required
                            />
                        </label>

                        <label>
                            Your message
                            <textarea
                                name="message"
                                rows={6}
                                placeholder="Tell me a little about your project..."
                                required
                            />
                        </label>

                        <button
                            type="submit"
                            className="btn contact-form__submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Send message"}
                            {isSubmitting ? null : <span aria-hidden="true">↗</span>}
                        </button>

                        {isSent ? (
                            <p className="form-note form-note--success" role="status">
                                Thanks - your message is on its way. I&rsquo;ll get back to you
                                shortly.
                            </p>
                        ) : null}

                        {error ? (
                            <p className="form-note form-note--error" role="alert">
                                {error}
                            </p>
                        ) : null}
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
