// horizontal
import tcm from "../../../public/images/icons/ic-tcm.png";
import trust from "../../../public/images/icons/ic-trust.png";
import gpk from "../../../public/images/icons/ic-gpk.png";
import npr from "../../../public/images/icons/ic-npr.png";
import itm from "../../../public/images/icons/ic-itm.png";
import banpu from "../../../public/images/icons/ic-banpu.png";
import psn from "../../../public/images/icons/ic-psn.png";
import freeport from "../../../public/images/icons/ic-freeport.png";
import indosat from "../../../public/images/icons/ic-indosat.png";
import pegadaian from "../../../public/images/icons/ic-pegadaian.png";
import sig from "../../../public/images/icons/ic-sig.png";
import telkomakses from "../../../public/images/icons/ic-telkomakses.png";
import telkomselsigma from "../../../public/images/icons/ic-telkomsigma.png";
import wir from "../../../public/images/icons/ic-wir.png";

//vertical
import keuangan from "../../../public/images/icons/ic-keuangan.png";
import kominfo from "../../../public/images/icons/ic-kominfo.png";
import pertanian from "../../../public/images/icons/ic-pertanian.png";
import bjb from "../../../public/images/icons/ic-bjb.png";
import bri from "../../../public/images/icons/ic-bri.png";
import bukopin from "../../../public/images/icons/ic-bukopin.png";
import garuda from "../../../public/images/icons/ic-garuda.png";
import len from "../../../public/images/icons/ic-len.png";
import marga from "../../../public/images/icons/ic-marga.png";
import peruri from "../../../public/images/icons/ic-peruri.png";
import telkomsel from "../../../public/images/icons/ic-telkomsel.png";

import Heading from "./Common/Heading";

const CompanyLogo = () => {
    const logos = [
        tcm,
        trust,
        npr,
        gpk,
        itm,
        banpu,
        psn,
        freeport,
        indosat,
        pegadaian,
        sig,
        telkomakses,
        telkomselsigma,
    ];
    const logoVertical = [
        keuangan,
        kominfo,
        pertanian,
        bjb,
        bri,
        bukopin,
        garuda,
        len,
        marga,
        peruri,
        telkomsel,
        wir,
    ];

    return (
        <section className="w-full mb-12">
            <div className="max-w-[1200px] mx-auto py-20 overflow-hidden flex flex-col gap-20 px-4 sm:px-6 xl:px-0 tems-center justify-center">
                <Heading
                    title={"With great partners"}
                    description={
                        "Our customers are the best in the industry, and we're proud to work with them."
                    }
                />
                <div className="marquee-container overflow-hidden relative w-full">
                    <div className="flex animate-marquee-left whitespace-nowrap">
                        {/* Satu set logo asli */}
                        {logos.map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt={`Company Logo ${index + 1}`}
                                className="mx-4 h-12 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                            />
                        ))}

                        {/* Duplikat set logo untuk seamless scrolling */}
                        {logos.map((logo, index) => (
                            <img
                                key={`duplicate-${index}`}
                                src={logo}
                                alt={`Company Logo ${index + 1}`}
                                className="mx-4 h-12 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                            />
                        ))}
                    </div>
                </div>

                <div className="flex animate-marquee-right whitespace-nowrap">
                    {logoVertical.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`Company Logo ${index + 1}`}
                            className="mx-4 h-16 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                        />
                    ))}
                    {/* Duplicate logos for seamless loop */}
                    {logoVertical.map((logo, index) => (
                        <img
                            key={`duplicate-${index}`}
                            src={logo}
                            alt={`Company Logo ${index + 1}`}
                            className="mx-4 h-16 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyLogo;
