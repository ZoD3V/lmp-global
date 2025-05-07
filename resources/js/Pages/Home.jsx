import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import CertificateIsoSection from "@/components/Home/CertificateIsoSection";
import CertificateSection from "@/components/Home/CertificateSection";
import CompanyLogo from "@/components/Home/CompanyLogo";
import GroupSection from "@/components/Home/GroupSection";
import Navbar from "@/components/Common/Navbar";
import PurposeSection from "@/components/PurposeSection";
import Footer from "@/components/Common/Footer";
import FeaturesSection from "@/components/FeatureSection";
import ContactSection from "@/components/ContactSection";
import CSRSection from "@/components/Home/CSRSection";
import ImageSlider from "@/components/Home/ImageSlider";

const Home = ({ images }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <CertificateSection />
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
                {images.length > 0 && <ImageSlider images={images} />}
                <PurposeSection />
                <GroupSection />
                <CSRSection />
                <CertificateIsoSection />
                <FeaturesSection />
                <CompanyLogo />
                <ContactSection />

                <Footer />
            </div>
        </main>
    );
};

export default Home;
