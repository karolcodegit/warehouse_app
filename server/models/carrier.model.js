import mongoose from "mongoose";

const CarrierSchema = mongoose.Schema({
    carrierName: String,
    carrierStreet: String,
    carrierNumber: String,
    carrierCity: String,
    carrierZipCode: String,
    carrierCountry: String,
},{
    timestamps: true
  })

const Carrier = mongoose.model('Carrier', CarrierSchema);

export default Carrier;