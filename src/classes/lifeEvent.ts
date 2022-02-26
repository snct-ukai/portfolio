export class myLifeEvent{
  private id : number = 0;
  private year : number;
  private Text : string;

  constructor(year : number = 0, Text : string = "", id? : number){
    this.year = year;
    this.Text = Text;
    this.id = id || this.id;
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