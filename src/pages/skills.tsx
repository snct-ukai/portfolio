import { GetStaticProps } from "next";
import { getSkills } from "../functions/functions";
import Head from "../components/Head"
import { skill_work } from "../classes/skill-work";
import styles from "../styles/skills.module.scss"
import { Text } from "../components/Text"

type Props = {
  num : number,
  titles : string[],
  texts : string[],
  pic_paths : string[],
}

const skills = (props : Props) => {
  const skills : skill_work[] = []
  for(let i = 0; i < props.num; i++){
    skills.push(new skill_work("skill", props.titles[i], props.texts[i], props.pic_paths[i]));
  }

  return(
    <div>
      <Head/>
      <main>
        <div className={styles.main}>
          <div className={styles.pageName}>
            <p>Skills</p>
          </div>
          <div className={styles.container}>
            {
              skills.map(element => {
                return (
                  <div key="" className={styles.child}>
                    <div className={styles.pic}>
                      <img src={`/data/skills/${element.getPic_path()}`} alt={element.getTitle()}/>
                    </div>
                    <div className={styles.detail}>
                      <Text text={element.getTitle()}/>
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

export default skills;

export const getStaticProps : GetStaticProps = async() => {
  const getprops = await getSkills();

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