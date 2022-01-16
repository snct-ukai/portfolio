import { NextPage } from "next";
import DefaultErrorPage from 'next/error';

const skills : NextPage = () => {
  return(
    <DefaultErrorPage statusCode={404}/>
  )
}

export default skills;