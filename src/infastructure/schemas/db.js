
import mongoose from 'mongoose';
export const connectDB = async () => {
    try {
        const connectingString="mongodb+srv://dewmina93:Bbdc5yZ8hn1j6pFP@cluster0.ubslf.mongodb.net/dev?retryWrites=true&w=majority&appName=Cluster0";
        await mongoose.connect(connectingString);
        console.log("connected to the database")

      }catch (err) {
        console.error(err.message);
        console.log("Error ")
      }
}

