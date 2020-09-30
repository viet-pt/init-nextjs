import Head from 'next/head';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollTop from '../ScrollTop/ScrollTop';

export default function Layout({ title, children, video, image, description }) {
  const des = "Hệ thống quản lý danh sách không quảng cáo";
  return (
    <div className="app-wrapper">
      <Head>
        <meta charSet="utf-8" />
        <title>{title || "VNPT"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#59B858" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:title" content={title || "VNPT"} />
        <meta property="title" content={title || "VNPT"} />
        <meta property="og:site_name" content="VNPT" />
        <meta property="site_name" content="VNPT" />
        <meta property="og:type" content="website" />
        <meta property="image" content={image || "https://zekangg.tk/img/logo.png"} />
        <meta property="og:image" content={image || "https://zekangg.tk/img/logo.png"} />
        <meta property="og:description" content={description || des} />
        <meta property="description" content={description || des} />
        <link rel="icon" type="image/png" href="/static/imgs/logo.svg" />
        {!!video && <meta property='og:video' content={video} />}
        {!!video && <meta property='video' content={video} />}
      </Head>

      <main>
        <Header />
        <div className="body-content">
          {children}
        </div>
        <Footer />
      </main>
      <ScrollTop />
    </div>
  )
}
