import '../Assets/Styles/menu.scss'

function MenuBtn({menu,setMenu}) {
    return (
        <div className="Menu">
            <button className={`menu-trigger + ${menu && 'menu-close'}`} onClick={()=>setMenu(!menu)}>
                <span></span>
                <span></span>
            </button>
        </div>
    );
}

export default MenuBtn;