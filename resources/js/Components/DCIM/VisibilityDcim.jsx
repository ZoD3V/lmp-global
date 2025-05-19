import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { AspectRatio } from "../ui/aspect-ratio";
import diagram1 from "../../../../public/images/dcim/dcim1.jpeg";
import diagram2 from "../../../../public/images/dcim/dcim2.jpeg";
import diagram3 from "../../../../public/images/dcim/dcim3.jpeg";
import diagram4 from "../../../../public/images/dcim/dcim4.jpeg";
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
            image: diagram2,
            alt: "Site power dashboard",
        },
        {
            id: 3,
            title: "GUI 3: Resources dashboard",
            description:
                "Track resource allocation and utilization with comprehensive charts and gauges for optimized infrastructure management.",
            image: diagram3,
            alt: "Resources dashboard",
        },
        {
            id: 4,
            title: "GUI 4: Capacity dashboard",
            description:
                "Analyze capacity trends and forecast future needs with detailed charts and graphs for proactive infrastructure planning.",
            image: diagram4,
            alt: "Capacity dashboard",
        },
    ];

    return (
        <section className="w-full py-16 relative overflow-hidden">
            <div className="container xl:px-0 max-w-[1200px] px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <motion.div
                        variants={fadeIn("down", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <Badge
                            variant="outline"
                            className="px-4 py-1.5 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-500"
                        >
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            Interface Showcase
                        </Badge>
                    </motion.div>
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
            </div>
        </section>
    );
};

export default VisibilityDcim;
