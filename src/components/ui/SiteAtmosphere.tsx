import type { CSSProperties } from "react";

const stars = Array.from({ length: 64 }, (_, index) => ({
    left: `${(index * 37) % 101}%`,
    top: `${(index * 61) % 97}%`,
    size: `${index % 7 === 0 ? 3 : index % 3 === 0 ? 2 : 1}px`,
    delay: `${(index % 9) * -0.7}s`,
    duration: `${12 + (index % 7) * 2}s`,
    driftX: `${index % 2 === 0 ? 1 : -1}${18 + (index % 6) * 8}px`,
    driftY: `${index % 3 === 0 ? -1 : 1}${12 + (index % 5) * 7}px`,
}));

export function SiteAtmosphere() {
    return (
        <div className="site-atmosphere" aria-hidden="true">
            <div className="site-stars">
                {stars.map((star, index) => (
                    <i
                        key={index}
                        className="site-star"
                        style={
                            {
                                left: star.left,
                                top: star.top,
                                width: star.size,
                                height: star.size,
                                "--star-delay": star.delay,
                                "--star-duration": star.duration,
                                "--star-drift-x": star.driftX,
                                "--star-drift-y": star.driftY,
                            } as CSSProperties
                        }
                    />
                ))}
            </div>

            <div className="site-clouds">
                <span className="site-cloud site-cloud--one" />
                <span className="site-cloud site-cloud--two" />
                <span className="site-cloud site-cloud--three" />
            </div>
        </div>
    );
}
