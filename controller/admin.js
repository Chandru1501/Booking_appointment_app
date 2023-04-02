const path = require('path');
const User = require('../model/user');


exports.getIndex = (req,res,next)=>{
  //res.sendFile(path.join(path.dirname(require.main.filename),'view','index.html'));
  User.findAll()
  .then((user)=>{
    //console.log(user);
    res.json(user);
  })
  .catch(err=> console.log(err));
}

exports.postIndex = (req,res,next)=> {
  const username = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  console.log(req.body);
  User.create({
    name : username,
    phonenumber : phone,
    email : email
  })
  .then(()=>{
    console.log("UPDATE DONE!!!")
  })
  .catch(err=> console.log(err));
}

exports.PostDeleteuser = (req,res,next) => {
 let userId = req.params.userId;
 console.log(userId);
 User.findOne({where : {id:userId}})
 .then((data)=>{
  console.log(`user ${data.name} has been deleted`)
  data.destroy();
 })
}

