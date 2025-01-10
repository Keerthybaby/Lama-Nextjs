import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
  try {
    if(connection.isConnected){
       console.log("Using existing connection");
          return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

// "use server";
// import mongoose from "mongoose";

// const connection = {};

// export const connectToDb = async () => {
//   try{
//     if(connection.isConnected){
//       console.log("Using existing connection");
//       return;
//     }

//     const db=await mongoose.connect(process.env.MONGO);
//     connection.isConnected = db.connections[0].readyState;

//   }catch(error){
//     console.log(error);
//     throw new Error(error);
//   }
// }

// 'use server';
// import mongoose from 'mongoose';

// console.log("process.env.MONGO=",process.env.MONGO)

// const connectToDB = async () => {
//     try {
//       if (mongoose.connection.readyState === 0) {
//         await mongoose.connect(process.env.MONGO);
//         console.log('DB Connected....');
//       }
//     } catch (error) {
//       console.error('Error connecting to MongoDB:', error.message);
//       throw new Error('Error in MongoDB connection');
//     }
//   };

//   const disconnectFromDB = async () => {
//     try {
//       await mongoose.disconnect();
//       console.log('DB Disconnected....');
//     } catch (error) {
//       console.error('Error disconnecting from MongoDB:', error.message);
//       throw new Error('Error disconnecting from MongoDB');
//     }
//   };

//   export { connectToDB, disconnectFromDB };

// import mongoose from "mongoose";

// const connectToDB = async () => {
//   try {
//     if (mongoose.connection.readyState === 0) {
//       await mongoose.connect(process.env.MONGO, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       console.log("Database connected...");
//     }
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error.message);
//     throw new Error("MongoDB connection failed");
//   }
// };

// export { connectToDB };
