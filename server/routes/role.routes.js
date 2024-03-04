import Role from '../models/role.model.js';


const listRoles = (app) => {
    app.get('/api/roles', async (req, res) => {
        try{
            const roles = await Role.find();
            res.json(roles);
        }catch(e){
            res.status(500).json({message: e.message});
        }
    })
}
export default listRoles;