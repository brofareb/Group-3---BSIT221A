import "@/styles/globals.css";
import "/styles/styles.scss"

import Header from "/components/constants/Header"
import Footer from "/components/constants/Footer"


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
