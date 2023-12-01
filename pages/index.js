import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bienvenido querido visitante de internet" />
        <p className="description">
           En el siguiente enlace podras ingresar a la web academica de <a href="https://jvillcavillegas.github.io/"> Jose Luis Villca Villegas</a>

        </p>
      </main>

      <Footer />
    </div>
  )
}
