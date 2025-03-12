import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import server from "../../../public/images/researchdevelopment.png";

const CsrSection = (props) => {
    return (
        <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto py-16 flex flex-col gap-8 w-full justify-center container"
        >
            <div class="relative">
                <div class="w-full max-w-2xl lg:max-w-7xl px-6 lg:px-8 mx-auto">
                    <h1 class="font-manrope font-medium text-3xl text-gray-900 mb-12 text-center">
                        Responsibility For Development Social And Community
                    </h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="flex items-center flex-col gap-8 w-full group">
                            <div class="block">
                                <img
                                    class="rounded-3xl object-cover h-[350px] w-full"
                                    src="https://pagedone.io/asset/uploads/1707480017.png"
                                    alt="Project Achievements of Sketch"
                                />
                            </div>
                            <div class="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                                <div class="block">
                                    <h4 class="text-2xl font-manrope font-semibold text-gray-900 mb-1">
                                        Main Tank & Storage Tank
                                    </h4>
                                    <p class="font-medium text-lg text-gray-400">
                                        Content Design, Marketing
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="group flex items-center flex-col gap-8 w-full">
                            <div class="block">
                                <img
                                    class="rounded-3xl object-cover h-[350px] w-full"
                                    src="https://pagedone.io/asset/uploads/1707480034.png"
                                    alt="Project Achievements of Figma"
                                />
                            </div>
                            <div class="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                                <div class="block">
                                    <h4 class="text-2xl font-manrope font-semibold text-gray-900 mb-1">
                                        Installation of 3 inch PE pipe 550M long
                                    </h4>
                                    <p class="font-medium text-lg text-gray-400">
                                        User Interface Design
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="group flex items-center flex-col gap-8 w-full md:w-1/2 mx-auto md:col-span-2 lg:col-span-1 lg:w-full">
                            <div class="block">
                                <img
                                    class="rounded-3xl object-cover h-[350px] w-full"
                                    src={server}
                                    alt="Project Achievements of Frame.io"
                                />
                            </div>
                            <div class="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                                <div class="block">
                                    <h4 class="text-2xl font-manrope font-semibold text-gray-900 mb-1">
                                        Installation of 1,100M long 2 inch PE
                                        pipe
                                    </h4>
                                    <p class="font-medium text-lg text-gray-400">
                                        User Interface Design
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CsrSection;
