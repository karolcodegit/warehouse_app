// Importowanie potrzebnych modułów
import mongoose from 'mongoose';
import config from '../config/auth.config.js';
import { v4 as uuidv4 } from 'uuid';

// Definicja schematu dla tokenów odświeżających
const RefreshTokenSchema = new mongoose.Schema({
  token: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  expiryDate: Date,
});

// Metoda statyczna do tworzenia nowego tokena odświeżającego
RefreshTokenSchema.statics.createToken = async function(user) {
  let expiredAt = new Date();

  // Ustawienie daty wygaśnięcia tokena
  expiredAt.setSeconds(expiredAt.getSeconds() + config.jwtRefreshExpiration);

  // Generowanie unikalnego identyfikatora dla tokena
  let _token = uuidv4();

  // Tworzenie nowego obiektu tokena odświeżającego
  let _object = new this({
    token: _token,
    user: user._id,
    expiryDate: expiredAt.getTime(),
  });

  // Zapisywanie tokena odświeżającego do bazy danych
  let refreshToken = await _object.save();

  // Zwracanie tokena
  return refreshToken.token;
};

// Metoda statyczna do weryfikacji wygaśnięcia tokena
RefreshTokenSchema.statics.verifyExpiration = (token) => {
  return token.expiryDate.getTime() < new Date().getTime();
};

// Tworzenie modelu tokena odświeżającego
const RefreshToken = mongoose.model('RefreshToken', RefreshTokenSchema);

// Eksportowanie modelu
export default RefreshToken;