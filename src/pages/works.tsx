import { NextPage } from "next";
import DefaultErrorPage from 'next/error';

const works : NextPage = () => {
  return(
    <DefaultErrorPage statusCode={404}/>
  )
}

export default works;