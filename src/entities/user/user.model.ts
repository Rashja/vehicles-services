import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export interface IUser extends mongoose.Document {
  email: string;
  id: string;
  name: string;
  password: string;
}
