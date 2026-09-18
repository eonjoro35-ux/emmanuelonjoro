const items = [
    { href: "#home", label: "Home", icon: "⌂" },
    { href: "#about", label: "About", icon: "☺" },
    { href: "#resume", label: "Resume", icon: "▤" },
    { href: "#services", label: "Services", icon: "✦" },
    { href: "#skills", label: "Skills", icon: "⚙" },
    { href: "#projects", label: "Projects", icon: "▣" },
    { href: "#contact", label: "Contact", icon: "✉" },
];

/** Compact icon bar shown only on small screens. */
export function BottomNav({ activeSection }: { activeSection: string }) {
    return (
        <nav className="bottom-nav" aria-label="Section shortcuts">
            {items.map((item) => (
                <a
                    key={item.href}
                    href={item.href}
                    title={item.label}
                    aria-label={item.label}
                    aria-current={activeSection === item.href.slice(1) ? "true" : undefined}
                >
                    <span aria-hidden="true">{item.icon}</span>
                </a>
            ))}
        </nav>
    );
}
