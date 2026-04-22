import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    // La URI vendrá de tu archivo .env (ej: mongodb://localhost:27017/mi_empresa)
    const conn = await mongoose.connect(process.env.MONGO_URI || '');
    console.log(`✅ MongoDB Conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error de conexión: ${error}`);
    process.exit(1);
  }
};

export default connectDB;