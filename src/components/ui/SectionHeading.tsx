import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
    eyebrow: string;
    title: ReactNode;
    lead?: string;
    aside?: ReactNode;
};

export function SectionHeading({ eyebrow, title, lead, aside }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="section-head"
        >
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="section-title">{title}</h2>
            {lead ? <p className="section-lead">{lead}</p> : null}
            {aside}
        </motion.div>
    );
}
