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
                <Link className="link" href="/home">HOME</Link>
                <Link className="link" href="/home#section3">RECIPE</Link>
                <Link className="link" href="/aboutus">ABOUT US</Link>
                <Link className="link" href="/contactus">CONTACT US</Link>
            </ul>
        </nav>

        <input type='checkbox' id='check' />
            
            <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>

                <span class="menu">
                    <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
                    <li><a href="/home">HOME</a></li>
                    <li><a href="/home#section3">RECIPE</a></li>
                    <li><a href="/aboutus">ABOUT US</a></li>
                    <li><a href="/contactus">CONTACT US</a></li>    
                </span>
            
        <form>
            <div class="search">
                <input class="search-input" type="search" placeholder="Search Recipes..."></input>
                
            </div>
        </form>

        </div>

        
        </>
    );
}
