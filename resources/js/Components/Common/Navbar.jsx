import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import logo_lmp from "../../../../public/images/logo_lmp.png";
import { router, usePage } from "@inertiajs/react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LogOut, UserIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import SearchModal from "./SearchModal";
import { useMediaQuery } from "@/lib/UseMediaQuery";

const Navbar = () => {
    const { url } = usePage();

    const { auth } = usePage().props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("/home");
    const isDesktop = useMediaQuery("(max-width: 1280px)");

    const navLinks = [
        { href: "/about", label: "About" },
        { href: "/nex-t", label: "Nex-T" },
        { href: "/product", label: "Product & DC Solution" },
        { href: "/services", label: "Service" },
        { href: "/partners", label: "Partner" },
        { href: "/contact", label: "Contact" },
        { href: "/support", label: "Support" },
    ];

    const handleClickRoute = (item) => {
        window.location.replace(item);
    };

    const handleLogout = (e) => {
        router.get("/logout");

        localStorage.clear();
        sessionStorage.clear();
    };

    return (
        <motion.nav
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="fixed top-0 left-0 right-0 bg-white backdrop-blur-sm border-solid z-50 border-b border-gray-200"
        >
            <div className="flex justify-between items-center max-w-[1200px] container relative z-20 px-4 md:px-6 xl:px-0 h-16">
                <div className="flex items-center gap-2 w-full xl:w-auto">
                    {/* Mobile Menu Button */}
                    <motion.button
                        variants={fadeIn("right", 0.2)}
                        className="xl:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <HiX className="h-6 w-6" />
                        ) : (
                            <HiMenu className="h-6 w-6" />
                        )}
                    </motion.button>
                    {/* Logo */}
                    <div className="flex items-center justify-between w-full">
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
                        {isDesktop && <SearchModal />}
                        {/* <div className="block xl:hidden">
                             <SearchModal />
                        </div> */}
                    </div>
                </div>

                {/* links */}
                <motion.div
                    variants={fadeIn("down", 0.3)}
                    className="hidden xl:flex items-center gap-10"
                >
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            variants={fadeIn("down", 0.1 * index)}
                            href={link.href}
                            className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
                                url === link.href
                                    ? "text-blue-600 after:w-full"
                                    : "text-slate-600 hover:text-gray-900"
                            }`}
                        >
                            {link.label}
                        </motion.a>
                    ))}
                </motion.div>

                {/* CTA Button */}
                {!auth.user && (
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        className="hidden xl:flex items-center gap-4"
                    >
                        {!isDesktop && <SearchModal />}

                        {/* <SearchModal /> */}
                        <Button
                            variant="outline"
                            onClick={() =>
                                handleClickRoute("/app/edit-profile")
                            }
                        >
                            Sign Up
                        </Button>
                        <Button
                            variant="theme"
                            onClick={() =>
                                handleClickRoute("/app/edit-profile")
                            }
                        >
                            Sign in
                        </Button>
                    </motion.div>
                )}

                {/* User Menu */}
                {auth.user && (
                    <div className="flex items-center gap-4">
                        <SearchModal />

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="relative h-10 w-10 rounded-full"
                                >
                                    <Avatar className="h-10 w-10">
                                        <AvatarFallback className="font-medium text-xl">
                                            {auth.user.name
                                                .charAt(0)
                                                .toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-56"
                                align="end"
                                forceMount
                            >
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            {auth.user.name}
                                        </p>
                                        <p className="text-xs leading-none text-muted-foreground">
                                            {auth.user.email}
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup
                                    onClick={() =>
                                        handleClickRoute("/app/edit-profile")
                                    }
                                >
                                    <DropdownMenuItem>
                                        <UserIcon className="mr-2 h-4 w-4" />
                                        <span>Profile</span>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    onClick={() => handleLogout()}
                                >
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                )}
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    animate="show"
                    className="xl:hidden bg-white border-t border-gray-100 py-4"
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
                                variant="outline"
                                onClick={() =>
                                    handleClickRoute("/app/edit-profile")
                                }
                            >
                                Sign Up
                            </Button>
                            <Button
                                variant="theme"
                                onClick={() =>
                                    handleClickRoute("/app/edit-profile")
                                }
                            >
                                Sign in
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
