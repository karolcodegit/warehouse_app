import CompanyInfo from "../models/companyinfo.model.js"

export const getCompanyInfo = async (req, res) => {
    try{
        const companyInfo = await CompanyInfo.findOne()
        res.status(200).json(companyInfo)
    }catch(e){
        res.status(500).send({message: e.message})
    }
}

export const updateCompanyInfo = async (req, res) => {
    try{
        const { name, secondName, street, number, zipCode, city, country, numberPhone } = req.body;

        // Validate input
        if (!name || !secondName || !street || !number || !zipCode || !city || !country || !numberPhone) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const companyInfo = await CompanyInfo.findOne()
        companyInfo.name = req.body.name
        companyInfo.secondName = req.body.secondName
        companyInfo.street = req.body.street
        companyInfo.number = req.body.number
        companyInfo.zipCode = req.body.zipCode
        companyInfo.city = req.body.city
        companyInfo.country = req.body.country
        companyInfo.numberPhone = req.body.numberPhone
        await companyInfo.save()
        res.status(200).json({message: "Company info updated"})
    }catch(e){
        res.status(500).send({message: e.message})
    }
}

export const createCompanyInfo = async (req, res) => {
    try{
      const { name, secondName, street, number, zipCode, city, country, numberPhone } = req.body;
  
      // Validate input
      if (!name || !secondName || !street || !number || !zipCode || !city || !country || !numberPhone) {
          return res.status(400).json({ message: "All fields are required" });
      }
  
      const newCompanyInfo = new CompanyInfo({
        name,
        secondName,
        street,
        number,
        zipCode,
        city,
        country,
        numberPhone
      })
  
      await newCompanyInfo.save()
  
      res.status(201).json(newCompanyInfo)
    }catch(e){
      res.status(500).send({message: e.message})
    }
  }