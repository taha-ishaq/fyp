import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  profilepic: {
    type: String,
    default: '',
  },
  role: {
    type: String,
    enum: ['teacher', 'student', 'CR'],
    required: true,
  },
  sessions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Session',
    },
  ], 
});

const User = mongoose.model('User', userSchema);
export default User;
