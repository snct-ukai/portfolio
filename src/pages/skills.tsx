import { GetStaticProps } from "next";
import { getSkills } from "../functions/functions";
import Head from "../components/Head"
import { skill_work } from "../classes/skill-work";

type Props = {
  num : number,
  titles : string[],
  texts : string[],
  pic_paths : string[],
}

const skills = (props : Props) => {
  const works : skill_work[] = []
  for(let i = 0; i < props.num; i++){
    works.push(new skill_work("skill", props.titles[i], props.texts[i], props.pic_paths[i]));
  }

  return(
    <div>
      <Head/>
      <main>

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