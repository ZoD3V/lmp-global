import { Card, CardContent } from "../ui/card";
import { Brain, AlertTriangle, Zap, BarChart4 } from "lucide-react";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

export default function FeatureHighlights() {
    const cardsData = [
        {
            number: "01",
            title: "Reliable AI",
            icon: Brain,
            color: "blue",
            content:
                "AIGC generated highly accurate, high veracity operations data enabling reliable AI.",
        },
        {
            number: "02",
            title: "Risk-Aware",
            icon: AlertTriangle,
            color: "amber",
            content:
                "AI recommendations first validated by high fidelity digital twin for risk & outcome assessment before action.",
        },
        {
            number: "03",
            title: "Quick Outcomes",
            icon: Zap,
            color: "green",
            content:
                "Tangible outcomes within short period of time after solution deployment.",
        },
        {
            number: "04",
            title: "Future Ready",
            icon: BarChart4,
            color: "purple",
            content:
                "Through CDT driven, comprehensive optimization, the platform enables full range and full lifecycle sustainability.",
        },
    ];

    return (
        <section className="container px-4 md:px-6 xl:px-0 max-w-[1200px] py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cardsData.map((card, index) => (
                    <motion.div
                        key={card.number}
                        variants={fadeIn("up", index * 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex flex-col items-center text-center">
                                    <div
                                        className={`h-12 w-12 rounded-full bg-${card.color}-100 dark:bg-${card.color}-900 flex items-center justify-center mb-4`}
                                    >
                                        <card.icon
                                            className={`h-6 w-6 text-${card.color}-600 dark:text-${card.color}-300`}
                                        />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-2">
                                        {card.number}
                                    </h3>
                                    <h4 className="font-semibold mb-4">
                                        {card.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground line-clamp-3">
                                        {card.content}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
