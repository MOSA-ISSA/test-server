const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const mongooseLink = "mongodb+srv://MOSA:ma741369@miuniverse.uqftmxz.mongodb.net/"
mongoose.connect(mongooseLink);
mongoose.connection.on("connected", () => {
  console.log("mongo connected");
  console.log("MGL server start");
});
//  http://localhost:2999 //


// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

app.get("/app", (req, res) => {
    res.status(200).json({
      message: "yes",
      batata: "5kg",
    });
  }
);//example

const deleteAllUser = async()=>{
  UserModule.deleteMany({})
  .then(() => {
    console.log('All users deleted');
  })
  .catch((error) => {
    console.error('Error deleting users:', error);
  });
}
// deleteAllUser()

app.post("/test", (req, res) => {
  try{
    res.status(200).json(req.body)
    // console.log(req.body);
  }catch(e){
    res.status(500).json({message:e.message})
    console.log(e.message);
  }
})



console.log('wait');
// app.use("/");

module.exports=app;