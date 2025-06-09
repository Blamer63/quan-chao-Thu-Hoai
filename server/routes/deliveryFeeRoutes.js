import express from 'express';
import { getAllFees, updateFee } from '../controllers/deliveryFeeController.js';

const router = express.Router();

router.get('/', getAllFees);
router.put('/:ward', updateFee); // Update by ward name (string)

export default router;
