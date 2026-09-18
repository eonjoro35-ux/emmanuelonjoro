import { navigation, profile } from "../../data/site";

export function Footer() {
    return (
        <footer className="site-footer">
            <div className="shell">
                <div className="site-footer__grid">
                    <div>
                        <a href="#home" className="brand">
                            <span className="brand__mark" aria-hidden="true">
                                EO
                            </span>
                            <span className="brand__name">
                                {profile.firstName} {profile.lastName}
                            </span>
                        </a>

                        <p style={{ maxWidth: "24rem", marginTop: "1.25rem", lineHeight: 1.7 }}>
                            {profile.tagline}
                        </p>
                    </div>

                    <div>
                        <h3>Navigation</h3>
                        <nav
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                                gap: "0.65rem",
                            }}
                            aria-label="Footer navigation"
                        >
                            {navigation.map((item) => (
                                <a key={item.label} href={item.href}>
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <h3>Connect</h3>
                        <div style={{ display: "grid", gap: "0.65rem" }}>
                            {profile.socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target={social.href.startsWith("http") ? "_blank" : undefined}
                                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                                >
                                    {social.label} ↗
                                </a>
                            ))}
                            <a href="#contact">
                                Contact me →
                            </a>
                        </div>
                    </div>
                </div>

                <div className="site-footer__bottom">
                    <p style={{ margin: 0 }}>
                        © {new Date().getFullYear()} {profile.firstName} {profile.lastName}. All
                        rights reserved.
                    </p>
                    <p style={{ margin: 0 }}>Built with React, TypeScript &amp; Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
}
