import mongoose from 'mongoose';

const CompanyInfoSchema = mongoose.Schema({
  name: String,
  secondName: String,
  street: String,
  number: String,
  zipCode: String,
  city: String,
  country: String,
  numberPhone: String,
}, {
  timestamps: true
});

const CompanyInfo = mongoose.model('Information', CompanyInfoSchema);

export default CompanyInfo;