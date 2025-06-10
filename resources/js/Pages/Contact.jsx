import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import Navbar from "@/Components/Common/Navbar";
import ContactSection from "@/Components/ContactSection";
import Layout from "@/Layouts/Layouts";
import Footer from "@/Components/Common/Footer";

const Contact = (banner) => {
    return (
        <section
            id="home"
            className="h-[350px] md:h-[400px] bg-hero bg-center lg:bg-cover bg-no-repeat bg-fixed relative z-20"
            style={{
                backgroundImage: `url('/storage/${banner.banner[0].image}')`,
            }}
        >
            <div className="container px-4 md:px-6 xl:px-0 max-w-[1200px] h-full flex items-center justify-center xl:justify-start">
                <motion.div
                    variants={textVariant(0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="w-full flex flex-row items-center justify-center md:justify-start text-center text-white z-10 gap-8"
                >
                    <h1 className="text-5xl md:text-6xl xl:text-7xl leading-none font-bold tracking-wide mt-12">
                        Contact Us
                    </h1>
                </motion.div>
            </div>

            <Navbar />

            <ContactSection />
            <iframe
                className="w-full col-span-2"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126912.93829569164!2d106.97410210163002!3d-6.259867982243107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698bfc218780ad%3A0x1b77c8726545aab5!2sLMP%20NETWORKS%20-%20HARAPAN%20INDAH!5e0!3m2!1sid!2sid!4v1702192197729!5m2!1sid!2sid"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <Footer />
        </section>
    );
};

Contact.layout = (page) => <Layout children={page} />;

export default Contact;
