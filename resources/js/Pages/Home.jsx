import React from "react";
import Navbar from "../Components/Common/Navbar";
import Hero from "../Components/Common/Hero";
import CompanyLogo from "../Components/CompanyLogo";
import PurposeSection from "../Components/PurposeSection";
import FeaturesSection from "../Components/FeatureSection";
import GroupSection from "../Components/GroupSection";
import CertificateSection from "../Components/CertificateSection";
import Footer from "../components/Common/Footer";
import CertificateIsoSection from "../Components/CertificateIsoSection";

const Home = ({ banner }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
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
                <PurposeSection />
                <FeaturesSection />
                <GroupSection />
                <CertificateIsoSection />
                <CertificateSection />
                <CompanyLogo />

                <Footer />
            </div>
        </main>
    );
};

export default Home;
