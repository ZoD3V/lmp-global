import React from "react";
import rack from "../../../../public/images/dcim/dcim-rack-server.png";

const RackServer = () => {
    return (
        <section className="w-full flex items-end justify-end">
            <img src={rack} alt="rack" className="w-full md:w-[55%]" />
        </section>
    );
};

export default RackServer;
