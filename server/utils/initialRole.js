import Role from '../models/role.model.js';

async function initialRole() {

  try {
    const count = await Role.estimatedDocumentCount();
    if (count === 0) {
      const roles = ['user', 'moderator', 'admin', 'superAdmin'];
      for (let role of roles) {
        try {
          await new Role({ name: role }).save();
          console.log(`added '${role}' to roles collection`);
        } catch (err) {
          console.log("error", err);
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
}

export { initialRole };