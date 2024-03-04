import db from "../../models/index.js";

const RefreshToken = db.refreshToken;

// Funkcja pomocnicza do usuwania starego tokena odświeżania
const removeOldRefreshToken = async (refreshToken) => {
  return await RefreshToken.findByIdAndRemove(refreshToken._id, {
    useFindAndModify: false,
  }).exec();
};

// Funkcja pomocnicza do generowania nowego tokena dostępu
const generateNewAccessToken = (userId) => {
  return jwt.sign({ id: userId }, config.secret, {
    expiresIn: config.jwtExpiration,
  });
};

// Funkcja pomocnicza do generowania i zapisywania nowego tokena odświeżania
const generateAndSaveNewRefreshToken = async (accessToken, userId) => {
  let newRefreshToken = new RefreshToken({
    token: accessToken,
    user: userId,
  });
  await newRefreshToken.save();
  return newRefreshToken;
};

// Funkcja do odświeżania tokena
export const refreshToken = async (req, res) => {
  const { refreshToken: requestToken } = req.body;

  if (requestToken == null) {
    return res.status(403).json({ message: "Refresh Token is required!" });
  }

  try {
    let refreshToken = await RefreshToken.findOne({ token: requestToken });

    if (!refreshToken) {
      res.status(403).json({ message: "Refresh token is not in database!" });
      return;
    }

    if (RefreshToken.verifyExpiration(refreshToken)) {
      await removeOldRefreshToken(refreshToken);

      res.status(403).json({
        message: "Refresh token was expired. Please make a new signin request",
      });
      return;
    }

    // Usuń stary token odświeżania
    await removeOldRefreshToken(refreshToken);
    let newAccessToken = generateNewAccessToken(refreshToken.user._id);

    // Generuj nowy token odświeżania i zapisz go w bazie danych
    let newRefreshToken = await generateAndSaveNewRefreshToken(
      newAccessToken,
      refreshToken.user._id
    );

    return res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken.token, // Zwróć nowy token odświeżania
    });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};
