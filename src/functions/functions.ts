import { config } from "./sql-config";
import { mainPage } from "../classes/mainPage";
import { myLifeEvent } from "../classes/lifeEvent";
import { skill_work } from "../classes/skill-work";
import { About } from "../classes/about";
import * as mysql from "mysql2/promise";
import fs from "fs"

export async function getMainPage(){
  const connection = await mysql.createConnection(config);
  const sql = "SELECT * FROM mainPage";
  const [rows, _fields] = await connection.execute(sql);
  connection.end();

  if((rows as any)[0]){
    const data = (rows as any)[0]
    const JPname : string = data["JPname"];
    const ENname : string = data["ENname"];
    const path : string = data["path"];
    const id : number = data["id"];
    try{
      const Text = fs.readFileSync(`./public/data/main/${path}`, 'utf8');

      return new mainPage(JPname, ENname, Text, id);
    }
    catch(err){
      console.log(err);
    }
  }
  return;
}

export async function getEvents(){
  const connection = await mysql.createConnection(config);
  const sql = "SELECT * FROM my_life_event";
  const [rows, _fields] = await connection.execute(sql);
  connection.end();

  const events : myLifeEvent[] = [];
  let i = 0;
  while((rows as any)[i]){
    const row = (rows as any)[i];
    events.push(new myLifeEvent(row["year"], row["Text"], row["id"]));
    i++;
  }
  return events;
}

export async function getSkills(){
  const connection = await mysql.createConnection(config);
  const sql = "SELECT * FROM skills";
  const [rows, _fields] = await connection.execute(sql);
  connection.end();

  const skills : skill_work[] = [];
  let i = 0;
  while((rows as any)[i]){
    const row = (rows as any)[i];
    skills.push(new skill_work("skill", row["title"], row["Text"], row["picture_path"], row["id"]));
    i++
  }
  return skills;
}

export async function getWorks(){
  const connection = await mysql.createConnection(config);
  const sql = "SELECT * FROM skills";
  const [rows, _fields] = await connection.execute(sql);
  connection.end();

  const skills : skill_work[] = [];
  let i = 0;
  while((rows as any)[i]){
    const row = (rows as any)[i];
    skills.push(new skill_work("work", row["title"], row["Text"], row["picture_path"], row["id"]));
    i++;
  }
  return skills;
}

export async function getAbout(){
  const connection = await mysql.createConnection(config);
  const sql = "SELECT * FROM aboutPage";
  const [rows, _fields] = await connection.execute(sql);
  connection.end();
  
  if((rows as any)[0]){
    const data = (rows as any)[0];
    const aboutMepath : string = data["aboutMe"];
    const detailPath : string = data["detail"];
    console.log(data);
    console.log(`aboutMe:${aboutMepath}\ndetailPath:${detailPath}`)

    try{
      const aboutMe = fs.readFileSync(`./public/data/about/${aboutMepath}`, 'utf8');
      const detail = fs.readFileSync(`./public/data/about/${detailPath}`, 'utf8');
      return new About(aboutMe, detail, data["id"]);
    }
    catch(err){
      console.log(err);
    }

  }
  return;
}

export type mode = "skill" | "work"