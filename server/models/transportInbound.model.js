// InboundTransport.js
import mongoose from "mongoose";

const TransportInboundSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  shipment: String,
  carrier: String,
  license_truck: String,
  license_trailer: String,
  pager: String,
  status: { type: String, default: "Waiting" },
  pallets: String,
  gate: String,
  departure: String,
  message: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
},{
  timestamps: true
});

export default TransportInboundSchema