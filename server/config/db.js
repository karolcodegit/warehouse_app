import mongoose from 'mongoose';

async function connectToDatabase() {
  try {
    await mongoose.connect(`${process.env.MONGO_APP}`);
    console.log('Database connected successfully');
  } catch (err) {
    console.error(`Error connecting to database: ${err}`);
  }
}

export { connectToDatabase };