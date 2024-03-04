import Image from "next/image"




export default function Header () {
    return (
        <>
        <div class="header">

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
            <ul class="navlinks">
                <li><a href="#">HOME</a></li>
                <li><a href="#">RECIPE</a></li>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">CONTACT US</a></li>
            </ul>
        </nav>
        <form>
            <div class="search">
                <input class="search-input" type="search" placeholder="Search Recipes..."/>
            </div>
        </form>
        </div>
        </>
    );
}
