import axios from "axios";
export default {
  getQR: function(data) {
      return axios.get("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + data);
  }
};