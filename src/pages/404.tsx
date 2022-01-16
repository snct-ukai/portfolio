import { NextPage } from "next";
import basestyles from '../styles/Home.module.scss'
import Head from '../components/Head'

const NotFound : NextPage = () => {
  return(
    <div className={basestyles.container}>
      <Head/>
      <main className={basestyles.main}>
        <h2>404エラー|ページが見つかりません</h2>
      </main>
    </div>
  )
}

export default NotFound