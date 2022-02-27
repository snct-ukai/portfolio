export class About{
  private id : number = 0;
  private aboutMe : string;
  private detail : string;

  constructor(aboutMe : string = "", detail : string = "", id? : number){
    this.aboutMe = aboutMe;
    this.detail = detail;
    this.id = id || this.id;
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