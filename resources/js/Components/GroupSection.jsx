import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import {
    HiUserGroup,
    HiMiniChartPie,
    HiCurrencyDollar,
    HiMiniUsers,
} from "react-icons/hi2";

const GroupSection = () => {
    const features = [
        {
            icon: <HiUserGroup className="w-8 h-8 text-indigo-600" />,
            title: "190",
            description: "EMPLOYEES",
        },
        {
            icon: <HiMiniChartPie className="w-8 h-8 text-pink-600" />,
            title: "30-67%",
            description: "TKDN",
        },
        {
            icon: <HiCurrencyDollar className="w-8 h-8 text-red-400" />,
            title: "$15M",
            description: "REVENUE",
        },
        {
            icon: <HiMiniUsers className="w-8 h-8 text-orange-400" />,
            title: "15M",
            description: "MAJOR CLIENTS",
        },
    ];

    return (
        <section className="max-w-[1200px] mx-auto py-16">
            <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 grid-cols-1 gap-12 px-4 sm:px-6 xl:px-0"
            >
                <motion.div variants={fadeIn("right", 0.3)}>
                    <motion.h1
                        variants={textVariant(0.5)}
                        viewport={{ once: true }}
                        className="text-3xl md:w-4/5 md:text-4xl font-bold text-gray-900"
                    >
                        <span className="text-blue-600">LMP Group</span> In
                        Numbers
                    </motion.h1>
                </motion.div>

                <motion.div
                    variants={fadeIn("left", 0.3)}
                    viewport={{ once: true }}
                    className="col-span-2 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-8"
                >
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <div className="text-3xl flex items-center justify-center rounded-lg">
                                {feature.icon}
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h2>
                                <p className="text-slate-600">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default GroupSection;
