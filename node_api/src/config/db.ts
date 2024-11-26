import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('DATABASE CONNECTED');
  } catch (error) {
    console.error('ERROR CONNECTING TO DATABASE : ', error);
    process.exit(1);
  }
};

export default connectDB;
