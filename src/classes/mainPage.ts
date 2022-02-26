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