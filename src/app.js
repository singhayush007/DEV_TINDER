const express = require("express");
const app = express();

app.use((req, res) => {
  res.send("Welcome to Dev Tinder Application");
});

app.use("/hello", (req, res)=>{
  res.send("Hello from dev tinder")
})

app.use("/test" , (req, res)=>{
  res.send("This is a test route");
})
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
