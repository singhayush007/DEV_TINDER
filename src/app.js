// const express = require("express");
// const app = express();
// const {adminAuth} = require ("./middlewares/auth.js");

// app.use((req, res) => {
//   res.send("Welcome to Dev Tinder Application");
// });

// app.use("/", (req, res) => {
//   res.send("This is the root route");
// });

// app.use((req, res) => {
//   res.send("Welcome to Dev Tinder Application");
// });

// app.use("/hello/2", (req, res) => {
//   res.send("Hello again from dev tinder");
// });

// app.use("/hello", (req, res) => {
//   res.send("Hello from dev tinder");
// });

// app.use("/hello/2", (req, res) => {
//   res.send("Hello again from dev tinder");
// });

// app.use("/test", (req, res) => {
//   res.send("This is a test route");
// });

// app.use will match all HTTP methods (GET, POST, PUT, DELETE, etc.)

// app.get("/user", (req, res) => {
//   res.send("This is the user route");
// });

// app.post("/user", (req, res) => {
//   res.send("This is the user route for POST method");
// });

// app.get("/abc" , (req, res) => {
//   res.send("This is the abc route");
// });

// app.get("/ab?c" , (req, res) => {
//   res.send("This is the ab?c route");
// });

// app.get("/ab+c" , (req, res) => {
//   res.send("This is the ab+c route");
// });

// app.get("/ab*c" , (req, res) => {
//   res.send("This is the ab*c route");
// });

// app.get(/.*fly$/, (req, res)=>{
//   res.send({
//     name : "Ayush Singh",
//     age : 22,
//     profession : "Developer"
//   });
// })

// app.get("/user/:userId/:name/:password", (req, res) => {
//   res.send({
//     params: req.params,
//     firstName: "Ayush",
//     lastName: "Singh"
//   });
// });

// Middleware

// app.get("/user", (req, res) => {
//   console.log("Handing the route 1!");
//   res.send("Response 1");
// }),
//   (req, res) => {
//     console.log("Handling the route 2!");
//     res.send("Response 2");
//   };

// app.get("/user", (req , res , next)=>{
//   console.log("Handing the route 1!");
//   res.send("Response 1");
//   next();
// }),
// (req,res)=>{
//   console.log("Hanlding the route 2!")
//   res.send("Response 2")
// }

// app.get(
//   "/user",
//   (req, res, next) => {
//     console.log("Handling the route 1!");
//     next();
//   },
//   (req, res) => {
//     console.log("Handling the route 2!");
//     res.send("Response 2!");
//   }
// );

// app.get("/user" , (req, res , next)=>{
//   console.log("Hanlding the route 1!");
//   next();
// },
// (req, res, next)=>{
//   console.log("Handling the route 2!")
//   next();
// });

// Adding Multiple routes in an array

// app.get(
//   "/user",
//   (req, res, next) => {
//     console.log("Handling the route user 1!");
//     next();
//   },
//   (req, res, next) => {
//     console.log("Handling the route user 2!");
//     // res.send("2nd Response");
//     next();
//   },
//   [
//     (req, res, next) => {
//       console.log("Handling the route user 3!");
//       // res.send("3rd Response");
//       next();
//     },
//     (req, res, next)=>{
//       console.log("Handling the route user 4!");
//       // res.send("4th Response");
//       next();
//     },
//     (req, res, next)=>{
//       console.log("Handling the route user 5!");
//       res.send("5th Response")
//       // next();
//     }
//   ]
// );

// AUTHENTICATION WITHOUT MIDDLEWARE

// app.get("/admin/getAllData", (req, res) => {
//   // Logic of chekcing if the request is authorized

//   const token = "abc";
//   const isAdminAuthorized = token === "xyz";
//   if (isAdminAuthorized) {
//     res.send("All data Sent");
//   } else {
//     res.status(401).send("Unathorized Request");
//   }
// });

// app.get("admin.deleteUser", (req, res) => {
//   // Logic of chekcing if the request is authorised
//   console.log("Admin Auth is getting checked !!")
//   const token = "abc";
//   const isAdminAuthorized = token === "xyz";
//   if (!isAdminAuthorized) {
//     res.send("Deleted a user");
//   } else {
//     res.status(401).send("Unathorized request");
//   }
// });

// HANDLING AUTHENTICATION  MIDDLEWARE FOR ALL HTTP REQUESTS

// app.get("/admin", (req, res, next)=>{
//   console.log("ADMIN AUTH IS GETTING CHECKED")
//   const token = "xyz";
//   const isAdminAuthorized = token === "xyz";
//   if(!isAdminAuthorized) {
//     res.status(401).send("Unauthorized request");
//   } else {
//     next();
//   }
// });

