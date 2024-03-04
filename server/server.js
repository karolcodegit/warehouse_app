import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToDatabase } from "./config/db.js";
import setupRoutes from "./routes/index.js";
import companyInfoRoutes from "./routes/companyinfo.routes.js";
import carrierRouter from "./routes/Transport/carrier.routes.js";
import transportOutbound from "./routes/Transport/transportOutbound.routes.js";
import transportInbound from "./routes/Transport/transportInbound.routes.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

import deviceRoutes from "./routes/Reports/device.routes.js";
import issueRoutes from "./routes/Reports/issue.routes.js";

dotenv.config();

const app = express();

let corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server" });
});

app.use("/api/company-info", companyInfoRoutes);
app.use("/api/carriers", carrierRouter);

app.use("/api/transport/inbound", transportInbound);
app.use("/api/transport/outbound", transportOutbound);

app.use("/api/reports/devices", deviceRoutes);
app.use("/api/reports/issues", issueRoutes);

authRoutes(app);
userRoutes(app);

connectToDatabase();


// initialRole()
// createAdminUser()

setupRoutes(app);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});



app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});