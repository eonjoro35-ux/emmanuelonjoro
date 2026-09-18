import { useEffect, useState } from "react";

/** Returns the id of the section currently filling most of the viewport. */
export function useActiveSection(ids: string[]) {
    const [active, setActive] = useState(ids[0] ?? "");

    useEffect(() => {
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter((element): element is HTMLElement => Boolean(element));

        if (sections.length === 0) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visible) {
                    setActive(visible.target.id);
                }
            },
            { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [ids]);

    return active;
}
