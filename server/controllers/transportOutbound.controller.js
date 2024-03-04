export const getTransport = async (req, res) => {
    try {
        const transports = await TransportOutbound.find().populate('createdBy');
        if (!transports) {
            return res.status(404).send({ message: 'Transport not found' });
        }

        const updatedTransports = transports.map(transport => {
            if (transport.date) {
                transport.date = transport.date.toLocaleDateString('pl-PL', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric'
                });
            }
            return transport;
        });

        res.status(200).json(updatedTransports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createTransport = async (req, res) => {
    const transport = req.body;
    const newTransport = new TransportOutbound(transport);
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
        const transport = await TransportOutbound.findById(id).populate('createdBy');
        res.status(200).json(transport);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateTransport = async (req, res) => {
    const { id } = req.params;
    const transport = req.body;
    try {
        const updatedTransport = await TransportOutbound.findByIdAndUpdate(id, transport, { new: true }).populate('createdBy');
        res.status(200).json(updatedTransport);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteTransport = async (req, res) => {
    const { id } = req.params;
    try {
        await TransportOutbound.findByIdAndDelete(id);
        res.status(200).json({ message: 'Carrier deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}