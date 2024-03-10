import "@/styles/globals.css";
import Footer from "@/components/constants/Footer";
import Header from "@/components/constants/Header";


import "/styles/header.scss"




export default function App({ Component, pageProps }) {
  return (

  
  <>
 
  <Header />
  <Component {...pageProps} />;
  <Footer/>
  </>
  );
}
