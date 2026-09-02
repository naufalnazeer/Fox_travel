import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tour.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/bookings.js";

const app = express();
const port = process.env.PORT || 4000;

const corsOptions = {
  origin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
  credentials: true,
};

// MongoDB connection (falls back to local Compass/localhost for dev)
const mongoURL = process.env.MONGO_URI || "mongodb://localhost:27017/tour-booking";

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.log("MongoDB connection failed", err.message);
  });

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("MongoDB connection failed");
});

connection.once("open", () => {
  console.log("MongoDB connection successful (localhost)");
});

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
