import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../components/footer";
import Hero from "../Components/Hero";
import ProfileSection from "../Components/ProfileSection";
import AboutGreeting from "../Components/AboutGreeting";
import ResearchDevelopmentSection from "../Components/ResearchDevelopmentSection";
import ProductSection from "../Components/ProductSection";
import TimelineSection from "../Components/TimelineSection";

const About = ({ banner }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title="About LMP"
                    description="LMP Networks is driven by a passion for Design Engineering, combining Mechanical-Electrical HVAC design, Enclosure Engineering, Digital Twins, and Modular Architecture to accelerate deployment and improve visualization of assets, transforming the modular data center and connectivity industry."
                    showButton={false}
                    buttonText="See All Product"
                    buttonLink="/product"
                />
                <AboutGreeting />
                <ProfileSection />
                <ResearchDevelopmentSection />
                <ProductSection />
                <TimelineSection />
                <Footer />
            </div>
        </main>
    );
};

export default About;
