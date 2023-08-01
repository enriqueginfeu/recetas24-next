import Head from "next/head"
import Header from "../components/header"
import Footer from "../components/footer"



export default function Layout({children, title = '', description = ''}) {
  return (
    <>
        <Head>
            <title>{`Recetas 24Hs - ${title}`}</title>
            <meta name="description" content={description} />
        </Head>
        <Header />
        {children}
        <Footer />
    </>
  )
}
