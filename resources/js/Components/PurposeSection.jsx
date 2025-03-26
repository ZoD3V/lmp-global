import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Badge } from "./ui/badge";
import { useInView } from "react-intersection-observer";
import { Leaf, Zap, Shield } from "lucide-react";
import server from "../../../public/images/researchdevelopment.png";

const FadeInSection = ({ children, className }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const PurposeSection = () => {
    const features = [
        {
            icon: "🟣",
            title: "Built for impact",
            description:
                "We identify and nurture a truly diverse team of designers, developers and marketers",
        },
        {
            icon: "🔴",
            title: "In sync with you",
            description:
                "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.",
        },
    ];

    return (
        <section id="about" className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6 xl:px-0 max-w-[1200px]">
                <FadeInSection className="flex flex-col items-center justify-center space-y-4 text-center">
                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="space-y-2"
                    >
                        <Badge className="inline-flex" variant="outline">
                            About LMP Solutions
                        </Badge>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            Innovative Data Center Solutions
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                            We provide cutting-edge data center technologies
                            that optimize performance, enhance security, and
                            promote sustainability.
                        </p>
                    </motion.div>
                </FadeInSection>

                <div className="mx-auto grid items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <FadeInSection className="order-2 lg:order-1">
                        <div className="flex flex-col justify-center space-y-6">
                            <motion.div
                                variants={fadeIn("right", 0.3)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="space-y-2"
                            >
                                <h3 className="text-2xl font-bold">
                                    Our Mission
                                </h3>
                                <p className="text-muted-foreground">
                                    At LMP Solutions, we're committed to
                                    developing innovative data center
                                    technologies that help businesses optimize
                                    performance while reducing environmental
                                    impact. Our comprehensive range of products
                                    addresses the complex challenges faced by
                                    modern data centers.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={fadeIn("right", 0.4)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-blue-500/10 p-2">
                                        <Shield className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold">
                                            Enterprise-Grade Security
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Our solutions incorporate advanced
                                            security measures to protect your
                                            critical infrastructure.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-green-500/10 p-2">
                                        <Leaf className="h-5 w-5 text-green-600" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold">
                                            Sustainable Technology
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            We're committed to developing
                                            eco-friendly solutions that reduce
                                            energy consumption and environmental
                                            impact.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-amber-500/10 p-2">
                                        <Zap className="h-5 w-5 text-amber-600" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold">
                                            Optimized Performance
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Our technologies are designed to
                                            maximize efficiency and performance
                                            in demanding enterprise
                                            environments.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </FadeInSection>

                    <FadeInSection className="order-1 lg:order-2">
                        <motion.div
                            variants={fadeIn("left", 0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-2xl shadow-2xl"
                        >
                            <img
                                src={server}
                                alt="Data Center Infrastructure"
                                width={500}
                                height={400}
                                className="w-full object-cover transition-transform hover:scale-105 duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </motion.div>
                    </FadeInSection>
                </div>
            </div>
        </section>
    );
};

export default PurposeSection;
