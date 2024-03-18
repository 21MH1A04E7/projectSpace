const mongoose = require('mongoose');

const traingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastname: String,
  roll_number: {
    type: String,
    required: true,
    unique: true
  },
  mobile: String,
  email: {
    type: String,
    required: true
  },
  branch:{
    type :String ,
    required:true
  },
  year: String,
  college: String,
  course: String,
  course_id: Number,
  course_type: String,
  duration: String,
  date: String,
  register_date: String,
  type: String,
  fee: Number,
  amount: Number,
  discount: Number,
  refund: Number,
  refund_amount: Number,
  status: String,
  gender: String,
  shirt: String,
  tshirt_status: String,
  time_stamp: Date,
  scholar_type: String,
  user_type: String,
  pay_eligibility: Number,
  refund_eligibility: Number,
  attendance_eligibility: Number
});

const TrainingDetails = mongoose.model('trainingdetail', traingSchema);

module.exports = TrainingDetails;
