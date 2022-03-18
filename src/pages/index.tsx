import type { GetStaticProps } from 'next'
import Head from '../components/Head'
import styles from '../styles/Home.module.scss'
import { useRouter } from 'next/router'
import { getMainPage } from '../functions/functions'
import { Text } from "../components/Text"

type Props = {
  JPname : string,
  ENname : string,
  Text : string
}
/* eslint-disable */
const Home = (props : Props) => {
  const router = useRouter();

  return (
    <div>
      <Head/>
      <main>
        <div className={styles.main}>
          <div className={styles.myName}>
            <div className={styles.Image}>
              <img src={"/icon/icon.webp"} width="384" height="384" alt="icon"/>
            </div>
            <div className={styles.Name}>
              <div className={styles.JPname}>
                <p>{props.JPname}</p>
              </div>
              <div className={styles.ENname}>
                <p>({props.ENname})</p>
              </div>
            </div>
          </div>
          <div className={styles.Text}>
            <Text text={props.Text}/>
          </div>
          <div className={styles.Links}>
            <div className={styles.LinkIcon}>
              <a href="https://github.com/snct-ukai" target="_blank" rel="noopener noreferrer">
                <img src={"/LinkIcon/GitHub.png"} width="32" height="32" alt="GitHub"/>
              </a>
            </div>
            <div className={styles.LinkIcon}>
              <a href="https://twitter.com/ukai_0417" target="_blank" rel="noopener noreferrer">
                <img src={"/LinkIcon/twitter.svg"} width="32" height="32" alt="twitter"/>
              </a>
            </div>
            <div className={styles.LinkIcon}>
              <a href="https://www.instagram.com/ukai_0417" target="_blank" rel="noopener noreferrer">
                <img src={"/LinkIcon/Instagram.png"} width="32" height="32" alt="Instagram"/>
              </a>
            </div>
            <div className={styles.LinkIcon}>
              <a href="https://qiita.com/snct-ukai" target="_blank" rel="noopener noreferrer">
                <img src={"/LinkIcon/qiita.png"} width="32" height="32" alt="qiita"/>
              </a>
            </div>
            <div className={styles.LinkIcon}>
              <a href="https://www.facebook.com/profile.php?id=100054641797333" target="_blank" rel="noopener noreferrer">
                <img src={"/LinkIcon/facebook.png"} width="32" height="32" alt="facebook"/>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async() =>{
  const getprops = await getMainPage();

  if(getprops){
    return{
      props:{
        JPname : getprops.getJPname(),
        ENname : getprops.getENname(),
        Text : getprops.getText()
      },
      revalidate: 300,
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