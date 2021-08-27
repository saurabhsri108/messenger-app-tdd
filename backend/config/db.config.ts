import mongoose from 'mongoose';
import chalk from 'chalk';
import dotenv from 'dotenv';

dotenv.config();

let mongodbURI: string;
if (typeof process.env.MONGODB_URI !== 'string') {
  throw new Error('MONGODB_URI is undefined');
} else {
  mongodbURI = process.env.MONGODB_URI;
}

const connectDB = async () => {
  try {

    const conn = await mongoose.connect(mongodbURI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(
        chalk.blue.underline`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(chalk.red.underline`Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;