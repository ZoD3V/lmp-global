import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import Heading from "../Common/Heading";
import CardProduct from "../Common/CardProduct";

const ProductSection = ({ dataProduct }) => {
    return (
        <section className="py-16">
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-[1200px] container mx-auto px-4 sm:px-6 xl:px-0 gap-12 flex flex-col"
            >
                <Heading
                    title={"Our Product"}
                    description={
                        "ivamus a ligula ut velit placerat egestas at id leo. Nulla ac volutpat nunc. Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor."
                    }
                />

                <motion.div
                    variants={fadeIn("up", 0.5)}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {dataProduct?.map((item, index) => (
                        <CardProduct
                            key={index}
                            item={item}
                            index={index}
                            fadeIn={fadeIn}
                            textVariant={textVariant}
                            children={item.children}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ProductSection;
