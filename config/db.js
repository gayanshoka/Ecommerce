import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
   try {
      const conn = await mongoose.connect(process.env.MONGO_URL)
      console.log(`Connect To MongoDB Database ${conn.connection.host}`.bgMagenta.white)
   } catch (error) {
     console.log(`Erro in Mongo DB ${error}`.bgRed.white)
   }
};

export default connectDB;