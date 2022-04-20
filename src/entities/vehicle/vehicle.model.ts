import * as mongoose from 'mongoose';

export const VehicleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  numberplate: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  alternativeDrivers: { type: [String], required: false },
});

export interface IVehicle {
  vehicleId: string;
  name: string;
  numberplate: string;
  color: string;
  owner: string;
  alternativeDrivers?: string[];
}

export class VehicleResponse{
  private _name: string;
  private _color: string;
  private _numberplate: string;
  private _vehicleId: string;
  private _owner: string;
  private _alternativeDrivers: string[];

  constructor(_vehicle?: any) {
    this.getVehicle(_vehicle)
  }

  private get alternativeDrivers() {
    return this._alternativeDrivers;
  }

  private set alternativeDrivers(alternativeDrivers: string[]) {
    this._alternativeDrivers = alternativeDrivers;
  }

  private get name() {
    return this._name;
  }

  private set name(name: string) {
    this._name = name;
  }

  private get owner() {
    return this._owner;
  }

  private set owner(owner: string) {
    this._owner = owner;
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

  private get vehicleId() {
    return this._vehicleId;
  }

  private set vehicleId(vehicleId: string) {
    this._vehicleId = vehicleId;
  }

  public getVehicle(_vehicle){
    this.numberplate = _vehicle?.numberplate;
    this.name = _vehicle?.name;
    this.color = _vehicle?.color;
    this.vehicleId = _vehicle?._id;
    this.owner = _vehicle?.owner;
    this.alternativeDrivers=_vehicle?.alternativeDrivers
    return {
      color: this.color,
      name: this.name,
      numberplate: this.numberplate,
      vehicleId: this.vehicleId,
      owner: this.owner,
      alternativeDrivers:this.alternativeDrivers,
    };
  }
}
