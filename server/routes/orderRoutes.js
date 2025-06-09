import express from 'express';
import { createOrder, getAllOrders } from '../controllers/orderController.js';

const router = express.Router();

router.post('/', createOrder);
router.get('/', getAllOrders); // Optional for admin view

export default router;
