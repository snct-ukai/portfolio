import * as mysql from "mysql2/promise";
import { config } from "../functions/sql-config";

export class About{
  private id : number = 0;
  private aboutMe : string;
  private detail : string;

  constructor(aboutMe : string = "", detail : string = "", id? : number){
    this.aboutMe = aboutMe;
    this.detail = detail;
    this.id = id || this.id;
  }

  public async update(){
    const connection = await mysql.createConnection(config);
    try{
      const sql = "UPDATE aboutPage SET aboutMe = ?, detail = ?, WHERE id = ?";
      await connection.execute(sql,[this.aboutMe, this.detail, this.id]);
      connection.end();
      return true;
    }
    catch{
      connection.end();
      return false;
    }
  }

  public setAboutMe(aboutMe : string){
    this.aboutMe = aboutMe;
  }

  public setDetail(detail : string){
    this.detail = detail;
  }

  public setId(id : number){
    this.id = id;
  }

  public getId(){
    return this.id;
  }

  public getAboutMe(){
    return this.aboutMe;
  }

  public getDetail(){
    return this.detail;
  }
}