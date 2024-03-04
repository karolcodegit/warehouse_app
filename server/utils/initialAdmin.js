import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

import UserModel from '../models/user.model.js';
import RoleModel from '../models/role.model.js';

async function createAdminUser() {

  try {
    const count = await UserModel.countDocuments({email: 'karol.znojkiewicz@arvatoplus.com'});
    if(count === 0){
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash('!_!K2a9R0o5L1994!_!', salt);

      const adminRole = await RoleModel.findOne({name: 'superAdmin'});
      if(!adminRole){
        console.error('Admin role not found');
        return;
      }
      const newUser = new UserModel({
        name: 'Karol',
        surname: 'Znojkiewicz',
        gender: 'Men',
        email: 'karol.znojkiewicz@arvatoplus.com',
        password: hashedPassword,
        roles: [adminRole._id]
      });

      const savedUser = await newUser.save();
      await UserModel.populate(savedUser, {path: 'roles'});
      console.log('Admin user created successfully');
    }
  } catch (err) {
    console.error(err);
  } 
}

export { createAdminUser };