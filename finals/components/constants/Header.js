import Image from "next/image"
import Link from "next/link";
import { Icon } from 'semantic-ui-react'
import { useState } from 'react';


export default function Header () {
    const [menuVisible, setMenuVisible] = useState(false);

    const show = () => {
        setMenuVisible(prevState => !prevState);
    };
    const hide = () => {
        setMenuVisible(false);
    };
    return (
        <>
        <div className="header">
           {['origlogo'].map((path) => {
            return (
                <div key={path}>
                    <Image
                        src={`/${path}.png`} 
                        alt="The Recipe Room Logo"
                        width='200'
                        height='30'
                    />
                    </div>
                )
            })}
        <nav>
            <ul className="navlinks">
                <Link className="link" href="/index">HOME</Link>
                <Link className="link" href="#section3">RECIPE</Link>
                <Link className="link" href="/aboutus">ABOUT US</Link>
                <Link className="link" href="/contactus">CONTACT US</Link>
            </ul>
        </nav>
        </div>

        
        </>
    );
}
