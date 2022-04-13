import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export interface IUser  {
  email: string;
  uuid: string;
  name: string;
  password: string;
}

export class UserResponse {
  private _name: string;
  private _email: string;
  private _password: string;
  private _uuid: string;

  constructor(_user?:any) {
    this.getUser(_user);
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
  private get password() {
    return this._password;
  }

  private set password(password: string) {
    this._password = password;
  }

  private get uuid() {
    return this._uuid;
  }

  private set uuid(uuid: string) {
    this._uuid = uuid;
  }

  public getUser(_user):IUser {
    this.email = _user?.email;
    this.name = _user?.name;
    this.password = _user?.password;
    this.uuid = _user?._id;
    return {
      email: this.email,
      name: this.name,
      password: this.password,
      uuid: this.uuid,
    };
  }
}
