const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    firstName : String,
    lastName  : String,
    email : String,
    password : String,
    confPass : String,
    URL: String
})

// here we export the module the first parametar is model name the second one is 
// schema name and the last one is the collection name in the Mlab
 module.exports = mongoose.model('user', userSchema, 'users')