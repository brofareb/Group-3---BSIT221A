import Header from "@/components/constants/Header";
import Footer from "@/components/constants/Footer";
import Image from "next/image";
import Head from "next/head";

export default function ContactUS(){
    return(
        <>
            

                <div class = "contact-title">
                    <h1>
                        CONTACT US
                    </h1>
                </div>
                <div class = "contact">
                <p>
                        Have a question, suggestion, or just want to share your culinary triumphs with us? We'd love to hear from you! 
                         <br />Contact The Recipe Room through the following channels:
                    </p>
                    <ul class = "contact-list">
                        <li>Email: support@reciperoom.com</li>
                        <li>Phone: 0912-345-6789</li>
                    </ul>
                </div>
                <div class = "inquiry">
                    <p>
                        General Inquiries:
                        For general inquiries or feedback, drop us a line!
                    </p>
                    <ul class = "info-email">
                        <li>Email: info@reciperoom.com</li>
                    </ul>
                </div>

            
        </>
    )
}

