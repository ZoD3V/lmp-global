import React from "react";
import { motion } from "framer-motion";

const NetworkProductCard = ({ item, index, fadeIn, textVariant }) => {
    return (
        <motion.div
            variants={fadeIn("up", 0.3 * (index + 1))}
            viewport={{ once: true }}
            className="border rounded-lg border-gray-200 shadow-sm flex flex-col items-center justify-center"
        >
            <motion.img
                variants={fadeIn("right", 0.3)}
                viewport={{ once: true }}
                src={`/storage/${item.image_path}`}
                alt="Product Image"
                className="object-cover max-h-60 rounded-t-lg object-center p-4"
            />
            <div className="p-4">
                <motion.h3
                    variants={textVariant(0.3)}
                    viewport={{ once: true }}
                    className="font-normal text-sm leading-6 text-gray-900 text-center"
                >
                    {item.caption}
                </motion.h3>
            </div>
        </motion.div>
    );
};

export default NetworkProductCard;
