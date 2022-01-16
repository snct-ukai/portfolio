import type { GetServerSideProps, NextPage } from 'next'
import Head from '../components/Head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useRouter } from 'next/router'
import { getMainPage } from '../functions/functions'

type Props = {
  JPname : string,
  Enname : string,
  Text : string
}

const Home = (props : Props) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head/>
      <main className={styles.main}>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async() =>{
  const getprops = await getMainPage();

  if(getprops){
    return{
      props:{
        JPname : getprops.getJPname(),
        ENname : getprops.getENname(),
        Text : getprops.getText()
      }
    }
  }
  else{
    return{
      redirect: {
        permanent: false,
        destination: "/404"
      }
    }
  }
}