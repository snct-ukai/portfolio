import { NextPage } from "next";
import DefaultErrorPage from 'next/error';

const about : NextPage = () => {
  return(
    <DefaultErrorPage statusCode={404}/>
  )
}

export default about;