// app.get("/admin/getAllData" , (req , res)=>{
//   res.send("ALL DATA SEND")
// });

// app.get("/admin/deleteUser" , (req, res)=>{
//   res.send("DELETED A USER");
// });

// app.use("/admin" , adminAuth);
// app.post("/user/login", (req, res)=>{
//   res.send("User logged in successfully!");
// });

// app.listen(3000, () => {
//   console.log("server is running on port 3000");
// });

// ERROR HANDLER

// 1: BAD WAY

// const express = require("express");
// const app = express();

// app.get("/getUserData", (req, res) => {
//   // Logic of DB Call and get User Data

//   throw new Error("Error is there");
//   res.send("User Data Sent");
// });

// app.listen(3000, () => {
//   console.log("server is running on port 3000");
// });

// 2: GOOD WAY
// const express = require("express");
// const app = express();

// app.get("/getUserData", (req, res)=>{
//   // Logic of DB call and get User Data
//   throw new Error("User Data Sent");
// });

// app.use("/", (err, req, res , next)=>{
//   if(err){
//     res.status(500).send("Something went wrong")
//   }
// });

// app.listen(3000, () => {
//   console.log("server is running on port 3000");
// });

// 3: TRY AND CATCH BLOCK

// const express = require ("express");
// const app = express();

// app.use("/" , (err, req, res, next)=>{
//    if(err){
//       res.status(500).send("Something went wrong")
//    }
// });

// app.get("/getUserData", (req, res)=>{
//    throw new Error("Error");
//       res.send("User Data Sent");
// });

// app.listen(3000 , ()=>{
//    console.log("Server is Runnig on PORT 3000")
// })

// LOAD ENV VARIABLES (must be at the top)
require("dotenv").config();

// DATABASE CONNECTION
const express = require("express");
const connectDB = require("./config/database.js");
const app = express();
const User = require("./models/user");
const user = require("./models/user");

app.use(express.json());

// app.post("/signup", async (req, res) => {
//   try {
//     const user = new User(req.body);
//     await user.save();
//     res.status(201).send("User Added Successfully");
//   } catch (err) {
//     res.status(400).send("Error saving the user: " + err.message);
//   }
// });

// Get user by Email:

// app.get("/user", async (req, res) => {
//   const userEmail = req.body.emailId;

//   try {
//     const user = await User.find({ emailId: userEmail });
//     if (user.length === 0) {
//       return res.status(400).send("User not found");
//     } else {
//       return res.status(200).send(user);
//     }
//   } catch (err) {
//     res.status(500).send("Something went wrong");
//   }
// });

// FEED API - GET /feed -get all the users from the database
// app.get("/feed", async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.send(users);
//   } catch (err) {
//     res.status(500).send("Something went wrong");
//   }
// });

// Get user by findone

// app.get("/user/findOne", async (req, res) => {
//   try {
//     const users = await User.findOne({ emailId: req.body.emailId });
//     if (!users) {
//       return res.status(500).send("User not found");
//     }
//     res.send(users);
//     res.send(users);
//   } catch (err) {
//     res.status(500).send("Something went wrong");
//   }
// });

// Get users by Id

// app.get("/user/:id", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);

//     if (!user) {
//       return res.status(404).send("User not found");
//     }

//     res.status(200).json(user);
//   } catch (error) {
//     res.status(400).send("Invalid user id");
//   }
// });

// DELETE USER BY ID
// app.delete("/user", async (req, res) => {
//   const userId = req.body.userId;
//   try{
// const user = await User.findByIdAndDelete({ _id: userId });
//      const user = await User.findByIdAndDelete(userId);
//     res.send("User Deleted Successfully");
//   } catch (err){
//     res.status(500).send("Soemthing went wrong");
//   }
// });

// Update data from the user: Option 1 

// app.patch("/user/:id", async (req, res) => {
//   const userId = req.params.id;
//   const data = req.body;
//   try {
//     const user = await User.findByIdAndUpdate({ _id: userId }, data, {
//       returnDocument: "after",
//     });
//     console.log(user);
//     res.send(user);
//   } catch (err) {
//     res.status(500).send("Something went wrong");
//   }
// });

// Update data from the user: Option 2 


app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
    });
    console.log(user);
    res.send(user);
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
});
connectDB()
  .then(() => {
    console.log("DataBase Connection Established...");
    app.listen(3000, () => {
      console.log("Server is listening on PORT 3000...");
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err.message);
  });
