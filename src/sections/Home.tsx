import { motion } from "framer-motion";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { profile } from "../data/site";

export function Home() {
    const roleRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!roleRef.current) {
            return;
        }

        const typed = new Typed(roleRef.current, {
            strings: profile.roles,
            typeSpeed: 55,
            backSpeed: 30,
            backDelay: 1600,
            startDelay: 400,
            loop: true,
            showCursor: false,
        });

        return () => typed.destroy();
    }, []);

    return (
        <section id="home" className="section">
            <div className="shell hero">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65 }}
                >
                    <p className="eyebrow">{profile.location}</p>

                    <h1 className="hero__name">
                        Hello, I&rsquo;m
                        <br />
                        <span>
                            {profile.firstName} {profile.lastName}.
                        </span>
                    </h1>

                    <p className="hero__typed" aria-live="polite">
                        <span ref={roleRef} aria-label={profile.role} />
                        <span className="hero__cursor" aria-hidden="true">
                            |
                        </span>
                    </p>

                    <p className="hero__text">{profile.tagline}</p>

                    <div className="hero__actions">
                        <a href="#projects" className="btn">
                            View my work <span aria-hidden="true">→</span>
                        </a>

                        <a href="#contact" className="btn-ghost">
                            Let&rsquo;s talk <span aria-hidden="true">→</span>
                        </a>
                    </div>

                    <div className="hero__socials">
                        {profile.socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                title={social.label}
                                target={social.href.startsWith("http") ? "_blank" : undefined}
                                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                            >
                                <span aria-hidden="true">{social.label.charAt(0)}</span>
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Portrait: plain framed photo, no coloured circle behind it. */}
                <motion.figure
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="hero__portrait"
                    style={{ margin: 0 }}
                >
                    <picture>
                        <source srcSet={profile.photo} type="image/webp" />
                        <img
                            src={profile.photoFallback}
                            alt={`${profile.firstName} ${profile.lastName}`}
                            width={880}
                            height={1100}
                        />
                    </picture>

                    <figcaption className="hero__badge">
                        <i aria-hidden="true" />
                        SQA Tester <a href="https://skreeda.com/#top" target="_blank" rel="noreferrer">
                            SKREEDA
                        </a>
                    </figcaption>
                </motion.figure>
            </div>
        </section>
    );
}
