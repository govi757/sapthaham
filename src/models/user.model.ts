import { Schema, model, connect, ObjectId } from 'mongoose';
import { IAddress } from '../data';

export interface IUser {
    userName: string,
    address?: IAddress,
    email?: string,
    phone?: string,
    role: string,
    password: string
}


const userSchema = new Schema<IUser>({
    userName: { type: String, required: true, unique: true },
    address: { type: Object },
    email: { type: String },
    phone: { type: String },
    role:{ type: String ,required: true },
    password: { type: String }
  });

  

  const User = model<IUser>('User', userSchema);

  export default User;
