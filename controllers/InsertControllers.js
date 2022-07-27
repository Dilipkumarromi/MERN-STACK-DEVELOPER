const dbConnection=require('./../config/MangoDB')

// const posts = db.insert({name:'Ragani',Age:20})
async function getInfo(){
    const data=await dbConnection()
    let res=await data.find().toArray()
    console.log(res)

    //insert into data
//    let post=await data.insertOne({name:"Dev",Age:20})   
//    console.log(post)


}
 

getInfo()








// const see= data.find().toArray()
// exports.Registration=async(req, res, next) =>{
//     const post={
//         name:req.body.name,
//         Age:req.body.Age,
//         Email:req.body.Email
//     }
    
//     const data=await MangoConnection.Insert(post)
//     .then(result=>{
//         res.send({
//             status:200,
//             message: 'Success',
//             result:result
//         })
//     })
//     .catch(err=>{
//         res.send({
//             message:err
//         })
//     })
// }

// exports.ReadData=async(req, res, next) =>{
//     const data=await MangoConnection.find().toArray()
//     .then(result=>{
//         res.send({status:200,results:result})
//     })
//     .catch(err=>{message:'not found'});
// }



