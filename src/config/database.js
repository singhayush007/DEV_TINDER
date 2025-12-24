const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://ayushfullstack_db_user:Ayushsingh%40123@cluster0.tqiqhsk.mongodb.net/devTinder"
  );
};


module.exports = connectDB;
