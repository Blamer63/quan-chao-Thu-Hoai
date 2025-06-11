import express from 'express';
import { createOrder, getAllOrders,getOrderById,updateOrderStatus,deleteOrder 
 } from '../controllers/orderController.js';

const router = express.Router();

router.post('/', createOrder);
router.get('/', getAllOrders);              // Admin: View all orders
router.get('/:id', getOrderById);           // Admin: View one order 
router.patch('/:id/status', updateOrderStatus); // Admin: Update status
router.delete('/:id', deleteOrder);             //Admin: delete order

export default router;
