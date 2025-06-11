import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  ward: { type: String, required: true },
  items: [
    {
      menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
      quantity: { type: Number, default: 1 },
      notes: String,
      selectedAddOns: [
        {
          name: String,
          extraCost: Number
        }
      ]
    }
  ],
  deliveryFee: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  paymentMethod: {
    type: String,
    enum: ['COD', 'Momo', 'Bank Transfer'],
    required: true
  },
  paymentCompleted: { type: Boolean, default: false },
  status: {
    type: String,
    enum: ['new', 'preparing', 'on-the-way', 'delivered'],
    default: 'new'
  },
  statusHistory: [
    {
      status: String,
      updatedAt: { type: Date, default: Date.now }
    }
  ]
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
