import { Router } from "express";
import CardController from "./CardController.js";


const router = new Router();


router.post('/cards', CardController.create);
router.get('/cards', CardController.getAll);
router.get('/cards/:id', CardController.getOne);
router.put('/cards/:id', CardController.update);
router.delete('/cards/:id', CardController.delete);
router.patch('/cards/:id', CardController.update);

export default router;
