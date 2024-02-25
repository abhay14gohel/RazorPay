const mongoose=require("mongoose")

const connectDB=async ()=>{

   const {connection}=await  mongoose.connect(process.env.MONGO_URL,);
   console.log(`database connected: ${connection.host}`);
}

module.exports = { connectDB };