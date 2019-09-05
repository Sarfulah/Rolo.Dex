const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  firstName : { type: String, required: true },
  lastName : { type: String, required: true },
  email : [{ type: String, required: true }],
  company : String,
  mobilePhone: { type: String, },
  phone: { type: String},
  street: {type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  website: { type: String }
});

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;