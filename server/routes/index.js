import authRoutes from './auth.routes.js';
import userRoutes from './user.routes.js';
import listRoles from './role.routes.js';


const setupRoutes = (app) => {
    authRoutes(app);
    userRoutes(app);
    listRoles(app);
}

export default setupRoutes;