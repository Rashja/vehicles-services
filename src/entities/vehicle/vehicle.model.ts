import * as mongoose from 'mongoose';

export const VehicleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  numberplate: { type: String, required: true },
});

export interface IVehicle  {
  uuid: string;
  name: string;
  numberplate:string;
  color:string;
}

export class VehicleResponse {
  private _name: string;
  private _color: string;
  private _numberplate: string;
  private _uuid: string;

  constructor(_vehicle?:any) {
    this.getVehicle(_vehicle);
  }

  private get name() {
    return this._name;
  }

  private set name(name: string) {
    this._name = name;
  }

  private get numberplate() {
    return this._numberplate;
  }

  private set numberplate(numberplate: string) {
    this._numberplate = numberplate;
  }
  private get color() {
    return this._color;
  }

  private set color(color: string) {
    this._color = color;
  }

  private get uuid() {
    return this._uuid;
  }

  private set uuid(uuid: string) {
    this._uuid = uuid;
  }

  public getVehicle(_vehicle):IVehicle {
    this.numberplate = _vehicle?.numberplate;
    this.name = _vehicle?.name;
    this.color = _vehicle?.color;
    this.uuid = _vehicle?._id;
    return {
      color: this.color,
      name: this.name,
      numberplate: this.numberplate,
      uuid: this.uuid,
    };
  }
}
