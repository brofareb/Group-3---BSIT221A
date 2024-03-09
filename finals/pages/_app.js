import "/styles/footer.scss"
import "/styles/header.scss"
import "/styles/home.scss"
import "/styles/about.scss"
import "/styles/contacts.scss"


import Header from "/components/constants/Header"
import Footer from "/components/constants/Footer"


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
