import React from "react";
import Heading from "../Common/Heading";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { Card, CardContent } from "../ui/card";
import { cn } from "../../lib/utils";

const ContainmentMonitoring = ({ monitorings }) => {
    return (
        <section className="py-16 w-full">
            <div className="container px-4 md:px-6 xl:px-0 max-w-[1200px] flex flex-col gap-12">
                <Heading
                    title={"Containment Controller Monitoring"}
                    customParagraph="w-full mt-2"
                    description={
                        "Containment Controller Monitoring is an intelligent system designed to regulate, monitor, and optimize the physical environment in a data center containment space, such as a cold aisle or hot aisle. This device functions as a real-time control center to manage temperature, humidity, air pressure, and integration with sensors and actuators such as fans, alarms, or cooling systems."
                    }
                />
                <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-8">
                    {monitorings.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={"hidden"}
                            whileInView={"show"}
                            whileHover={{ y: -5 }}
                            variants={fadeIn("fadeIn", 0.2 * index)}
                            viewport={{ once: true }}
                        >
                            <Card className="overflow-hidden transition-all duration-300 bg-white border shadow-md">
                                <CardContent className="p-0">
                                    <div
                                        className={cn(
                                            "p-4 flex items-center gap-3 border-b bg-gradient-to-r bg-white"
                                        )}
                                    >
                                        <div>
                                            <h3 className="font-medium text-slate-800">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs text-slate-500 line-clamp-1">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="relative p-0 bg-white">
                                        <div className="relative transform perspective-1200 transition-all duration-500">
                                            <div className="transform transition-transform duration-500 rotateX-3">
                                                <img
                                                    src={`/storage/${item.image}`}
                                                    alt={item.title}
                                                    width={800}
                                                    height={600}
                                                    className="w-full h-auto"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContainmentMonitoring;
