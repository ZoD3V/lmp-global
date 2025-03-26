import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { router } from "@inertiajs/react";

const ProductCard = ({ title, description, imageSrc, link }) => {
    const handleClick = () => {
        router.visit(link);
    };

    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="h-full"
        >
            <Card
                className="overflow-hidden h-full flex flex-col"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                    <img
                        src={imageSrc || "/placeholder.svg"}
                        alt={title}
                        fill="none"
                        className="object-cover p-4"
                    />
                    <motion.div
                        className="absolute inset-0 bg-black/60 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={handleClick}
                        >
                            View Details
                        </Button>
                    </motion.div>
                </div>
                <CardContent className="flex-grow p-4">
                    <h3 className="font-semibold text-lg mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                        {description}
                    </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                    <Button
                        variant="ghost"
                        className="w-full justify-between"
                        size="sm"
                        onClick={handleClick}
                    >
                        Learn more <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
};

export default ProductCard;
