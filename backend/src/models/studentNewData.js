const mongoose = require("mongoose");

// Define the schema for student details
const studentDetailsSchema = new mongoose.Schema({
  roll_number: {
    type: String,
    required: true,
    unique: true,
  },
  admission_no: {
    type: Number,
    required: true,
    unique: true,
  },
  student_name: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  passout_year: {
    type: Number,
    required: true,
  },
  ssc_percent: {
    type: Number,
    required: true,
  },
  inter_percent: {
    type: Number,
    required: true,
  },
  diploma_percent: {
    type: Number,
    required: true,
  },
  btech_percent: {
    type: Number,
    required: true,
  },
  backlogs: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: String,
    required: true,
  },
  blood_group: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  religion: {
    type: String,
    required: true,
  },
  mother_tongue: {
    type: String,
    required: true,
  },
  entrance_type: {
    type: String,
  },
  rank: {
    type: Number,
  },
  joining_date: {
    type: String,
    required: true,
  },
  seat_type: {
    type: String,
  },
  admission_type: {
    type: String,
  },
  mobile: {
    type: String,
  },
  email: {
    type: String,
  },
  official_mail: {
    type: String,
    required: true,
  },
  scholarship: {
    type: String,
  },
  phc: {
    type: String,
  },
  father_name: {
    type: String,
    required: true,
  },
  father_occupation:{
    type:String
  },
  annucal_income: {
    type: Number,
  },
  mother_name: {
    type: String,
  },
  mother_occupation:{
  type:String
  },
  mother_mobile_no: {
    type: String,
  },
  identification_marks: {
    type: String,
  },
  correspondence_address: {
    type: String,
  },
  permanent_address: {
    type: String,
    required: true,
  },
});

// Create the model using the schema
const StudentDetail = mongoose.model("studentsdetail", studentDetailsSchema);

// Export the model
module.exports = StudentDetail;
