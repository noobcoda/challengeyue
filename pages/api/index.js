//import {server} from "../config";
//1:01:59 https://www.youtube.com/watch?v=mTz0GXj8NN0

//can make database calls here
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("DB connection successful!"))
.catch((err) => console.log(err));

