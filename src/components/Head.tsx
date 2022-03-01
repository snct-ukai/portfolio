import Head from "next/head"

const head = (props :{title?: string}) => {
  const title : string = props.title || "Ukai Shota"
  return(
    <Head>
      <title>{title}</title>
      <meta name="description" content="This site is portfolio of Ukai Shota" />
      <meta name="viewport" content="width=device-width"/>
      <link rel="icon" href="/favicon.ico" />
      
      <meta property="og:url" content="https://portfolio.snct-ukai.tk" />
      <meta property="og:type" content=" portfolio" />
      <meta property="og:title" content=" Ukai Shota" />
      <meta property="og:description" content=" portfolio site created with nextJS" />
      <meta property="og:site_name" content="Ukai Shota" />
      <meta property="og:image" content="https://portfolio.snct-ukai.tk/icon/icon.webp" />
    </Head>
  )
}

export default head;