import * as mongoose from 'mongoose';

export const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: [String], required: true },
  price: { type: String, required: true },
  branchUuid: { type: mongoose.Schema.Types.ObjectId, required: true },
});

export enum Types {
  WASHING = 'WASHING',
  REPAIR = 'REPAIR',
  PAINTING = 'PAINTING',
}

export interface IService {
  uuid: string;
  title: string;
  price: string;
  type: string;
  branchUuid: string;
}

export class ServiceResponse {
  private _title: string;
  private _price: string;
  private _type: string;
  private _branchUuid: string;
  private _uuid: string;

  constructor(_service?: any) {
    this.getService(_service);
  }

  private get title() {
    return this._title;
  }

  private set title(title: string) {
    this._title = title;
  }

  private get price() {
    return this._price;
  }

  private set price(price: string) {
    this._price = price;
  }

  private get type() {
    return this._type;
  }

  private set type(type: string) {
    this._type = type;
  }

  private get uuid() {
    return this._uuid;
  }

  private set uuid(uuid: string) {
    this._uuid = uuid;
  }

  private get branchUuid() {
    return this._branchUuid;
  }

  private set branchUuid(branchUuid: string) {
    this._branchUuid = branchUuid;
  }

  public getService(_service): IService {
    this.title = _service?.address;
    this.type = _service?.type;
    this.uuid = _service?._id;
    this.branchUuid = _service?.branchUuid;
    this.price = _service?.price;
    return {
      title: this.title,
      type: this.type,
      branchUuid: this.branchUuid,
      price: this.price,
      uuid: this.uuid,
    };
  }
}
