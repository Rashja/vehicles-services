import * as mongoose from 'mongoose';

export const alternativeDriverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastname:String,
  license: { type: String, required: true },
  age: { type: Number, required: true },
});

export interface IAlternativeDriver {
  uuid: string;
  lastname:string;
  name: string;
  age:number;
  license: string;
}

export class AlternativeDriverResponse {
  private _name: string;
  private _lastname: string;
  private _age: number;
  private _uuid: string;
  private _license:string;

  constructor(_alternativeDriver?:any) {
    this.getAlternativeDriver(_alternativeDriver);
  }

  private get name() {
    return this._name;
  }

  private set name(name: string) {
    this._name = name;
  }

  private get lastname() {
    return this._lastname;
  }

  private set lastname(lastname: string) {
    this._lastname = lastname;
  }
  private get age() {
    return this._age;
  }

  private set age(age: number) {
    this._age = age;
  }

  private get uuid() {
    return this._uuid;
  }

  private set uuid(uuid: string) {
    this._uuid = uuid;
  }

   private get license() {
    return this._license;
  }

  private set license(license: string) {
    this._license = license;
  }


  public getAlternativeDriver(_alternativeDriver):IAlternativeDriver {
    this.license = _alternativeDriver?.license;
    this.name = _alternativeDriver?.name;
    this.lastname = _alternativeDriver?.lastname;
    this.uuid = _alternativeDriver?._id;
    this.age = _alternativeDriver?._age;
    return {
      license: this.license,
      name: this.name,
      lastname:this.lastname,
      age: this.age,
      uuid: this.uuid,
    };
  }
}
