import express from 'express';
const router = express.Router();
import { createDevice, getAllDevices, getDeviceById, updateDevice, deleteDevice } from '../../controllers/Reports/device.controller.js';

// Trasy dla operacji CRUD na urządzeniach
router.post('/devices', createDevice);
router.get('/devices', getAllDevices);
router.get('/devices/:id', getDeviceById);
router.put('/devices/:id', updateDevice);
router.delete('/devices/:id', deleteDevice);


export default router;