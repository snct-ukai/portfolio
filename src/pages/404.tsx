import { NextPage } from "next";
import DefaultErrorPage from 'next/error';

const NotFound : NextPage = () => {
  return(
    <DefaultErrorPage statusCode={404}/>
  )
}

export default NotFound