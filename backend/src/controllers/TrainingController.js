
const TrainingDetail=require('../models/training_student')
const TrainingCerti=require('../models/trainingCertifiaction')
const TrainingController= async (req,res)=>{
   try{
    const {roll_number}=req.body
    const response = await TrainingDetail.findOne({roll_number:roll_number})
    if(!response) return res.status(404).json('not fount')
    res.status(200).json(response)
   }
   catch(error){
     console.log('internal server error: '+error.message)
     res.status(500).json('internal server error')
   }
}

const certificationController=async (req,res)=>{
    try{
     const {roll_number}=req.body
     const response=await TrainingCerti.findOne({roll_number:roll_number})
     if(!response) return res.status(404).json('not fount')
     res.status(200).json(response)
    }catch(error){
       console.log('internal server error'+error.message)
       res.status(500).send({message:'internal server error'})
    }
 }

module.exports = {
    TrainingController,
certificationController}