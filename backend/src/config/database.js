import mongoose from "mongoose";
import dns from "node:dns";

dns.setServers(["192.168.168.108"]);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)

        console.log('MongoDB connecté')
    } catch (error) {
        console.error('Erreur MongoDB :', error)
        process.exit(1)
    }
}

export default connectDB