import authHeader from './auth-header';
import api from '../api';

const API_URL = '/api/test/';

class UserService {
  getPublicContent() {
    return api.get(`${API_URL}/all`);
  }

  getUserBoard() {
    return api.get(`${API_URL}/user`, { headers: authHeader() });
  }
  getUserMod() {
    return api.get(`${API_URL}/mod`, { headers: authHeader() });
  }

  getAdminBoard() {
    return api.get(`${API_URL}/admin`, { headers: authHeader() });
  }
}

export default new UserService();