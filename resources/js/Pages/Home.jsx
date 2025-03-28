import React from "react";
import { Button } from "@/Components/ui/button";
import { ChevronUp } from "lucide-react";
import CertificateIsoSection from "@/Components/Home/CertificateIsoSection";
import CertificateSection from "@/Components/Home/CertificateSection";
import CompanyLogo from "@/Components/Home/CompanyLogo";
import GroupSection from "@/Components/Home/GroupSection";
import Navbar from "@/Components/Common/Navbar";
import Hero from "@/Components/Common/Hero";
import PurposeSection from "@/Components/PurposeSection";
import Footer from "@/Components/Common/Footer";
import FeaturesSection from "@/Components/FeatureSection";
import ContactSection from "@/Components/ContactSection";

const Home = ({ banner }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}
                    showButton={true}
                    buttonText="See All Product"
                    buttonLink="/product"
                />

                <div className="fixed bottom-6 left-6 z-50">
                    <Button
                        aria-label="Name"
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        className="h-12 w-12 rounded-full bg-background shadow-lg border"
                        variant="outline"
                    >
                        <ChevronUp className="h-5 w-5" />
                    </Button>
                </div>

                <PurposeSection />
                <GroupSection />
                <CertificateIsoSection />
                <CertificateSection />
                <FeaturesSection />
                <CompanyLogo />
                <ContactSection />

                <Footer />
            </div>
        </main>
    );
};

export default Home;
