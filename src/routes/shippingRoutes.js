import shippingController from '../controllers/shippingController';
import { Router } from "express";
const router = Router();


router.post("/createshipping", shippingController.createShipping);
router.get("/shippings", shippingController.getAllShipping);
router.delete("/shipping/:ShippingId", shippingController.deleteShipping);
router.get("/shipping/:shippingId", shippingController.getAShipment);
router.post("/searchshipping", shippingController.searchPackage);
router.patch("/shipping/:shippingId", shippingController.updateaShipment);

export default router;
