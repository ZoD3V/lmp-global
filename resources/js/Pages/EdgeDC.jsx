import React from "react";
import Footer from "../components/Common/Footer";
import Navbar from "../Components/Common/Navbar";
import Hero from "../Components/Common/Hero";
import ServicesSection from "../Components/ServicesSection";
import { AiOutlineFileText } from "react-icons/ai";
import { GrFan } from "react-icons/gr";
import { CiServer } from "react-icons/ci";
import SolutionSection from "../Components/SolutionSection";
import CentersSection from "../Components/CentersSection";
import EdgeDcSection from "../Components/EdgeDcSection";

const EdgeDC = ({ banner }) => {
    const sectionData = [
        {
          title: 'Our Mission',
          description:
            'At Financial Freedom Advisors, our mission is clear: to empower individuals and families to achieve financial independence.',
          image: 'https://loremflickr.com/800/600',
          link: '#',
        },
        {
          title: 'Our Values',
          subtitle: 'Guiding Principles',
          description:
            'Our values serve as the guiding principles that underpin everything we do at Financial Freedom Advisors:',
          list: [
            'Integrity: We uphold the highest standards of honesty, transparency, and ethical conduct in all our interactions.',
            'Client-Centric Approach: Our clients’ needs and goals are at the forefront of everything we do.',
          ],
          image: 'https://loremflickr.com/800/600',
          link: '#',
        },
      ];

    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title="LMP EdgeDC"
                    description="Locate your specific product for the latest user manuals, system application guides, data sheets, warranties, software downloads and more."
                    showButton={false}
                    buttonText="See All Product"
                    buttonLink="/product"
                />
                <EdgeDcSection />
                <Footer />
            </div>
        </main>
    );
};

export default EdgeDC;
