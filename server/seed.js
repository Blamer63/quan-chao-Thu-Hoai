import mongoose from 'mongoose';
import dotenv from 'dotenv';
import MenuItem from './models/MenuItem.js';
import DeliveryFee from './models/DeliveryFee.js';

dotenv.config();

await mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// ----- MENU ITEMS -----
const menuItems = [
  {
    name: "Cháo gà",
    basePrice: 20000,
    available: true,
    image: "https://example.com/chao-ga.jpg",
    addOns: [
      { name: "Thêm trứng", extraCost: 5000 },
      { name: "Ít hành", extraCost: 0 },
      { name: "Không tiêu", extraCost: 0 }
    ]
  },
  {
    name: "Cháo thịt bằm",
    basePrice: 22000,
    available: true,
    image: "https://example.com/chao-thit.jpg",
    addOns: [
      { name: "Thêm tiêu", extraCost: 1000 },
      { name: "Ít nước", extraCost: 0 }
    ]
  },
  {
    name: "Cháo trứng bắc thảo",
    basePrice: 25000,
    available: true,
    image: "https://example.com/chao-trung.jpg",
    addOns: [
      { name: "Thêm trứng", extraCost: 5000 },
      { name: "Không hành", extraCost: 0 }
    ]
  }
];

// ----- DELIVERY FEES -----
const deliveryFees = [
  { ward: 'Phương Nam', fee: 8000 },
  { ward: 'Phương Đông', fee: 10000 },
  { ward: 'Yên Thanh', fee: 12000 },
  { ward: 'Nam Khê', fee: 10000 },
  { ward: 'Quang Trung', fee: 8000 },
  { ward: 'Trưng Vương', fee: 10000 },
  { ward: 'Thanh Sơn', fee: 12000 },
  { ward: 'Bắc Sơn', fee: 15000 },
  { ward: 'Vàng Danh', fee: 20000 }
];

// ----- INSERT INTO DATABASE -----
await MenuItem.deleteMany();
await MenuItem.insertMany(menuItems);

await DeliveryFee.deleteMany();
await DeliveryFee.insertMany(deliveryFees);

console.log("Seed data for MenuItems and DeliveryFees inserted successfully!");
process.exit();
