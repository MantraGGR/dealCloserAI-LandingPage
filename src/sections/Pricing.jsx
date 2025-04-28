import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";

const PricingSection = () => {
    return (
        <div id="pricing" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Pricing"
                    sub="I will always try to find a suitable price for you"
                />
                {/* You can add pricing cards or plans here */}
                <div className="flex-center section-padding">
                    <h2 className="flex-center section-padding">Book A Call Today</h2>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;
