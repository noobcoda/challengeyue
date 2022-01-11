//import {server} from "../config";
//1:01:59 https://www.youtube.com/watch?v=mTz0GXj8NN0

//can make database calls here
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

export const connectToDatabase = async() => {
    return mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("New Database connection");
    })
    .catch((err) => console.log(err));
}