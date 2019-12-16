import { Router } from "express";
import adminController from "../controllers/adminController";
import auth from "../middlewares/auth";
const router = Router();

router.post("/admin", adminController.createAdmin);
router.post("/login", adminController.loginAdmin);
router.get("/admin", adminController.getAllAdmin);
router.get("/currentadmin", adminController.current);
router.delete("/admin/:userId" , adminController.deleteAdmin);
router.patch("/admin/changepassword/:userId" , adminController.changeUserPassword);
router.post("/logout", adminController.LogoutAdmin);

export default router;
