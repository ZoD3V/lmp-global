import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, BadgeCheck } from "lucide-react";
import awards1 from "../../../../public/images/dcim/awards1.png";
import awards2 from "../../../../public/images/dcim/awards2.png";
import awards3 from "../../../../public/images/dcim/awards3.png";
import awards4 from "../../../../public/images/dcim/awards4.png";
import awards5 from "../../../../public/images/dcim/awards5.png";
import awards6 from "../../../../public/images/dcim/awards6.png";
import awards7 from "../../../../public/images/dcim/awards7.png";
import Heading from "../Common/Heading";
import { fadeIn } from "@/utils/motion";
import { Badge } from "../ui/badge";

export default function AwardsCertification() {
    const certifications = [
        {
            id: 1,
            image: awards1,
            alt: "Certified Indonesia 2022-2023",
            title: "Certified Indonesia",
            issuer: "PT. Budi Citra Informatika",
            year: "2022-2023",
        },
        {
            id: 2,
            image: awards2,
            alt: "Top Rated Data Center Management Software",
            title: "Top Rated Software",
            issuer: "SoftwareWorld",
            year: "2023",
        },
        {
            id: 3,
            image: awards3,
            alt: "DCS Awards Winner 2021",
            title: "DCS Awards Winner",
            issuer: "Data Centre Solutions",
            year: "2021",
        },
        {
            id: 4,
            image: awards4,
            alt: "Most Promising Data Center Solution Provider 2021",
            title: "Most Promising Provider",
            issuer: "CIOReview",
            year: "2021",
        },
        {
            id: 5,
            image: awards5,
            alt: "Excellence Awards - DCIM Solution of the Year 2020",
            title: "Excellence Award",
            issuer: "RiT Tech",
            year: "2020",
        },
        {
            id: 6,
            image: awards6,
            alt: "AI Excellence Award 2025",
            title: "AI Excellence Award",
            issuer: "Data Center World",
            year: "2025",
        },
        {
            id: 7,
            image: awards7,
            alt: "AI Excellence Award 2025",
            title: "AI Excellence Award",
            issuer: "Data Center World",
            year: "2025",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className="py-16 w-full">
            <div className="container px-4 md:px-6 xl:px-0 max-w-[1200px]">
                <div className="max-w-screen-xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.div
                            variants={fadeIn("down", 0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="mb-4"
                        >
                            <Badge
                                variant="outline"
                                className="px-4 py-1.5 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-500"
                            >
                                <Shield className="w-4 h-4 mr-2" />
                                Trusted Excellence
                            </Badge>
                        </motion.div>

                        <Heading
                            title={"Awards & Certifications"}
                            description={
                                "Our commitment to excellence has been recognized by industry leaders and certification bodies worldwide."
                            }
                        />
                    </div>

                    {/* Certification Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {certifications.map((cert) => (
                            <motion.div
                                key={cert.id}
                                className="group"
                                variants={itemVariants}
                            >
                                <div className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
                                    <div className="relative h-64 bg-slate-50 flex items-center justify-center p-8 border-b border-slate-100">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,86,179,0.03),transparent_70%)]" />

                                        <img
                                            src={cert.image}
                                            alt={cert.alt}
                                            width={220}
                                            height={160}
                                            className="object-contain max-h-full transition-all duration-300 group-hover:scale-105"
                                        />

                                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary text-xs font-medium py-1 px-2 rounded border border-slate-200 shadow-sm">
                                            {cert.year}
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <div className="flex items-start justify-between mb-1">
                                            <h3 className="font-semibold text-lg">
                                                {cert.title}
                                            </h3>
                                            <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                        </div>
                                        <p className="text-slate-500 text-sm">
                                            Issued by {cert.issuer}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Footer */}
                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center justify-center gap-2 text-slate-500 mb-4">
                            <Award className="h-5 w-5" />
                            <span className="text-sm">
                                Recognized for industry excellence since 2018
                            </span>
                        </div>

                        <p className="text-slate-600 max-w-2xl mx-auto text-sm">
                            Our certifications demonstrate our commitment to
                            maintaining the highest standards of quality,
                            security, and service excellence in the data center
                            industry.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
