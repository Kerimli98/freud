import React, {useEffect} from 'react';
import '../Assets/Styles/dot.scss';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

function Dot(props) {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.set(".dot", {
            xPercent: -50,
            yPercent: -50
        });

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".block",
                start: "top top",
                end: "+=100%",
                scrub: true,
                pin: true,
                // markers: true
            }
        });

        tl.to(".dot", {
            scale: 1
        })
            .to(".text-container", {xPercent:-200},"-=0.35");

    })

    return (

    <>
        <div className="block">
            <div className="container">
                <div className="dot"></div>
                <div className="text-container">
                    <p className="longText">Biography</p>
                </div>
            </div>
        </div>
    </>
    );
}

export default Dot;