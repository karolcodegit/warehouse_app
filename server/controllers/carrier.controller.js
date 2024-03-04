// controllers/carriers.js
import Carrier from '../models/carrier.model.js';

export const getCarriers = async (req, res) => {
    try {
        const carriers = await Carrier.find();
        res.status(200).json(carriers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createCarrier = async (req, res) => {
    const carrier = req.body;
    const newCarrier = new Carrier(carrier);
    try {
        await newCarrier.save();
        res.status(201).json(newCarrier);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getCarrier = async (req, res) => {
    const { id } = req.params;
    try {
        const carrier = await Carrier.findById(id);
        res.status(200).json(carrier);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateCarrier = async (req, res) => {
    const { id } = req.params;
    const carrier = req.body;
    try {
        const updatedCarrier = await Carrier.findByIdAndUpdate

        (id, carrier, { new: true });
        res.status(200).json(updatedCarrier);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteCarrier = async (req, res) => {
    const { id } = req.params;
    try {
        await Carrier.findByIdAndDelete(id);
        res.status(200).json({ message: 'Carrier deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}