import { useEffect, useState } from "react";
import { navigation, profile } from "../../data/site";
import { ThemeToggle } from "../../theme/ThemeToggle";

/**
 * Navigation only. The theme state now lives in src/theme/ThemeProvider.tsx
 * and is rendered here through <ThemeToggle />.
 */
export function Header({ activeSection }: { activeSection: string }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 24);

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
            <div className="shell site-header__inner">
                <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
                    <span className="brand__mark" aria-hidden="true">
                        EO
                    </span>
                    <span className="brand__name">
                        {profile.firstName} {profile.lastName}
                    </span>
                </a>

                <nav className="nav-desktop" aria-label="Main navigation">
                    {navigation.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="nav-link"
                            aria-current={activeSection === item.href.slice(1) ? "true" : undefined}
                        >
                            {item.label}
                        </a>
                    ))}

                    <a href="#contact" className="btn">
                        Hire me
                    </a>
                </nav>

                <div className="header-actions">
                    <ThemeToggle />

                    <button
                        type="button"
                        className="menu-button"
                        aria-label="Toggle navigation"
                        aria-expanded={menuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setMenuOpen((current) => !current)}
                    >
                        <span className="menu-button__bars" aria-hidden="true">
                            <span />
                            <span />
                        </span>
                    </button>
                </div>
            </div>

            <div
                id="mobile-navigation"
                className={`nav-mobile ${menuOpen ? "nav-mobile--open" : ""}`}
            >
                <nav className="shell" aria-label="Mobile navigation">
                    {navigation.map((item, index) => (
                        <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                            <span>{item.label}</span>
                            <span>0{index + 1}</span>
                        </a>
                    ))}

                    <a
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                    >
                        <span>Contact me</span>
                        <span>→</span>
                    </a>
                </nav>
            </div>
        </header>
    );
}
