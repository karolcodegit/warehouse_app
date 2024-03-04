import { toast } from "react-toastify";
import api from "../api";

const API_URL = "/api/auth/";

class AuthService {
  async login(email, password) {
    const response = await api.post(`${API_URL}signin`, {
      email,
      password,
    });
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }
  logout() {
    localStorage.removeItem("user");
  }
  async register(name, surname, gender, roleId) {
    const defaultPassword = 'admin123'
    const email = `${name}.${surname}@codecraft.com`.toLowerCase().replace(/\s+/g, '')
    const createdAt = new Date();
    try {
      return await api.post(`${API_URL}signup`, {
        name,
        surname,
        email,
        password: defaultPassword,
        gender,
        roles: Array.isArray(roleId) ? roleId : [roleId],
        createdAt
      });
    } catch (e) {
      if (e.response && e.response.status === 400) {
        toast.error(`Error during API call: ${e.response.data.message}`);
      } else {
        toast.error(`Error during API call: ${e}`);
      }
    }
  }
  async getCurrentUser() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.accessToken) {
      const response = await api.get("/api/user", {
        headers: { "x-access-token": user.accessToken },
      });

      // Get all roles
      const allRoles = await api.get("/api/roles", {
        headers: { "x-access-token": user.accessToken },
      });

      // Map role IDs to their names
      const roles = response.data.roles ? response.data.roles.map((roleId) => {
        const role = allRoles.data.find((r) => r._id === roleId);
        return role ? role.name : "Unknown role";
      }) : [];

      return { ...response.data, roles };
    }

    return null;
  }
}

export default new AuthService();
