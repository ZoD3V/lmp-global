import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import logo_lmp from "../../../public/images/logo_lmp.png";

const Footer = () => {
    const footerLinks = {
        company: [
            { name: "About", href: "#" },
            { name: "Terms of Use", href: "#" },
            { name: "Privacy Policy", href: "#" },
            { name: "How it Works", href: "#" },
            { name: "Contact Us", href: "#" },
        ],
        getHelp: [
            { name: "Support Carrer", href: "#" },
            { name: "24h Service", href: "#" },
            { name: "Quick Chat", href: "#" },
        ],
        support: [
            { name: "FAQ", href: "#" },
            { name: "Policy", href: "#" },
            { name: "Business", href: "#" },
        ],
        contact: [
            { name: "WhatsApp", href: "#" },
            { name: "Support 24", href: "#" },
        ],
    };

    return (
        <motion.footer
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-gray-50"
        >
            <div className="px-4 sm:px-6 xl:px-0 py-16 container mx-auto max-w-[1200px]">
                <motion.div
                    variants={fadeIn("up", 0.3)}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
                >
                    {/* Brand Column */}
                    <motion.div
                        variants={fadeIn("right", 0.4)}
                        viewport={{ once: true }}
                        className="lg:col-span-4"
                    >
                        <motion.div
                            variants={fadeIn("down", 0.5)}
                            viewport={{ once: true }}
                            className="flex items-center gap-1 mb-6"
                        >
                            <motion.img
                                variants={fadeIn("right", 0.3)}
                                viewport={{ once: true }}
                                className="flex items-center gap-1 cursor-pointer w-15 h-7"
                                src={logo_lmp}
                                alt="Logo LMP"
                            ></motion.img>
                        </motion.div>
                        <motion.p
                            variants={fadeIn("up", 0.6)}
                            viewport={{ once: true }}
                            className="text-slate-600 mb-6"
                        >
                            The copy warned the Little Blind Text, that where it
                            came from it would have been rewritten a thousand
                            times.
                        </motion.p>
                        <motion.div
                            variants={fadeIn("up", 0.7)}
                            viewport={{ once: true }}
                            className="flex gap-4"
                        >
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                viewport={{ once: true }}
                                href="#"
                                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-colors"
                            >
                                <FaFacebookF className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                viewport={{ once: true }}
                                href="#"
                                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-400 hover:text-white transition-colors"
                            >
                                <FaTwitter className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                viewport={{ once: true }}
                                href="#"
                                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-700 hover:text-white transition-colors"
                            >
                                <FaLinkedinIn className="w-5 h-5" />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Links Columns */}
                    <motion.div
                        variants={fadeIn("left", 0.4)}
                        viewport={{ once: true }}
                        className="lg:col-span-8"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {Object.entries(footerLinks).map(
                                ([category, links], categoryIndex) => (
                                    <motion.div
                                        key={category}
                                        variants={fadeIn(
                                            "up",
                                            0.3 * (categoryIndex + 1)
                                        )}
                                        viewport={{ once: true }}
                                    >
                                        <motion.h3
                                            variants={textVariant(0.2)}
                                            viewport={{ once: true }}
                                            className="text-lg font-medium mb-4"
                                        >
                                            {category.charAt(0).toUpperCase() +
                                                category.slice(1)}
                                        </motion.h3>
                                        <motion.ul
                                            variants={fadeIn("up", 0.4)}
                                            viewport={{ once: true }}
                                            className="space-y-3"
                                        >
                                            {links.map((link, index) => (
                                                <motion.li
                                                    key={index}
                                                    variants={fadeIn(
                                                        "up",
                                                        0.1 * (index + 1)
                                                    )}
                                                    viewport={{ once: true }}
                                                >
                                                    <motion.a
                                                        whileHover={{ x: 5 }}
                                                        href={link.href}
                                                        className="text-slate-600 hover:text-gray-900"
                                                    >
                                                        {link.name}
                                                    </motion.a>
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                    </motion.div>
                                )
                            )}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Copyright */}
                <motion.div
                    variants={fadeIn("up", 0.8)}
                    viewport={{ once: true }}
                    className="border-t border-gray-200 mt-12 pt-8"
                >
                    <motion.div
                        variants={fadeIn("up", 0.9)}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row justify-between items-center gap-4"
                    >
                        <motion.p
                            variants={fadeIn("right", 1.0)}
                            viewport={{ once: true }}
                            className="text-slate-600 text-sm"
                        >
                            Copyright © {new Date().getFullYear()}{" "}
                            lmp-global.com
                        </motion.p>
                        <motion.p
                            variants={fadeIn("left", 1.0)}
                            viewport={{ once: true }}
                            className="text-slate-600 text-sm"
                        >
                            Created by LMP GLOBAL
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
