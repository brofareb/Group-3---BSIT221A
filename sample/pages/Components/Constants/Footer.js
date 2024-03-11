import Image from "next/image"



function Footer () {
    return (
        <>
        <div className="footer">
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