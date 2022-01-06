import React, {useEffect, useRef, useState} from 'react';
import {data} from './data.js';
import FeatureSlide from "./FeatureSlide";
import "./style.scss"
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";

function RenderImages({activeFeatureIndex}) {
    return data.map(({imageUrl}, index) => (
        <img className={activeFeatureIndex === index && 'as-primary'}
             key={imageUrl}
             style={{backgroundImage: `url(${imageUrl})`}}
        />
    ));
}


function FeatureSlides() {
    const [activeFeatureIndex, setFeatureIndex] = useState(0)
    const featureSliderRef = useRef(null);
    const featureSlidesRightRef = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, []);
    useEffect(() => {
        function stopTrigger() {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: featureSlidesRightRef.current,
                    start: "top top",
                    end: () => `+=${featureSliderRef.current.offsetHeight}`,
                    scrub: true,
                    pin: true,
                },
            });
            return tl;
        }

        const master = gsap.timeline();
        master.add(stopTrigger());

    }, []);
    return (
        <div ref={featureSliderRef} className="feature-slides-container">
            <div className="feature-slides-left">
                {data.map((feature, index) => (
                    <FeatureSlide updateActiveImage={setFeatureIndex}
                                  key={feature.imageUrl} title={feature.title} description={feature.description}
                                  index={index}/>
                ))}
            </div>
            <div ref={featureSlidesRightRef} className="feature-slides-right">
                <RenderImages activeFeatureIndex={activeFeatureIndex}/>
            </div>
        </div>
    );
}

export default FeatureSlides;