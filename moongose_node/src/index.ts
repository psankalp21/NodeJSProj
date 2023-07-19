import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import UserCollection from './database/models/user';
import ProfileConfigCollection from './database/models/profile_config';
import FollowCollection from './database/models/follow';
import PostCollection from './database/models/post';
// import SavedPostCollection from './database/models/savedpost';
import ActionCollection from './database/models/action';

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/instagram', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}as ConnectOptions);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  UserCollection;
  ProfileConfigCollection;
  FollowCollection;
  PostCollection;
//   SavedPostCollection;
  ActionCollection;
});
