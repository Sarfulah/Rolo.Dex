import axios from "axios";
export default {
  getQR: function(data) {
      return axios.get("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + data);
  }, 
  getAllUsers: function(){
    return axios.get('/api/contact');
  },
  getUser: function(id){
    return axios.get('/api/contact/' +  id)
  }, 
  addUser: function(userData) {
    return axios.post('/api/contact', userData)
  }
};