import { useState } from 'react';
import "./Header.css";

function Item(props) {
    const [Hovering, SetHovering] = useState(false)

    return ( 
        <a className='HeaderLink' style={{filter: "brightness(0.9)"}} href={props.Url}>
        <li onMouseMove={() => SetHovering(true)} onMouseOut={() => SetHovering(false)} style={Hovering ? {filter: "brightness(1.2)"} : undefined}>
            {props.Name}
        </li>
        </a>
    )
}

function Logo(props) {
    return (
        <img className="logo" src="./logo.png" alt="logo"></img>
    )
}

function Header() {
    return (
        <div className="Header">
            <ul>
                <Item Name="Acceuil" Url="/" />
                <Item Name="Plats" Url="Carte" />
                <Item Name="Boissons" Url="Boisson" />
                <Item Name="Contacts" Url="Contacts" />
            </ul>
            <Logo />
        </div>
    )
}

export default Header;
