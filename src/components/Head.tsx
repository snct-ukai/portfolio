import Head from "next/head"

const head = (props :{title?: string}) => {
  const title : string = props.title || "Ukai Shota"
  return(
    <Head>
      <title>{title}</title>
      <meta name="description" content="This site is portfolio of Ukai Shota" />
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default head;