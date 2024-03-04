import express from 'express'

const transportOutbound = express.Router()

import { getTransport, getTransportId, createTransport, updateTransport, deleteTransport } from '../../controllers/transportOutbound.controller.js'

transportOutbound.get('/', getTransport) // get all Transports
transportOutbound.get('/:id', getTransportId) // get a Transport by id
transportOutbound.post('/', createTransport) // create a Transport
transportOutbound.put('/:id', updateTransport) //update a Transport
transportOutbound.delete('/:id', deleteTransport) // delete a Transport


export default transportOutbound