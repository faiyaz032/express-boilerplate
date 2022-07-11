import mongoose from 'mongoose';

async function connectDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log('Database connected Successfully!');
  } catch (error) {
    return error;
  }
}

export default connectDatabase;
