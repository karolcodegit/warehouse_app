import express from 'express'
import { createCompanyInfo, getCompanyInfo, updateCompanyInfo } from '../controllers/companyinfo.controller.js'


const companyInfoRoutes = express.Router()

companyInfoRoutes.get('/', getCompanyInfo)
companyInfoRoutes.put('/', updateCompanyInfo)
companyInfoRoutes.post('/', createCompanyInfo)

export default companyInfoRoutes