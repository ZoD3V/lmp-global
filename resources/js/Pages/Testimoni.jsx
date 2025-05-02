import React from "react";
import Navbar from "@/Components/Common/Navbar";
import Hero from "@/Components/Common/Hero";
import Footer from "@/Components/Common/Footer";
import TestimoniSection from "@/Components/Testimoni/TestimoniSection";
import psnLogo from "../../../public/images/logo/psn.png";
import iconplus from "../../../public/images/logo/iconplus.png";
import psnTestimoni1 from "../../../public/images/testimoni/psnTestimoni1.webp";
import psnTestimoni2 from "../../../public/images/testimoni/psnTestimoni2.webp";
import iconTestimoni1 from "../../../public/images/testimoni/iconPlusTestimoni1.webp";
import iconTestimoni2 from "../../../public/images/testimoni/iconPlusTestimoni2.webp";

import kominfo from "../../../public/images/logo/kominfo.png";
import stin from "../../../public/images/logo/stin.png";
import tvri from "../../../public/images/logo/tvri.png";
import kominfoTestimoni from "../../../public/images/testimoni/kominfoTestimoni.webp";
import stinTestiomoni from "../../../public/images/testimoni/stinTestiomoni.webp";
import tvriTestimoni from "../../../public/images/testimoni/tvriTestimoni.webp";

import telkomsel from "../../../public/images/logo/telkomsel.png";
import psnTestimoni3 from "../../../public/images/testimoni/psnTestimoni3.webp";
import psnTestimoni4 from "../../../public/images/testimoni/psnTestimoni4.webp";
import telkomselTestimoni1 from "../../../public/images/testimoni/telkomselTestimoni1.webp";
import telkomselTestimoni2 from "../../../public/images/testimoni/telkomselTestimoni2.webp";

import airnav from "../../../public/images/logo/airnav.png";
import jttexpress from "../../../public/images/logo/j&texpress.png";
import jawabarat from "../../../public/images/logo/jawabarat.png";
import tniau from "../../../public/images/logo/tniau.png";
import airnavTestimoni from "../../../public/images/testimoni/airnavTestimoni.webp";
import poldaTestimoni from "../../../public/images/testimoni/poldaTestimoni.webp";
import jtTestimoni from "../../../public/images/testimoni/jtTestimoni.webp";
import tniauTestimoni from "../../../public/images/testimoni/tniauTestimoni.webp";

const Testimoni = ({ banner, testimonials }) => {
    const testimonialsData = [
        {
            title: "Container Data Center",
            description:
                "Installation All One Container Data Center 40Ft & 20Ft",
            useCases: [
                {
                    logo: psnLogo,
                    testimoni: [
                        {
                            name: "PSN",
                            img: psnTestimoni1,
                        },
                        {
                            name: "PSN",
                            img: psnTestimoni2,
                        },
                    ],
                },
            ],
        },
        {
            title: "Micro Data Center",
            description: "Installation Micro Data Center",
            useCases: [
                {
                    logo: kominfo,
                    testimoni: [
                        {
                            name: "Kominfo",
                            img: kominfoTestimoni,
                        },
                    ],
                },
                {
                    logo: stin,
                    testimoni: [
                        {
                            name: "STIN",
                            img: stinTestiomoni,
                        },
                    ],
                },
                {
                    logo: tvri,
                    testimoni: [
                        {
                            name: "TVRI",
                            img: tvriTestimoni,
                        },
                    ],
                },
            ],
        },
        {
            title: "Containment Data Center",
            description: "Installation Containment Data Center",
            useCases: [
                {
                    logo: telkomsel,
                    testimoni: [
                        {
                            name: "Telkomsel",
                            img: telkomselTestimoni1,
                        },
                        {
                            name: "Telkomsel",
                            img: telkomselTestimoni2,
                        },
                    ],
                },
                {
                    logo: psnLogo,
                    testimoni: [
                        {
                            name: "PSN",
                            img: psnTestimoni3,
                        },
                        {
                            name: "PSN",
                            img: psnTestimoni4,
                        },
                    ],
                },
            ],
        },
        {
            title: "LMP Volts",
            description:
                "Installation LMP Volts Quality improvements to unstable voltage, bad grounding & electromagnetic induction / noise disturbances",
            useCases: [
                {
                    logo: airnav,
                    testimoni: [
                        {
                            name: "Airnav",
                            img: airnavTestimoni,
                        },
                    ],
                },
                {
                    logo: jawabarat,
                    testimoni: [
                        {
                            name: "Polda Jabar",
                            img: poldaTestimoni,
                        },
                    ],
                },
                {
                    logo: jttexpress,
                    testimoni: [
                        {
                            name: "J&T Express",
                            img: jtTestimoni,
                        },
                    ],
                },
                {
                    logo: tniau,
                    testimoni: [
                        {
                            name: "TNI AU",
                            img: tniauTestimoni,
                        },
                    ],
                },
            ],
        },
    ];

    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title={banner[0].name}
                    description={banner[0].description}
                />
                {testimonialsData.map((section, index) => (
                    <TestimoniSection key={index} useCases={section} />
                ))}
                <Footer />
            </div>
        </main>
    );
};

export default Testimoni;
