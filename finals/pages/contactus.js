
export default function ContactUS(){
    return(
        <>
            <div className ="contact-title">
                <h1>
                    CONTACT US
                </h1>
            </div>
            <div className = "body">
                <div className = "contact">
                    <p>Have a question, suggestion, or just want to share your culinary triumphs with us? We'd love to hear from you! 
                        Contact The Recipe Room through the following channels:
                    </p>
                    <div className = "list">
                        <ul className = "contact-list">
                            <li>Email: support@reciperoom.com</li>
                            <li>Phone: 0912-345-6789</li>
                        </ul>
                    </div>
                </div>
                <div className = "inquiry">
                    <p>
                        General Inquiries:<br/> 
                        For general inquiries or feedback, drop us a line!
                    </p>
                    <div className="list">
                        <ul className = "info-email">
                            <li>Email: info@reciperoom.com</li>
                        </ul>
                    </div>    
                </div>
            </div>
            
        </>
    )
}

