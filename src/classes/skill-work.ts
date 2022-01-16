import * as mysql from "mysql2/promise";
import { config } from "../functions/sql-config";
import { mode } from "../functions/functions";

export class skill_work{
  private mode : mode;
  private id : number = 0;
  private title : string;
  private Text : string;
  private pic_path : string;

  constructor(mode : mode, title : string = "", Text : string = "", pic_path : string = "", id? : number){
    this.mode = mode;
    this.title = title;
    this.Text = Text;
    this.pic_path = pic_path;
    this.id = id || this.id;
  }

  public async update(){
    const connection = await mysql.createConnection(config);
    try{
      const sql = "UPDATE ? SET title = ?, Text = ?, picture_path = ? WHERE id = ?";
      await connection.execute(sql, [this.mode, this.title, this.Text, this.pic_path]);
      connection.end();
      return true;
    }
    catch(_err){
      connection.end()
      return false;
    }
  }

  public setTitle(title : string){
    this.title = title;
  }

  public setText(Text : string){
    this.Text = Text;
  }

  public setId(id : number){
    this.id = id;
  }

  public setPic_paht(pic_path : string){
    this.pic_path = pic_path;
  }

  public getId(){
    return this.id;
  }

  public getTitle(){
    return this.title;
  }

  public getText(){
    return this.Text;
  }

  public getPic_path(){
    return this.pic_path;
  }
}