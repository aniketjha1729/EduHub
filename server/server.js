require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 5000;

const adminUserRoutes = require("./routes/admin/adminUser");
const adminDashboardRoutes = require("./routes/admin/adminDashboard");
const userRoutes = require("./routes/user/user");
const userDashboardRoutes = require("./routes/user/userDashboard");


const app = express();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Db Connected");
  });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/admin", adminUserRoutes,adminDashboardRoutes);
app.use("/user", userRoutes,userDashboardRoutes);

app.listen(PORT, () => {
  console.log("Server is running on", PORT);
});