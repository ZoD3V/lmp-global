import React from "react";
import Navbar from "../Components/Common/Navbar";
import Hero from "../Components/Common/Hero";
import CompanyLogo from "../Components/CompanyLogo";
import PurposeSection from "../Components/PurposeSection";
import FeaturesSection from "../Components/FeatureSection";
import GroupSection from "../Components/GroupSection";
import CertificateSection from "../Components/CertificateSection";
import Footer from "../components/Common/Footer";
import CertificateIsoSection from "../Components/CertificateIsoSection";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Server, Leaf, Zap, ChevronUp } from "lucide-react";
import { fadeIn } from "../utils/motion";

const FadeInSection = ({ children, className }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const Home = ({ banner }) => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="overflow-hidden">
                <Navbar />
                <Hero
                    banner={banner}
                    title="Empowering a Greener Future with Innovation"
                    description=" Harness renewable energy, optimize data center
                        performance, and achieve sustainability while ensuring
                        regulatory compliance—paving the way for a cleaner,
                        modern, and eco-friendly world."
                    showButton={true}
                    buttonText="See All Product"
                    buttonLink="/product"
                />

                <div className="fixed bottom-6 left-6 z-50">
                    <Button
                        aria-label="Name"
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        className="h-12 w-12 rounded-full bg-background shadow-lg border"
                        variant="outline"
                    >
                        <ChevronUp className="h-5 w-5" />
                    </Button>
                </div>

                <PurposeSection />
                <GroupSection />
                <CertificateIsoSection />
                <CertificateSection />
                <FeaturesSection />
                <CompanyLogo />

                <section
                    id="contact"
                    className="w-full py-20 md:py-32 bg-white"
                >
                    <div className="max-w-[1200px] container px-4 md:px-6 xl:px-0">
                        <div className="grid gap-10 lg:grid-cols-2">
                            <FadeInSection>
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
                                            Contact our team to discuss your
                                            specific requirements or request a
                                            custom solution for your data center
                                            needs.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="rounded-full bg-blue-500/10 p-2">
                                                <Server className="h-5 w-5 text-blue-600" />
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="font-bold">
                                                    Product Inquiries
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Need help finding the right
                                                    solution? Our product
                                                    specialists can help.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="rounded-full bg-green-500/10 p-2">
                                                <Leaf className="h-5 w-5 text-green-600" />
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="font-bold">
                                                    Sustainability Consulting
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Looking to reduce your data
                                                    center's environmental
                                                    impact? Our sustainability
                                                    experts are ready to assist.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="rounded-full bg-amber-500/10 p-2">
                                                <Zap className="h-5 w-5 text-amber-600" />
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="font-bold">
                                                    Custom Solutions
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Need specialized solutions
                                                    for your unique challenges?
                                                    We can create custom
                                                    solutions for your needs.
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
                                        <Button
                                            asChild
                                            variant="outline"
                                            size="lg"
                                        >
                                            <a href="https://wa.me/082320218200">
                                                Call Sales: 082-320-218-200
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </FadeInSection>

                            <FadeInSection>
                                <div
                                    id="contact-form"
                                    className="rounded-2xl border bg-background p-6 shadow-lg"
                                >
                                    <form className="space-y-4">
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
                                                type="tel"
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
                                                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                placeholder="Tell us about your requirements..."
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                                        >
                                            Submit Inquiry
                                        </Button>
                                    </form>
                                </div>
                            </FadeInSection>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </main>
    );
};

export default Home;
