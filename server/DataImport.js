// import express from 'express';
// import users from './data/users.js';
// import User from './models/userModel.js';

// const importData = express.Router()

// importData .post('/user', async (req, res) => {
//     try{
//         await User.deleteMany();
//        const importUser = await User.insertMany(users)
//         res.send({importUser});
//     }catch(e){
//         res.status(500).send({message: e.message});
//     }
// })

// export default importData;