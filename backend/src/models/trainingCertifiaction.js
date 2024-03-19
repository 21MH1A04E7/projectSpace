const mongoose=require('mongoose');

const CertificationSchema= new mongoose.Schema({
    id:{
        type:Number
    },
    roll_number:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    branch:{
        type :String,
    },
    year:{
        type:Number
    },
    college:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number
    },
    certification:{
        type:String
    },
    type:{
        type:String
    },
    event_type:{
        type:String
    },
    exam_status:{
        type:String
    },
    proctor:{
        type:String
    },
    score:{
        type:Number
    },
    certificate_id:{
        type:String
    },
    year_of_exam:{
        type:String
    },
    added_data:{
        type:String
    },
    data:{
        type:String
    },
    status:{
        type:Number
    }
})

const TrainingCerti = mongoose.model('trainingcertification', CertificationSchema);

module.exports = TrainingCerti;