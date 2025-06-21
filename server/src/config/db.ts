import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || '';
    console.log( mongoUri, 'mongoUri' );

    await mongoose.connect( mongoUri );
    console.log( 'Connected to DB:', mongoose.connection.name );
    console.log( '✅ MongoDB connected' );
  } catch ( err ) {
    console.error( '❌ MongoDB connection failed:', err );
    process.exit( 1 );
  }
};