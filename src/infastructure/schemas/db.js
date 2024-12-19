
import mongoose from 'mongoose';
export const connectDB = async () => {
    try {
        const connectingString=process.env.MONGODB_URI;
        await mongoose.connect(connectingString);
        console.log("connected to the database")
        
      }catch (err) {
        console.error(err.message);
        console.log("Error ")
      }
}