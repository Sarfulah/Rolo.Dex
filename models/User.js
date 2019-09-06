const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const bcrypt = require("bcrypt-nodejs");
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    email: {
        type: String, 
        required: true, 
        unique: true, 
        min: [4, 'Username must at least 4 characters'], 
        max: [16, 'Username can not exceed 16 characters'], 
        // match: [/^A-Za-z0-9/, 'Username can only contain letters and numbers']
    },
    password: {
        type: String,
        required: true,
        min: [8, 'Password must be at least 8 characters'],
        max: [16, 'Password can not exceed 16 characters']
    },
    contact: [{
        type: Schema.Types.ObjectId,
        ref: "Contact"
    }]

});

userSchema.methods = {
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync( inputPassword, this.password)
    },

    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
}

userSchema.pre('save', function (next) {
    if (!this.password) {
        console.log('models/user.js =======NO PASSWORD PROVIDED=======')
        next()
    }
    else {
        console.log('models/user.js hashPassword in pre save');

        this.password = this.hashPassword(this.password)
        next()
    }
})

const User = mongoose.model("User", userSchema);
User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = User;