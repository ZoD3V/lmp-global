import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import CompanyLogo from "../Components/CompanyLogo";
import PurposeSection from "../Components/PurposeSection";
import FeaturesSection from "../Components/FeatureSection";
import GroupSection from "../Components/GroupSection";
import Footer from "../components/Footer";
import CertificateSection from "../Components/CertificateSection";
import CertificateIsoSection from "../Components/CertificateISOSection";

const Home = ({ banner }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title="Empowering a Greener Future with Innovation"
                    description=" Harness renewable energy, optimize data center
                        performance, and achieve sustainability while ensuring
                        regulatory compliance—paving the way for a cleaner,
                        modern, and eco-friendly world."
                    showButton={true}
                    buttonText="See All Product"
                    buttonLink="/product"
                />
                <CompanyLogo />
                <PurposeSection />
                <FeaturesSection />
                <GroupSection />
                <CertificateIsoSection />
                <CertificateSection />
                <Footer />
            </div>
        </main>
    );
};

export default Home;
