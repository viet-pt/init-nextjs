import Head from 'next/head'
import Header from '../components/CommonComponents/Header/Header'
import Home from '../components/Home/Home'
import Footer from '../components/CommonComponents/Footer/Footer';
import HeaderTag from './../components/CommonComponents/HeaderTag/HeaderTag';

function Index(props) {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="../../favicon.ico" />
      </Head>
      <HeaderTag />
      <main>
        <Header />
        <Home {...props}></Home>
        <Footer />
      </main>
    </React.Fragment>
  )
}

export default Index;