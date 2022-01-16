import * as mysql from "mysql2/promise";
import { config } from "../functions/sql-config";

export class myLifeEvent{
  private id : number = 0;
  private year : number;
  private Text : string;

  constructor(year : number = 0, Text : string = "", id? : number){
    this.year = year;
    this.Text = Text;
    this.id = id || this.id;
  }

  public async update(){
    const connection = await mysql.createConnection(config);
    try{
      const sql = "UPDATE my_life_event SET year = ?, Text = ? WHERE id = ?";
      await connection.execute(sql, [this.year, this.Text, this.id]);
      connection.end();
      return true;
    }
    catch(_err){
      connection.end();
      return false;
    }
  }

  public setYear(year : number){
    this.year = year;
  }

  public setText(Text : string){
    this.Text = Text;
  }

  public setId(id : number){
    this.id = id;
  }

  public getId(){
    return this.id;
  }

  public getYear(){
    return this.year;
  }

  public getText(){
    return this.Text;
  }
}