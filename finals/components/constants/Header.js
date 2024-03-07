import Image from "next/image"




export default function Header () {
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
                <li><a href="#">HOME</a></li>
                <li><a href="#">RECIPE</a></li>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="contact-us.js">CONTACT US</a></li>
            </ul>
        </nav>
        <form>
            <div className="search">
                <input className="search-input" type="search" placeholder="Search Recipes..."/>
            </div>
        </form>

        </div>

        
        </>
    );
}
