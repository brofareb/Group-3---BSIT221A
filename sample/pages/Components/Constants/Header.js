import Image from "next/image"
import Link from "next/link";



export default function Header ({recipes}) {
    
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
                <Link className="link" href="/">HOME</Link>
                <Link className="link" href="/recipes">RECIPE</Link>
                <Link className="link" href="/aboutus">ABOUT US</Link>
                <Link className="link" href="/contactus">CONTACT US</Link>
            </ul>
        </nav>

        <input type='checkbox' id='check' />
            
            <label for="check" className="open-menu"><i className="fas fa-bars"></i></label>

                <span className="menu">
                    <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
                    <li><a href="/index">HOME</a></li>
                    <li><a href="/recipes">RECIPE</a></li>
                    <li><a href="/aboutus">ABOUT US</a></li>
                    <li><a href="/contactus">CONTACT US</a></li>    
                </span>
        </div>
        
        </>
    );
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'recipe.json')
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileContent)

    

    return {
        props: {
            recipes: data
        }
    }
}
