import mongoose from 'mongoose';

const DeliveryFeeSchema = new mongoose.Schema({
  ward: { type: String, required: true, unique: true },
  fee: { type: Number, required: true },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('DeliveryFee', DeliveryFeeSchema);
