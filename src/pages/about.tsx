import { GetStaticProps } from "next";
import Head from "../components/Head";
import styles from "../styles/About.module.scss";
import { getAbout, getEvents, getMainPage } from "../functions/functions";
import { myLifeEvent } from "../classes/lifeEvent";
import { Text } from "../components/Text"

type Props = {
  aboutMe : string,
  detail : string,
  JPname : string,
  ENname : string,
  myEventsYears : number[],
  myEventTexts : string[]
}
/* eslint-disable */
const about = (props : Props) => {
  const events : myLifeEvent[] = [];
  for(let i = 0; i < props.myEventTexts.length; i++){
    events.push(new myLifeEvent(props.myEventsYears[i], props.myEventTexts[i]))
  }

  return(
    <div>
      <Head/>
      <main>
        <div className={styles.main}>
          <div className={styles.pageName}>
            <p>About</p>
          </div>
          <div className={styles.top}>
            <div className={styles.aboutMe}>
              <div className={styles.Image}>
                <img src={"/icon/icon.png"} alt="icon"/>
              </div>
              <div className={styles.profile}>
                <div className={styles.Name}>
                  <div className={styles.JPname}>
                    <p>{props.JPname}</p>
                  </div>
                  <div className={styles.ENname}>
                    <p>({props.ENname})</p>
                  </div>
                </div>
                <div className={styles.text}>
                  <Text text={props.aboutMe}/>
                </div>
              </div>
            </div>
            <div className={styles.myEventTable}>
              {events.map( (value)=> {
                return(
                  <div key={value.getId()} className={styles.event}>
                    <div className={styles.eventYear}>
                      <p>{value.getYear()}年</p>
                    </div>
                    <div className={styles.eventDetail}>
                      <p>{value.getText()}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className={styles.detail}>
            <Text text={props.detail}/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default about;

export const getStaticProps: GetStaticProps = async() =>{
  const getprops = await getAbout();
  const getMainPageProps = await getMainPage();
  const events = await getEvents();

  return (getprops && getMainPageProps? {
    props:{
      aboutMe : getprops.getAboutMe(),
      detail : getprops.getDetail(),
      JPname : getMainPageProps.getJPname(),
      ENname : getMainPageProps.getENname(),
      myEventsYears : events.map(value => {
        return value.getYear();
      }),
      myEventTexts : events.map(value=>{
        return value.getText();
      })
    },
    revalidate: 300,
  }:{
    redirect: {
      permanent: false,
      destination: "/404"
    }
  })
}