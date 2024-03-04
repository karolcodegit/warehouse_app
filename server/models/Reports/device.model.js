import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const deviceSchema = new Schema({
  name: { type: String, required: true },
  area: { type: String, required: true }, // Obszar, np. "Inbound" lub "Outbound"
  type: { type: String, required: true }, // Typ urządzenia, np. "Monitor", "Drukarka Zebra", "Drukarka Lexmark"
  workstation: { type: String }, // Opcjonalne, stanowisko, np. "Pack01", "Wysyłka", "OH", "Zwroty 01-14"
  status: { type: String, default: "Nieprzydzielone" }, // Status urządzenia, domyślnie "Nieprzydzielone"
});

const Device = mongoose.model('Device', deviceSchema);

export default Device;
