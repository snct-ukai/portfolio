import * as mysql from "mysql2/promise";
import { config } from "../functions/sql-config";

export class mainPage{
  private id : number = 0;
  private JPname : string;
  private ENname : string;
  private Text : string;

  constructor(JPname : string = "", ENname : string = "", Text : string = "", id? : number){
    this.JPname = JPname;
    this.ENname = ENname;
    this.Text = Text;
    this.id = id || this.id;
  }

  public async update(){
    const connection = await mysql.createConnection(config);
    try{
      const sql = "UPDATE mainPage SET JPname = ?, enNAME = ?, Text = ? WHERE id = ?";
      await connection.execute(sql, [this.JPname, this.ENname, this.Text, this.id]);
      connection.end();
      return true;
    }
    catch(_err){
      return false;
    }
  }

  public getId(){
    return this.id;
  }

  public getJPname(){
    return this.JPname;
  }

  public getENname(){
    return this.ENname;
  }

  public getText(){
    return this.Text;
  }
}