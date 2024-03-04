import dotenv from 'dotenv';
dotenv.config();

const config = {
    secret: process.env.SECRET_KEY,
    jwtExpiration: 7200,           // 2 hours
    jwtRefreshExpiration: 86400,   // 24 hours
}

export default config;