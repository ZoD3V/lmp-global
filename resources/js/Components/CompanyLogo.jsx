import tcm from "../../../public/images/icons/ic-tcm.png";
import trust from "../../../public/images/icons/ic-trust.png";
import gpk from "../../../public/images/icons/ic-gpk.png";
import npr from "../../../public/images/icons/ic-npr.png";
import itm from "../../../public/images/icons/ic-itm.png";
import banpu from "../../../public/images/icons/ic-banpu.png";
import psn from "../../../public/images/icons/ic-psn.png";
import Heading from "./Common/Heading";

const CompanyLogo = () => {
    const logos = [tcm, trust, npr, gpk, itm, banpu, psn];

    return (
        <section className="w-full mb-12">
            <div className="max-w-[1200px] mx-auto py-20 overflow-hidden flex flex-col gap-20 tems-center justify-center">
                <Heading
                    title={"With great partners"}
                    description={
                        "Our customers are the best in the industry, and we're proud to work with them."
                    }
                />
                <div className="flex animate-marquee-left whitespace-nowrap">
                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`Company Logo ${index + 1}`}
                            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                        />
                    ))}
                    {/* Duplicate logos for seamless loop */}
                    {logos.map((logo, index) => (
                        <img
                            key={`duplicate-${index}`}
                            src={logo}
                            alt={`Company Logo ${index + 1}`}
                            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                        />
                    ))}
                </div>
                <div className="flex animate-marquee-right whitespace-nowrap">
                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`Company Logo ${index + 1}`}
                            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                        />
                    ))}
                    {/* Duplicate logos for seamless loop */}
                    {logos.map((logo, index) => (
                        <img
                            key={`duplicate-${index}`}
                            src={logo}
                            alt={`Company Logo ${index + 1}`}
                            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyLogo;
