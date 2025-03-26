import React from "react";
import Navbar from "@/Components/Common/Navbar";
import Footer from "@/Components/Common/Footer";
import Hero from "@/Components/Common/Hero";
import ResearchDevelopmentSection from "@/Components/About/ResearchDevelopmentSection";
import AboutGreeting from "@/Components/About/AboutGreeting";
import TimelineSection from "@/Components/About/TimelineSection";
import AboutProductSection from "@/Components/About/AboutProductSection";
import ProfileSection from "@/Components/About/ProfileSection";

const About = ({ banner, timeline, product, lmp_profile }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}

                />
                <AboutGreeting />
                <ProfileSection lmp_profile={lmp_profile} />
                <ResearchDevelopmentSection />
                <AboutProductSection dataProduct={product} />
                <TimelineSection timeline={timeline} />
                <Footer />
            </div>
        </main>
    );
};

export default About;
