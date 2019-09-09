const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobileNum: { type: String},
  emailAdd:  [{ type: String, required: true }],
  companyName: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String },
  website: { type: String }
});

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;