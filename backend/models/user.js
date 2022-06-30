const mongoose = require('mongoose');

// Importation du module empechant la création de deux comptes avec le même email
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    nom: { type: String, required: true, minLength: 3, maxLength: 55, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    picture: { type: String },
    bio: { type: String, max: 1024 },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);