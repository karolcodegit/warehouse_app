import Device from '../../models/Reports/device.model.js';

// Operacja tworzenia urządzenia
export const createDevice = async (req, res) => {
  try {
    const { name, area, type, workstation, status } = req.body;
    const newDevice = await Device.create({ name, area, type, workstation, status });
    res.status(201).json(newDevice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Wystąpił błąd podczas tworzenia urządzenia" });
  }
};

// Operacja pobierania wszystkich urządzeń
export const getAllDevices = async (req, res) => {
  try {
    const devices = await Device.find();
    res.status(200).json(devices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Wystąpił błąd podczas pobierania urządzeń" });
  }
};

// Operacja pobierania pojedynczego urządzenia
export const getDeviceById = async (req, res) => {
  const { id } = req.params;
  try {
    const device = await Device.findById(id);
    if (!device) {
      return res.status(404).json({ message: "Urządzenie nie zostało znalezione" });
    }
    res.status(200).json(device);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Wystąpił błąd podczas pobierania urządzenia" });
  }
};

// Operacja aktualizacji urządzenia
export const updateDevice = async (req, res) => {
  const { id } = req.params;
  const { name, area, type, workstation, status } = req.body;
  try {
    const updatedDevice = await Device.findByIdAndUpdate(id, { name, area, type, workstation, status }, { new: true });
    if (!updatedDevice) {
      return res.status(404).json({ message: "Urządzenie nie zostało znalezione" });
    }
    res.status(200).json(updatedDevice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Wystąpił błąd podczas aktualizacji urządzenia" });
  }
};

// Operacja usuwania urządzenia
export const deleteDevice = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDevice = await Device.findByIdAndDelete(id);
    if (!deletedDevice) {
      return res.status(404).json({ message: "Urządzenie nie zostało znalezione" });
    }
    res.status(200).json({ message: "Urządzenie zostało usunięte" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Wystąpił błąd podczas usuwania urządzenia" });
  }
};