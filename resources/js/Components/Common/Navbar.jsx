import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import logo_lmp from "../../../../public/images/logo_lmp.png";
import Button from "./Button";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("/home");

    const navLinks = [
        { href: "/about", label: "About" },
        { href: "/next-t", label: "Next-T" },
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
            className="fixed top-0 left-0 right-0 bg-white backdrop-blur-sm border-solid z-50 border-b border-gray-200"
        >
            <div className="max-w-[1200px] flex justify-between items-center container mx-auto px-4 sm:px-6 xl:px-0 h-16">
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
                    variants={fadeIn("left", 0.3)}
                    className="hidden lg:flex items-center gap-4"
                >
                    <Button
                        buttonText="Sign up"
                        buttonLink="/app"
                        showArrow={false}
                        outline={true}
                    />
                    <Button
                        buttonText="Sign in"
                        buttonLink="/app"
                        showArrow={false}
                    />
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
                        <div className="flex flex-col gap-2 w-full">
                            <Button
                                buttonText="Sign In"
                                buttonLink="/app"
                                showArrow={false}
                            />
                            <Button
                                buttonText="Sign up"
                                buttonLink="/app"
                                showArrow={false}
                                outline={true}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
