import { NextPage } from "next";
import DefaultErrorPage from 'next/error';

const blog : NextPage = () => {
  return(
    <DefaultErrorPage statusCode={404}/>
  )
}

export default blog;