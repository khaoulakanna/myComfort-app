const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : {
        type : String,
        required: true
    },
    nom : {
        type: String,
        required: true
    },
    prenom : {
        type: String,
        required: true
    },
    dateNaissance : {
        type: Date,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    ville : {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;