import React from "react";
import Hero from "@/Components/Common/Hero";
import ResearchDevelopmentSection from "@/Components/About/ResearchDevelopmentSection";
import AboutGreeting from "@/Components/About/AboutGreeting";
import TimelineSection from "@/Components/About/TimelineSection";
import AboutProductSection from "@/Components/About/AboutProductSection";
import ProfileSection from "@/Components/About/ProfileSection";
import Directors from "@/Components/Directors";
import BrandLogos from "@/Components/About/BrandLogo";
import researchDevelopment from "../../../public/images/research&development/research&developmentlanding.webp";
import testimoni from "../../../public/images/testimoni/testimoni.webp";
import Layout from "@/Layouts/Layouts";

const About = ({ banner, timeline, product, lmp_profile }) => {
    const dataProfile = [
        {
            img: researchDevelopment,
            title: "Research & Development",
            description:
                "The multidisciplinary nature of our focused Philosophy Research Center has been the major strength of our research since we began our work in 2018.",
            buttonLink: "/research-development",
            showButton: true,
        },
    ];

    const dataTestimoni = [
        {
            img: testimoni,
            title: "Testimonials & Use Cases from Various Industries",
            description:
                "We don’t just design data center solutions — we help companies maintain the performance, efficiency, and resilience of their digital infrastructure.",
            buttonLink: "/testimoni",
            showButton: true,
        },
    ];

    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}
                />
                <AboutGreeting />
                <ProfileSection lmp_profile={lmp_profile} />
                <Directors />
                <ResearchDevelopmentSection data={dataProfile} />
                <AboutProductSection dataProduct={product} />
                <BrandLogos />
                <ResearchDevelopmentSection data={dataTestimoni} />
                <TimelineSection timeline={timeline} />
            </div>
        </main>
    );
};

About.layout = (page) => <Layout children={page} />;

export default About;
