import '../Assets/Styles/Sidebar.scss'
import React, {useMemo} from "react";

import {gsap} from "gsap";
import {useRef, useEffect} from "react";


function Sidebar({menu, setMenu}) {

    let sidebarMenu = useRef(null);
    let sidebarMenuOverlay = useRef(null);
    let menuLayer = useRef(null);
    const menuTimeline = useMemo(() => gsap.timeline({paused: true}), []);
    useEffect(() => {
        menuTimeline.fromTo([sidebarMenuOverlay, menuLayer, sidebarMenu],
            {
                duration: 0,
                x: '100%'
            },
            {
                duration: 0.75,
                x: '0%',
                ease: 'power3.inOut',
                stagger: {
                    amount: 0.5
                }
            })
    }, [])

    useEffect(() => {
        menu ? menuTimeline.play() : menuTimeline.reverse()
    }, [menu]);

    return (
        <div className="Sidebar" ref={el => (sidebarMenuOverlay = el)}>

            <div className="menu-wrapper">
                <div className="menu-layer" ref={el => (menuLayer = el)}>
                    <nav className="sidebar-nav" ref={el => (sidebarMenu = el)}>
                        <div className="sidebar-top">
                            <div className="links-wrapper">

                                <div className="link-item">
                                    <li className="menu-link bold1" onClick={() => setMenu(false)}>Biography</li>
                                </div>
                                <div className="link-item">
                                    <li className="menu-link" onClick={() => setMenu(false)}>Studies on Hysteria</li>
                                    <span className="year">1895</span>

                                </div>
                                <div className="link-item">
                                    <li className="menu-link" onClick={() => setMenu(false)}>The Interpretation of
                                        Dreams
                                    </li>
                                    <span className="year">1900</span>

                                </div>
                                <div className="link-item">
                                    <li className="menu-link" onClick={() => setMenu(false)}>The Psychopathology of
                                        Everyday Life
                                    </li>
                                    <span className="year">1901</span>

                                </div>
                                <div className="link-item">
                                    <li className="menu-link" onClick={() => setMenu(false)}>Jokes and Their Relation to
                                        the Unconscious
                                    </li>
                                    <span className="year">1905</span>

                                </div>
                                <div className="link-item">
                                    <li className="menu-link" onClick={() => setMenu(false)}>Three Essays on the Theory
                                        of Sexuality
                                    </li>
                                    <span className="year">1905</span>

                                </div>
                                <div className="link-item">
                                    <li className="menu-link" onClick={() => setMenu(false)}>Totem and Taboo</li>
                                    <span className="year">1913</span>
                                </div>
                                <div className="link-item">
                                    <li className="menu-link" onClick={() => setMenu(false)}>On Narcissism</li>

                                    <span className="year">1914</span>
                                </div>
                                <div className="link-item">
                                    <li className="menu-link " onClick={() => setMenu(false)}>Introduction to
                                        Psychoanalysis
                                    </li>

                                    <span className="year">1917</span>
                                </div>
                                <div className="link-item">
                                    <li className="menu-link" onClick={() => setMenu(false)}>Beyond the Pleasure
                                        Principle
                                    </li>
                                    <span className="year">1920</span>

                                </div>
                                <div className="link-item">
                                    <li className="menu-link" onClick={() => setMenu(false)}>Moses and Monotheism</li>

                                    <span className="year">1939</span>
                                </div>
                                <div className="link-item">
                                    <li className="menu-link bold2" onClick={() => setMenu(false)}>Credits
                                    </li>
                                </div>
                            </div>
                        </div>

                    </nav>
                </div>

            </div>
        </div>
    )
        ;
}

export default Sidebar;