import React, {useEffect, useRef} from 'react';
import "../Assets/Styles/dedicated.scss"
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";

function Dedicated(props) {
    const textRef = useRef(null);
    useEffect(() => {
        const containers = gsap.utils.toArray(".container");
        containers.forEach((container) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    pinSpacing: false,
                    scrub: true,
                }
            });

            tl.to(container, {
                autoAlpha: 1
            }).to(
                container,
                {
                    autoAlpha: 0
                },
                0.5
            );
        });

    }, []);
    return (
        <div className="dedicated">

            <div className="container">
                <p className="text">Dedicated to Sigmund Freud's <span>166th birthday,</span> his life and work.</p>

            </div>
            <div className="container">
                <p className="text"> Sigmund Freud was an <span>Austrian neurologist and the founding father of
                    psychoanalysis</span>, a method for treating mental illness and also a theory which explains human
                    behavior.
                </p>
            </div>

            <div className="spacer">
            </div>

        </div>
    )
        ;
}

//        <div className="first">
//                 <div className="text">
//                     <p>Dedicated to Sigmund Freud's <span className="red">166th</span>
//                         <span className="red">birthday,</span> his life and work.</p>
//                 </div>
//             </div>
//
//             <div className="second">
//                 <div className="text">
//                     <p>Sigmund Freud was an <span className="red">Austrian neurologist and the founding father of psychoanalysis</span>,
//                         a method for
//                         treating mental illness and also a theory which explains human behavior.</p>
//                 </div>
//             </div>

export default Dedicated;