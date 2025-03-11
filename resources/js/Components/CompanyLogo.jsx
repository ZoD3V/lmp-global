import tcm from "../../../public/images/icons/ic-tcm.png";
import trust from "../../../public/images/icons/ic-trust.png";
import gpk from "../../../public/images/icons/ic-gpk.png";
import npr from "../../../public/images/icons/ic-npr.png";
import itm from "../../../public/images/icons/ic-itm.png";
import banpu from "../../../public/images/icons/ic-banpu.png";
import psn from "../../../public/images/icons/ic-psn.png";

const CompanyLogo = () => {
    const logos = [tcm, trust, npr, gpk, itm, banpu, psn];

    return (
        <section className="w-full mb-12">
            <div className="max-w-[1200px] mx-auto py-20 overflow-hidden flex flex-col sm:flex-row sm:items-center items-start">
                <div className="w-[300px] shrink-0 px-8 text-slate-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold sm:text-left  mb-8 sm:mb-0">
                    Proud partner at <br /> Hubspot & Segment
                </div>
                <div className="flex animate-marquee whitespace-nowrap">
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
