import express from 'express'

const transportInbound = express.Router()

import { getTransport, getTransportId, createTransport, updateTransport, deleteTransport } from '../../controllers/transportInbound.controller.js'

transportInbound.get('/', getTransport) // get all carriers
transportInbound.get('/:id', getTransportId) // get a carrier by id
transportInbound.post('/', createTransport) // create a carrier
transportInbound.put('/:id', updateTransport) //update a carrier
transportInbound.delete('/:id', deleteTransport) // delete a carrier


export default transportInbound