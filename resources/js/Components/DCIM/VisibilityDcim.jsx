import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { AspectRatio } from "../ui/aspect-ratio";
import diagram1 from "../../../../public/images/diagram-1.png";
import Heading from "../Common/Heading";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const VisibilityDcim = () => {
    const guiCards = [
        {
            id: 1,
            title: "GUI 1: Linking systems across continents",
            description:
                "Visualize and manage your global infrastructure with interactive maps showing real-time connections between data centers.",
            image: diagram1,
            alt: "Linking systems across continents",
        },
        {
            id: 2,
            title: "GUI 2: Site power dashboard",
            description:
                "Monitor power consumption and efficiency metrics with intuitive gauge displays for quick assessment of site performance.",
            image: diagram1,
            alt: "Site power dashboard",
        },
        {
            id: 3,
            title: "GUI 3: Resources dashboard",
            description:
                "Track resource allocation and utilization with comprehensive charts and gauges for optimized infrastructure management.",
            image: diagram1,
            alt: "Resources dashboard",
        },
        {
            id: 4,
            title: "GUI 4: Capacity dashboard",
            description:
                "Analyze capacity trends and forecast future needs with detailed charts and graphs for proactive infrastructure planning.",
            image: diagram1,
            alt: "Capacity dashboard",
        },
    ];

    return (
        <section className="w-full py-16 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.05)_0%,rgba(59,130,246,0)_50%)]"></div>
                <svg
                    className="absolute bottom-0 left-0 w-full h-64 text-slate-50"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="currentColor"
                        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>

            <div className="container xl:px-0 max-w-[1200px] px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <Badge
                        variant="outline"
                        className="px-4 py-1.5 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-500"
                    >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Interface Showcase
                    </Badge>
                    <Heading
                        title={"Visibility"}
                        description={
                            "Giving Your Teams Accurate Information To Manage Deployment Remotely"
                        }
                    />
                </div>

                <div className="mb-12">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                        DIAGRAMS
                    </h3>
                    <p className="text-slate-600 mb-8">
                        Easy to use and navigate GUI
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {guiCards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            variants={fadeIn("up", index * 0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
                                <CardContent className="p-0">
                                    <AspectRatio
                                        ratio={16 / 9}
                                        className="bg-muted"
                                    >
                                        <img
                                            src={card.image}
                                            alt={card.alt}
                                            className="object-contain w-full h-full"
                                        />
                                    </AspectRatio>
                                </CardContent>
                                <CardFooter className="flex flex-col items-start p-5">
                                    <CardTitle className="text-lg mb-2">
                                        {card.title}
                                    </CardTitle>
                                    <CardDescription>
                                        {card.description}
                                    </CardDescription>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Card className="inline-block bg-white/80 backdrop-blur-sm border border-slate-200/70">
                        <CardContent className="px-6 py-3">
                            <p className="text-slate-600 text-sm">
                                Experience the intuitive interface that makes
                                complex data center management simple
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default VisibilityDcim;
