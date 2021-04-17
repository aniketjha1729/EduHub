require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 5000;

const adminUserRoutes = require("./routes/admin/adminUser");
const adminDashboardRoutes = require("./routes/admin/adminDashboard");
const studentUserRoutes = require("./routes/student/studentUser");
const studentDashboardRoutes = require("./routes/student/studentDashboard");
const teacherUserRoutes = require("./routes/teacher/teacherUser");
const teacherDashboardRoutes = require("./routes/teacher/teacherDashboard");

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

app.use("/admin", adminUserRoutes);
app.use("/admin", adminDashboardRoutes);
app.use("/student", studentUserRoutes);
app.use("/student", studentDashboardRoutes);
app.use("/teacher", teacherUserRoutes);
app.use("/teacher", teacherDashboardRoutes);

app.listen(PORT, () => {
  console.log("Server is running on", PORT);
});