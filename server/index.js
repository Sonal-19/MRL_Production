const dotenv = require("dotenv");
const express = require("express");
const emailRoutes = require("./Routes/emailRoutes");

const app = express();
dotenv.config();

const cors = require("cors");

const corsOptions = {
  origin: "*",
  //methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true, 
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json()); 
app.use("/email", emailRoutes);

app.get("/",(req, res)=>{
  res.send("hello world")
})

// const PORT = process.env.PORT;
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Manufactuing Research Laboratory Server is running at port ${PORT}`);
});