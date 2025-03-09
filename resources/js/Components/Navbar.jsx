import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import logo_lmp from "../../../public/images/logo_lmp.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("/home");

    const navLinks = [
        { href: "/about", label: "About" },
        { href: "/next-T", label: "Next-T" },
        { href: "/product", label: "Product & Solution" },
        { href: "/services", label: "Services" },
        { href: "/patner", label: "Patner" },
        { href: "/contact", label: "Contact" },
        { href: "/support", label: "Support" },
    ];

    return (
        <motion.nav
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm"
        >
            <div className="max-w-[1200px] flex justify-between items-center container mx-auto px-4 sm:px-6 xl:px-0 md:h-20 h-16">
                {/* Logo */}
                <motion.a
                    href="/"
                    className="flex items-center gap-1 cursor-pointer"
                >
                    <motion.img
                        variants={fadeIn("right", 0.3)}
                        className="w-15 h-7"
                        src={logo_lmp}
                        alt="Logo"
                    />
                </motion.a>

                {/* Mobile Menu Button */}
                <motion.button
                    variants={fadeIn("left", 0.3)}
                    className="lg:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <HiX className="h-6 w-6" />
                    ) : (
                        <HiMenu className="h-6 w-6" />
                    )}
                </motion.button>

                {/* Navigation Links - Desktop */}
                <motion.div
                    variants={fadeIn("down", 0.3)}
                    className="hidden lg:flex items-center gap-10"
                >
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            variants={fadeIn("down", 0.1 * (index + 1))}
                            href={link.href}
                            onClick={() => setActiveLink(link.href)}
                            className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all
                ${
                    activeLink === link.href
                        ? "text-blue-600 after:w-full  "
                        : "text-slate-600 hover:text-gray-900"
                }`}
                        >
                            {link.label}
                        </motion.a>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    variants={fadeIn("down", 0.3)}
                    className="hidden lg:flex items-center gap-4"
                >
                    <motion.button
                        variants={fadeIn("left", 0.3)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden lg:block border-2 border-blue-600 text-blue-600 hover:text-white px-6 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
                    >
                        <a href="/sign-up">Sign up</a>
                    </motion.button>
                    <motion.button
                        variants={fadeIn("left", 0.3)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden lg:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
                    >
                        <a href="/sign-in">Sign in</a>
                    </motion.button>
                </motion.div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    animate="show"
                    className="lg:hidden bg-white border-t border-gray-100 py-4"
                >
                    <motion.div
                        variants={fadeIn("down", 0.3)}
                        className="container mx-auto px-4 space-y-4"
                    >
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                variants={fadeIn("right", 0.1 * (index + 1))}
                                href={link.href}
                                onClick={() => {
                                    setActiveLink(link.href);
                                    setIsMenuOpen(false);
                                }}
                                className={`block text-sm font-medium py-2
                  ${
                      activeLink === link.href
                          ? "text-blue-600"
                          : "text-slate-600 hover:text-gray-900"
                  }`}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.button
                            variants={fadeIn("up", 0.4)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
                        >
                            Sign in
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
