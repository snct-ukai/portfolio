import { GetStaticProps } from "next";
import { getWorks } from "../functions/functions";
import Head from "../components/Head"
import { skill_work } from "../classes/skill-work";
import styles from "../styles/works.module.scss"
import { Text } from "../components/Text"

type Props = {
  num : number,
  titles : string[],
  texts : string[],
  pic_paths : string[],
}
/* eslint-disable */
const works = (props : Props) => {
  const works : skill_work[] = []
  for(let i = 0; i < props.num; i++){
    works.push(new skill_work("work", props.titles[i], props.texts[i], props.pic_paths[i]));
  }

  return(
    <div>
      <Head/>
      <main>
        <div className={styles.main}>
          <div className={styles.pageName}>
            <p>Works</p>
          </div>
          <div className={styles.container}>
            {
              works.map(element => {
                return (
                  <div key="" className={styles.child}>
                    <div className={styles.pic}>
                      <img src={`/data/works/${element.getPic_path()}`} width="600" height="300" alt={element.getTitle()}/>
                    </div>
                    <div className={styles.detail}>
                      <Text text={element.getText()}/>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </main>
    </div>
  )
}

export default works;

export const getStaticProps : GetStaticProps = async() => {
  const getprops = await getWorks();

  return {
    props: {
      num : getprops.length,
      titles : getprops.map(value => { return value.getTitle(); }),
      texts : getprops.map(value => { return value.getText(); }),
      pic_paths : getprops.map(value => { return value.getPic_path(); })
    },
    revalidate: 300,
  }
}