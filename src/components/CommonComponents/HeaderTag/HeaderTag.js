import Head from 'next/head';
const HeaderTag = props =>(
    <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#59B858" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:title" content={props.title || "Zekang"} />
        <meta property="title" content={props.title || "Zekang"} />
        <meta property="og:site_name" content="Zekang" />
        <meta property="site_name" content="Zekang" />
        <meta property="og:type" content="website" />
        <meta property="image" content={props.image || "https://zekangg.tk/img/logo.png"} />
        <meta property="og:image" content={props.image || "https://zekangg.tk/img/logo.png"} />
        <meta property="og:description" content={props.description || "Sản Phẩm Vẩy nến"} />
        <meta property="description" content={props.description || "Sản Phẩm Vẩy nến"} />
        <link rel="icon" type="image/png" href="static/imgs/logo.png"/>
        {!!props.video && <meta property='og:video' content={props.video} />}
        {!!props.video && <meta property='video' content={props.video} />}
        <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&amp;subset=latin-ext,vietnamese" rel="stylesheet" />
        <title>{props.title||"Zekang"}</title>
  </Head>
)

export default React.memo(HeaderTag) ;