import mongoose, { Document, Schema } from 'mongoose';

interface User extends Document {
  email: string;
  password: string;
  name: string;
  dob: Date;
  phone: string;
  display_pic: string;
  about: string;
}

const userSchema = new Schema<User>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  phone: { type: String, required: true },
  display_pic: { type: String, required: true },
  about: { type: String, required: true },
});

const UserCollection = mongoose.model<User>('user_collection', userSchema);

export default UserCollection;
