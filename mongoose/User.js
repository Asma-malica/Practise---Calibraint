const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name : String,
    age : Number,
    email : String,
    createdAt : {
        type:Date,
        immutable : true,
        default : Date.now()},
    updatedAt : Date,
    bestFriend : mongoose.SchemaTypes.ObjectId,
    hobbies : [String],
    address : {
        street : String,
        city : String,
    } 
})
userSchema.methods.sayHi = function(){ // foe single instance method
    console.log(`hi ${this.name}`)
}
userSchema.statics.findByName = function(name){ //for entire colection
    return this.where({name : new RegExp(name,"i")})
}

userSchema.query.ByName = function(name){ //
    return this.where({name : new RegExp(name,"i")})
}

userSchema.virtual("namedEmail").get(function(){
    return `${this.name} <${this.email}>`
})

userSchema.pre("save",function(next){
    this.updatedAt = Date.now()
    next()
})

userSchema.post("save",function(doc,next){
    doc.sayHi()
    next()
})

module.exports = mongoose.model("User",userSchema)
