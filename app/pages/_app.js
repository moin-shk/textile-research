// pages/_app.js
import Nav from '../components/Nav'
import '../styles/globals.css'   

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* This Nav will appear above every page */}
      <Nav />

      {/* Render the actual page component */}
      <Component {...pageProps} />
    </>
  )
}
