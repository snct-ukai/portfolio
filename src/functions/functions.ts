import { config } from "./sql-config";
import { mainPage } from "../classes/mainPage";
import { myLifeEvent } from "../classes/lifeEvent";
import { skill_work } from "../classes/skill-work";
import { About } from "../classes/about";
import * as mysql from "mysql2/promise";

export async function getMainPage(){
  const connection = await mysql.createConnection(config);
  const sql = "SELECT * FROM mainPage";
  const [rows, _fields] = await connection.execute(sql);
  connection.end();
  if((rows as any)[0]){
    const data = (rows as any)[0]
    const JPname : string = data["JPname"];
    const ENname : string = data["ENname"];
    const Text : string = data["Text"];
    const id : number = data["id"];
    return new mainPage(JPname, ENname, Text, id);
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
  }
  return skills;
}

export async function getAbout(){
  const connection = await mysql.createConnection(config);
  const sql = "SELECT * FROM aboutPage";
  const [rows, _fields] = await connection.execute(sql);
  connection.end();
  if((rows as any)[0]){
    const data = rows as any;
    return new About(data["aboutMe"], data["detail"], data["id"]);
  }
  return;
}

export type mode = "skill" | "work"