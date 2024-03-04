import mongoose from "mongoose";

const TransportOutboundSchema = mongoose.Schema({
  date: { type: Date, default: Date.now },
  shipment: String,
  carrier: String,
  license_truck: String,
  license_trailer: String,
  pager: String,
  gate: String,
  status: { type: String, default: "Waiting" },
  pallets: String,
  seal: String,
  departure: String,
  package: String,
  weight: String,
  message: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
},{
  timestamps: true
});

const TransportOutbound = mongoose.model('TransportOutbound', TransportOutboundSchema);


export default TransportOutbound