import axios from "axios";
export default {
  getQR: function(data) {
      return axios.get("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + data);
  }, 
  getAllUsers: function(){
    return axios.get('/api/users');
  },
  getUser: function(id){
    return axios.get('/api/users/' +  id)
  }, 
  addUser: function(userData) {
    return axios.post('/api/users', userData)
  }
};