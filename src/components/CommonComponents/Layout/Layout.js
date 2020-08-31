import Head from 'next/head'
import { Footer, ScrollTop, Header } from 'components'

export default function Layout({ title, children, url, itemDetails }) {
  const des = ``;

  return (
    <div className="app-wrapper">
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/logo.png" />
        <meta property="og:type" content="article" />
        <meta property="og:url" itemProp="url" content={url} />
        <meta property="og:title" itemProp="name" content={itemDetails ? itemDetails.title : 'DigiToday'} />
        <meta property="og:description" content={itemDetails ? itemDetails.description : des} />
        <meta property="og:image" itemProp="thumbnailUrl" content={itemDetails ? itemDetails.img1 : '/static/img/logo.png'} />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="480" />
      </Head>

      <>
        <main>
          <Header />
          <div className="body-content">
            {children}
          </div>
          <Footer />
        </main>
        <ScrollTop />
      </>
    </div>
  )
}
