import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import {
    ArrowRight,
    Server,
    Leaf,
    Zap,
    CheckCircle,
    Loader2,
    LocateFixedIcon,
    Mail,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Link } from "@inertiajs/react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

const ContactSection = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setIsSuccess(false);
        setIsError(false);

        try {
            const formData = new FormData(event.target);
            formData.append(
                "access_key",
                "00658d79-4e4c-4426-a962-62160aa32aa8"
            );

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                event.target.reset();
                setIsSuccess(true);
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                setErrorMessage(
                    data.message || "Submission failed. Please try again."
                );
                setIsError(true);
                setTimeout(() => setIsError(false), 5000);
            }
        } catch (error) {
            setErrorMessage("Network error. Please check your connection.");
            setIsError(true);
            setTimeout(() => setIsError(false), 5000);
        } finally {
            setIsSubmitting(false); // Reset loading state
        }
    };

    return (
        <section id="contact" className="w-full py-16 bg-white">
            {/* Success Alert */}
            {isSuccess && (
                <Alert
                    variant="default"
                    className="fixed top-4 right-4 w-[350px] z-[999] bg-emerald-50 border-emerald-500 animate-fade-in shadow-lg"
                >
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <AlertTitle className="text-emerald-600">
                        Success!
                    </AlertTitle>
                    <AlertDescription className="text-emerald-600">
                        Your message has been sent successfully.
                    </AlertDescription>
                </Alert>
            )}

            {/* Error Alert */}
            {isError && (
                <Alert
                    variant="destructive"
                    className="fixed top-4 right-4 w-[350px] z-[999] animate-fade-in shadow-lg"
                >
                    <CrossCircledIcon className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
            )}
            <div className="container px-4 md:px-6 xl:px-0 max-w-[1200px]">
                <div className="grid gap-10 lg:grid-cols-2">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeIn("up", 0.3)}
                    >
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <Badge
                                    className="inline-flex bg-blue-500/10 text-blue-600"
                                    variant="secondary"
                                >
                                    Get in Touch
                                </Badge>
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                    Ready to optimize your data center?
                                </h2>
                                <p className="text-muted-foreground md:text-xl/relaxed">
                                    Contact our team to discuss your specific
                                    requirements or request a custom solution
                                    for your data center needs.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-blue-500/10 p-2">
                                        <LocateFixedIcon className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="font-bold">Visit Us</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Harapan Indah Boulevard Jl. Sentra
                                            Niaga No.7 Bekasi - Jawa Barat
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-green-500/10 p-2">
                                        <BsWhatsapp className="h-5 w-5 text-green-600" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="font-bold">WhatsApp</h3>
                                        <p className="text-sm text-muted-foreground">
                                            (+62) 823 2021 8200
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-amber-500/10 p-2">
                                        <BsTelephone className="h-5 w-5 text-amber-600" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="font-bold">Call Us</h3>
                                        <p className="text-sm text-muted-foreground">
                                            087771614000
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-yellow-500/10 p-2">
                                        <Mail className="h-5 w-5 text-yellow-600" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="font-bold">Email</h3>
                                        <p className="text-sm text-muted-foreground">
                                            info@lmp-networks.com
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-gradient-to-r from-blue-600 to-blue-500 group"
                                >
                                    <Link href="#contact-form">
                                        Request a Demo{" "}
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link href="tel:+18005551234">
                                        Call Sales: 0823-2021-8200
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        variants={fadeIn("up", 0.3)}
                        viewport={{ once: true }}
                    >
                        <div
                            id="contact-form"
                            className="rounded-2xl border bg-background p-6 shadow-lg"
                        >
                            <form onSubmit={onSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="first-name"
                                            className="text-sm font-medium leading-none"
                                        >
                                            First name
                                        </label>
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            required
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="last-name"
                                            className="text-sm font-medium leading-none"
                                        >
                                            Last name
                                        </label>
                                        <input
                                            id="last-name"
                                            name="last-name"
                                            required
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="company"
                                        className="text-sm font-medium leading-none"
                                    >
                                        Company
                                    </label>
                                    <input
                                        id="company"
                                        name="company"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Your company"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium leading-none"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="phone"
                                        className="text-sm font-medium leading-none"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        id="phone"
                                        type="number"
                                        name="phone"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="(555) 555-5555"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="message"
                                        className="text-sm font-medium leading-none"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Tell us about your requirements..."
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        "Submit Inquiry"
                                    )}
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
