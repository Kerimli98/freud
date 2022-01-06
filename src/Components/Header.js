import "../Assets/Styles/header.scss"
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useState} from "react";


function Header({menu, setMenu}) {
    gsap.registerPlugin(ScrollTrigger);


    useEffect(() => {
        const tl = gsap.timeline();

        ScrollTrigger.matchMedia({
            "(min-width: 897px)": function () {
                tl.to('#main-curtain', {height: '0', duration: 1});
                tl.to('#my-content', {left: '0', top: '0', width: '100vw', height: '100vh', duration: 1}, '<');

                ScrollTrigger.create({
                    trigger: '.page',
                    start: 'top top',
                    end: '+=' + (window.innerHeight * 10),
                    pin: true
                })

                ScrollTrigger.create({
                    // trigger: 'body', not necessary as body is the default when no trigger is applied
                    start: 'top top-=100px',
                    end: '+=' + ((window.innerHeight * 10) - 100),
                    scrub: true,
                    animation: tl
                })
            },

            "(max-width: 896px)": function () {
                tl
                    .to("#main-curtain", {position: 'static', height: '100vh', width: '100%'})
                    .to("#my-content", {position: 'static', height: '100vh', width: '100%',})
                    .to(".main", {
                        fontSize: "12rem"
                    })
            }
        })

    }, [])


    return (
        <div className="Header">

            <div className="page">

                <div className="content" id="my-content">
                    <img src="images/77397633-56a794783df78cf7729753ba.jpg" alt="sigmund freud"/>
                </div>

            </div>

            <div className="curtain" id="main-curtain">
            </div>
            <p className="main">FREUD</p>

        </div>
    );
}

export default Header;