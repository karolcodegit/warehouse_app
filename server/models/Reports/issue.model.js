import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const issueSchema = new Schema({
  deviceId: { type: Schema.Types.ObjectId, ref: 'Device', required: true }, // Powiązanie z urządzeniem
  problemType: { type: String, required: true }, // Rodzaj problemu, np. "Nie wyczyszczona głowica"
  description: { type: String, required: true }, // Opis problemu
  reportedBy: { type: String, required: true }, // Osoba zgłaszająca problem
  createdAt: { type: Date, default: Date.now }, // Data zgłoszenia
  status: { type: String, enum: ['Oczekujące', 'Rozwiązane'], default: 'Oczekujące' }, // Status zgłoszenia
});

const Issue = mongoose.model('Issue', issueSchema);

export default Issue;