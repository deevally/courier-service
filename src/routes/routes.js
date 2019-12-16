import { Router } from "express";
import shippingRoute from './shippingRoutes';
import adminRoute from './adminRoutes';

const app = Router();

app.get("/", (req, res) => {
  res.send("Welcome to the courier service portal");
});


app.use("/", shippingRoute);
app.use("/", adminRoute);


export default app;
