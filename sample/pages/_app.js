import "@/styles/globals.css";

/*SCSS of Header and Footer*/
import "@/styles/HeaderFooter/header.scss"
import "@/styles/HeaderFooter/footer.scss"

/*SCSS of index*/
import "@/styles/pagestyles/home.scss"

/*SCSS of the Recipe Page*/
import "@/styles/pagestyles/recipes.scss"

/*SCSS of About Us Page*/
import "@/styles/pagestyles/aboutus.scss"

/*SCSS of Contact Us Page*/
import "@/styles/pagestyles/contacts.scss"

/*SCSS of View Page*/
import "@/styles/pagestyles/viewpage.scss"

/*Import for Header and Footer*/
import Header from "@/Components/Constants/Header";
import Footer from "@/Components/Constants/Footer";

function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  
  return (
  <>
    <Header />
  <Component {...pageProps} />
  <Footer />
  </>
  )
}

export default App

