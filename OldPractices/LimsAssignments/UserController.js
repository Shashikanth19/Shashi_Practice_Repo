const userModel = require('../LimsAssignments/UserModel')

exports.retrieveRecords = (req,res) => {
    userModel.find().then((document,err) =>{
        if(!document){
            console.log('documents not found '+document)
            res.status(200).json({status:'success'})
        }
        else{
            console.log(' details found '+err)
            res.status(200).json({status:'error'})
        }
    }).catch((error) =>{
        console.log('error while retrieving data in catch block '+error)
    })
}

exports.addRecords = (req,res) =>{
    const data = new userModel({
        user:req.body.user,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password,
        role:req.body.role
    })

    data.save().then((document,err)=>{
        if(document){
            console.log('details added succesfully'+document)
            res.status(200).json({status:'datails added succesfully',details:document})
        }
        else{
            console.log('error while adding data '+err)
            res.status(200).json({status:'datails not added',details:err})
        }
    }).catch((error) =>{
        console.log('error while adding data in catch block '+error)
        res.status(200).json({status:'datails not added error in catch block',details:error})
    })
}

// module.exports = retrieveRecords