import express from 'express';
import { getMenuItems, createMenuItem, toggleAvailability,updateMenuItem,deleteMenuItem } from '../controllers/menuItemController.js';

const router = express.Router();

router.get('/', getMenuItems);
router.post('/', createMenuItem);
router.patch('/:id/availability', toggleAvailability);
router.put('/:id', updateMenuItem);      
router.delete('/:id', deleteMenuItem); 

export default router;
