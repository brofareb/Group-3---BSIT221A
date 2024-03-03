import "@/styles/globals.css";
import "/styles/styles.scss"

import Header from "/components/Constants/Header"
import Footer from "/components/Constants/Footer"


function App({ Component, pageProps }) {
  return (
  <>
    <Header />
  <Component {...pageProps} />
  <Footer />
  </>
  )
}

export default App
