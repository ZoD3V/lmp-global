import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Badge } from "./ui/badge";
import { Leaf, Recycle, Lightbulb } from "lucide-react";
import server from "../../../public/images/purpose-section-image.jpeg";
import Heading from "./Common/Heading";

const PurposeSection = () => {
    return (
        <section id="about" className="w-full py-16">
            <div className="container px-4 md:px-6 xl:px-0 max-w-[1200px]">
                <motion.div
                    variants={fadeIn("up", 0.3)}
                    viewport={{ once: true }}
                    initial="hidden"
                    whileInView="show"
                    className="flex flex-col items-center justify-center space-y-4 text-center"
                >
                    <motion.div
                        variants={fadeIn("down", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="space-y-2"
                    >
                        <Badge
                            className="inline-flex bg-blue-500/10 text-blue-600 hover:bg-blue-500/20"
                            variant="secondary"
                        >
                            Industry Technology
                        </Badge>
                        <Heading
                            title="Your business needs a competitive advantage"
                            description={
                                "Stay fast and connected by implementing digital services closest to where data is generated and network density to grow your business and achieve success."
                            }
                        />
                    </motion.div>
                </motion.div>

                <div className="mx-auto grid items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        viewport={{ once: true }}
                        initial="hidden"
                        whileInView="show"
                        className="order-2 lg:order-1"
                    >
                        <div className="flex flex-col justify-center space-y-6">
                            <motion.div
                                variants={fadeIn("right", 0.3)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="space-y-2"
                            >
                                <h3 className="text-2xl font-bold text-green-600">GREEN</h3>
                                <p className="text-muted-foreground">
                                    Environmentally friendly technology plays a
                                    crucial role in preserving the
                                    sustainability of our planet
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
                                    <div className="rounded-full bg-green-500/10 p-2">
                                        <Leaf className="h-5 w-5 text-green-600" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold">Green</h4>
                                        <p className="text-sm text-muted-foreground">
                                            This technology paves the way to a
                                            cleaner and greener world, as much
                                            as we can live a modern lifestyle
                                            without distractions the earth where
                                            we live.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-yellow-500/10 p-2">
                                        <Recycle className="h-5 w-5 text-yellow-600" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold">
                                            Renewable Energy
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Renewable energy sources are
                                            emerging as bright stars in the
                                            shift towards a clean and
                                            sustainable future.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-blue-500/10 p-2">
                                        <Lightbulb className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold">
                                            Increasing PUE
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Energy cost savings, better data
                                            center performance,Sustainability
                                            and environmental friendliness,
                                            Regulatory compliance
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        viewport={{ once: true }}
                        initial="hidden"
                        whileInView="show"
                        className="order-1 lg:order-2"
                    >
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PurposeSection;
