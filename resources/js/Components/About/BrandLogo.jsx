import { useRef } from "react";
import { motion } from "framer-motion";
import lmp from "../../../../public/images/lmp_networks.png";
import edgeDc from "../../../../public/images/logo/edge-dc.png";
import edgeX from "../../../../public/images/logo/edge-x.png";
import kyrosMirae from "../../../../public/images/logo/kyros-mirae.png";
import kyros from "../../../../public/images/logo/kyros.png";
import phylax from "../../../../public/images/logo/phylax.png";
import savvy from "../../../../public/images/logo/savvy.png";
import volts from "../../../../public/images/logo/volts.png";
import Heading from "../Common/Heading";

export default function BrandLogos() {
    const sectionRef = useRef();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 },
        },
    };

    const logos = [
        { src: lmp, alt: "LMP NETWORKS" },
        { src: edgeX, alt: "EDGE X" },
        { src: kyros, alt: "KYROS" },
        { src: volts, alt: "LMP VOLTS" },
        { src: kyrosMirae, alt: "KYROS MIRAE" },
        { src: phylax, alt: "PHYLAX" },
        { src: edgeDc, alt: "NEX-T EDGE DC 360°" },
        { src: savvy, alt: "SAVVY" },
    ];

    return (
        <section
            ref={sectionRef}
            className="py-16 relative overflow-hidden w-full max-w-[1200px] mx-auto"
        >
            <div className="container px-4 sm:px-6 xl:px-0 relative z-10 flex flex-col gap-10">
                <Heading title={"Our Brand"} />

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group"
                        >
                            <div className="h-32 md:h-40 flex items-center justify-center p-6 rounded-xl grayscale opacity-70 hover:grayscale-0 hover:opacity-100 bg-white border border-slate-100 transition-all duration-300 hover:border-blue-200 hover:-translate-y-1">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={150}
                                    height={80}
                                    className="object-contain h-16 md:h-20 transition-all"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
