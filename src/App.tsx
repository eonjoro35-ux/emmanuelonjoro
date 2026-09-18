import { lazy, Suspense, useMemo } from "react";
import { Header } from "./components/layout/Header";
import { SiteAtmosphere } from "./components/ui/SiteAtmosphere";
import { useActiveSection } from "./hooks/useActiveSection";
import { navigation } from "./data/site";

import { Home } from "./sections/Home";

const About = lazy(() => import("./sections/About").then(({ About }) => ({ default: About })));
const Resume = lazy(() => import("./sections/Resume").then(({ Resume }) => ({ default: Resume })));
const Services = lazy(() => import("./sections/Services").then(({ Services }) => ({ default: Services })));
const Skills = lazy(() => import("./sections/Skills").then(({ Skills }) => ({ default: Skills })));
const Projects = lazy(() => import("./sections/Projects").then(({ Projects }) => ({ default: Projects })));
const Contact = lazy(() => import("./sections/Contact").then(({ Contact }) => ({ default: Contact })));
const Footer = lazy(() => import("./components/layout/Footer").then(({ Footer }) => ({ default: Footer })));
const BottomNav = lazy(() => import("./components/layout/BottomNav").then(({ BottomNav }) => ({ default: BottomNav })));
const BackToTop = lazy(() => import("./components/ui/BackToTop").then(({ BackToTop }) => ({ default: BackToTop })));

function App() {
    const sectionIds = useMemo(() => navigation.map((item) => item.href.slice(1)), []);
    const activeSection = useActiveSection(sectionIds);

    return (
        <>
            <a href="#home" className="visually-hidden">
                Skip to content
            </a>

            <SiteAtmosphere />
            <Header activeSection={activeSection} />

            <main>
                <Home />
                <Suspense fallback={null}>
                    <About />
                    <Resume />
                    <Services />
                    <Skills />
                    <Projects />
                    <Contact />
                </Suspense>
            </main>

            <Suspense fallback={null}>
                <Footer />
                <BottomNav activeSection={activeSection} />
                <BackToTop />
            </Suspense>
        </>
    );
}

export default App;
