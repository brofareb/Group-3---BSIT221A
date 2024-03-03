import Image from "next/image"


export default function Header () {
    return (
        <>
        <div class="header">
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
