import * as mongoose from 'mongoose';

export const branchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  tel: { type: Number, required: true },
});

export interface IBranch {
  uuid: string;
  name: string;
  email: string;
  address: string;
  tel: string;
}

export class BranchResponse {
  private _name: string;
  private _email: string;
  private _address: string;
  private _uuid: string;
  private _tel: string;

  constructor(_branch?: any) {
    this.getBranch(_branch);
  }

  private get name() {
    return this._name;
  }

  private set name(name: string) {
    this._name = name;
  }

  private get email() {
    return this._email;
  }

  private set email(email: string) {
    this._email = email;
  }

  private get address() {
    return this._address;
  }

  private set address(address: string) {
    this._address = address;
  }

  private get uuid() {
    return this._uuid;
  }

  private set uuid(uuid: string) {
    this._uuid = uuid;
  }

  private get tel() {
    return this._tel;
  }

  private set tel(tel: string) {
    this._tel = tel;
  }

  public getBranch(_branch): IBranch {
    this.address = _branch?.address;
    this.name = _branch?.name;
    this.uuid = _branch?._id;
    this.tel = _branch?.tel;
    this.email = _branch?.email;
    return {
      address: this.address,
      name: this.name,
      email: this.email,
      tel: this.tel,
      uuid: this.uuid,
    };
  }
}
