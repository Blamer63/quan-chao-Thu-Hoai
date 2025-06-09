import mongoose from 'mongoose';

const AddOnSchema = new mongoose.Schema({
  name: { type: String, required: true },
  extraCost: { type: Number, default: 0 }
});

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  basePrice: { type: Number, required: true },
  image: String,
  available: { type: Boolean, default: true },
  addOns: [AddOnSchema],
  createdAt: { type: Date, default: Date.now }
});

const MenuItem = mongoose.model('MenuItem', MenuItemSchema);
export default MenuItem;
