import '../Assets/Styles/menu.scss'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect} from "react";

function Sidebar({menu,setMenu}) {
    return (
        <div className="Sidebar">
            <button className={`menu-trigger ${menu && 'menu-close'}`} onClick={()=>setMenu(!menu)}>
                <span></span>
                <span></span>
            </button>
        </div>
    );
}

export default Sidebar;