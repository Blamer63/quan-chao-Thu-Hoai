import DeliveryFee from '../models/DeliveryFee.js';

export const getAllFees = async (req, res) => {
  try {
    const fees = await DeliveryFee.find();
    res.json(fees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE fee by ward name
export const updateFee = async (req, res) => {
  try {
    const { ward } = req.params;
    const { fee } = req.body;

    const updated = await DeliveryFee.findOneAndUpdate(
      { ward },
      { fee },
      { new: true }
    );

    if (!updated) return res.status(404).json({ error: 'Ward not found' });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
