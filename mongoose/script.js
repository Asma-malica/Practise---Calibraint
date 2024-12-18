const mongoose = require('mongoose');
const User = require('./User')
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  // const user = await User.create({name  : "As" ,age : 20 , email : "as@gmail.com",hobbies : ["coding,cooking"],address :{street : "erode"}})
// const user = await User.findOne({name:"As"})
// const user = await User.findByName("Kyle")
const user = await User.findOne({name:"As",email:"as@gmail.com"})
// user.sayHi()
  console.log(user)
  console.log(user.namedEmail)
  user.save()
  console.log(user)

}
