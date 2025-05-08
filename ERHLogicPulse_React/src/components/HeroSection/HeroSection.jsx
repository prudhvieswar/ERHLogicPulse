import React from "react";
import "./HeroSection.css";

function HeroSection() {
    return (
        <section className="hero pulse-background">
            <div className="hero-text ">
                <h1>
                    INNOVATE <span className="highlight">BOLDLY</span>
                </h1>
                <h1>BUILD <span className="highlight">FEARLESSLY</span></h1>
                <h1>LEAD <span className="highlight">DIGITALLY</span></h1>
            </div>
            <div>
                <h2 className="quote-text">At ERH LogicPulse, we engineer smart, scalable solutions that empower
                    organizations to lead with purpose and innovate with confidence</h2>
            </div>
        </section>
    );
}
export default HeroSection;
