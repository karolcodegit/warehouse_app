import express from 'express'

const  carrierRouter = express.Router()

import { getCarriers, getCarrier, createCarrier, updateCarrier, deleteCarrier } from '../../controllers/carrier.controller.js'

carrierRouter.get('/', getCarriers) // get all carriers
carrierRouter.get('/:id', getCarrier) // get a carrier by id
carrierRouter.post('/', createCarrier) // create a carrier
carrierRouter.put('/:id', updateCarrier) //update a carrier
carrierRouter.delete('/:id', deleteCarrier) // delete a carrier


export default carrierRouter