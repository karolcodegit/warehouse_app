import transportInbound from '../models/transportInbound.model.js';

export const getTransport = async (req, res) => {
    try {
        const transport = await transportInbound.find();
        res.status(200).json(transport);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTransport = async (req, res) => {
    const transport = req.body;
    const newTransport = new transportInbound(transport);
    try {
        await newTransport.save();
        res.status(201).json(newTransport);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getTransportId = async (req, res) => {
    const { id } = req.params;
    try {
        const transport = await transportInbound.findById(id);
        res.status(200).json(transport);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateTransport = async (req, res) => {
    const { id } = req.params;
    const transport = req.body;
    try {
        const updatedTransport = await transportInbound.findByIdAndUpdate

        (id, transport, { new: true });
        res.status(200).json(updatedTransport);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteTransport = async (req, res) => {
    const { id } = req.params;
    try {
        await transportInbound.findByIdAndDelete(id);
        res.status(200).json({ message: 'Carrier deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}