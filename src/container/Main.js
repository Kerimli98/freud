import React, {useState} from 'react';
import FeatureSlides from "../Components/FeatureSlides";
import '../Components/FeatureSlides/style.scss'
import Header from "../Components/Header";
import MenuBtn from "../Components/MenuBtn";
import Sidebar from "../Components/Sidebar";
import Dedicated from "../Components/dedicated";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Dot from "../Components/Dot";

function Main() {

    const [menu, setMenu] = useState(false);

    gsap.registerPlugin(ScrollTrigger);


    return (
        <div>
            <MenuBtn menu={menu} setMenu={setMenu}/>
            <Sidebar menu={menu} setMenu={setMenu}/>
            <Header menu={menu} setMenu={setMenu}/>
            <Dedicated/>
            <Dot />

            <FeatureSlides/>
        </div>
    );
}

export default Main;