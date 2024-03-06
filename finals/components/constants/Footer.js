import Image from "next/image"



function Footer () {
    return (
        <>
        <div className="footer">
            <div>
                <div onclick="scollToTop()" class="scrollTop">↑</div>

                <form>
                    <div className="searchfooter">
                        <input className="search-input-footer" type="search" placeholder ="Search Recipes/Ingredients..."></input>  
                    </div>
                </form>
            </div>
        </div>

        <div className="logofooter">

        {['origlogo'].map((path) => {
            return (
                <div key={path}>
                    <Image
                        src={`/${path}.png`} 
                        alt="The Recipe Room Logo"
                        width='200'
                        height='60'
                    />
                    </div>
                )
            })}
        </div>

        </>
    )
}

export default Footer