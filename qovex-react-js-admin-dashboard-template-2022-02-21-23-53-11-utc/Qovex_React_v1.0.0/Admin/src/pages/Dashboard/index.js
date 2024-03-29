import React from "react";
import { Row, Col, CardBody, Card, Progress } from "reactstrap";
import { Link } from "react-router-dom";
import Certification1 from "./Certification1";
import { useState } from "react";
import { useRef } from "react";
import Marks from './Marks'
const Dashboard = () => {
  const [inputData, setInputData] = useState("");
  const [data, setData] = useState({});
  const [parentDetails, setParentDetails] = useState({});
  const [marks, setMarks] = useState({});
  const inputRef = useRef(null);
  const handleChange = (e) => {
    const roll=e.target.value.toUpperCase()
    setInputData(roll);
  };
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const [showParent, setShowParent] = useState(false);
  const [showcerti, setShowCerti] = useState(false);
  const [showthub,setShowthub]=useState(false)
  const [certificate,setCertificate]=useState({})
  const [training, setTraining] = useState({});

  const toggleTUB = () => {
    setShowthub(!showthub);
  };
  const toggleCerti = () => {
    setShowCerti(!showcerti);
  };
  const toggleParent = () => {
    setShowParent(!showParent);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5050/students/details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roll_number: inputData }),
      });
      const data = await response.json();
      console.log(inputData)
      if(data.message=='not found'){
        alert('User not exits')
        return 
      }
      setData({
        Name: data.student_name,
        RollNo: data.roll_number,
        DateOfBirth: data.date_of_birth,
        Gender: data.gender,
        "Blood Group": data.blood_group,
        Category: data.category,
        Nationality: data.nationality,
        Religion: data.religion,
        Mother_tongue: data.mother_tongue,
        Mobile: data.mobile,
        "College Mail": data.official_mail,
        College: data.college,
      });
      setParentDetails({
        Father: data.father_name,
        Mother: data.mother_name,
        'Father Occupation':data.father_occupation,
        'Annucal Income':data.annucal_income,
        'Mother Occupation':data.mother_occupation,
        'permanent_address':data.permanent_address
      });
      setMarks({
        SccPercent: data.ssc_percent,
        InterPercent: data.inter_percent,
        Btech:data.btech_percent,
        DiplomaPercent:data.diploma_percent
      });
      //---------------*-----------
      const certificateResponse = await fetch("http://localhost:5050/students/certification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roll_number: inputData }),
      });
      
      const certificateData = await certificateResponse.json();
      setCertificate({
        Certification:certificateData.certification,
        'Certification From':certificateData.certification_from,
        Type:certificateData.type,'Exam Status':certificateData.exam_status,
        Proctor:certificateData.proctor,Score:certificateData.score,
        YearOfExam:certificateData.year_of_exam,
        CertificateId:certificateData.certificate_id
      })
      console.log(certificate)
      const trainingResponse = await fetch("http://localhost:5050/students/training", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roll_number: inputData }),
      });
      const tarinigData = await trainingResponse.json();
      console.log(tarinigData)
      setTraining({
        'Roll Number':tarinigData.roll_number,
        Course:tarinigData.course,
        'Course Type':tarinigData.course_type,
        Duration:tarinigData.duration,
        'Register Date':tarinigData.register_date,
        Type:tarinigData.type,
        'Pay eligibility':tarinigData.pay_eligibility,
        'Refund eligibility':tarinigData.refund_eligibility,
        'Attendance eligibility':tarinigData.attendance_eligibility
      })
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <div className="col-12" style={{ background:'#95a5a6', fontSize:"16px" }} >
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 " style={{color:'#353b48',fontSize:"25px"}}>Student Details</h4>

              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active text-uppercases "  style={{color:'#353b48'}}>
                    Welcome to technical hub
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </Row>
        <Row
          style={{ backgroundColor: "white ", paddingTop: "30px" }}
          className="mb-2"
        >
          <label htmlFor="searchInput">ENTER ROLL NO</label>
          <div style={{ padding: "10px" }}>
            <input
              style={{ borderRadius: "5px", marginRight: "2px" }}
              type="text"
              id="searchInput"
              value={inputData}
              onChange={handleChange}
              placeholder="Enter your search query"
            />
            <button
              onClick={handleSubmit}
              style={{
                fontSize: "15px",
                backgroundColor: "#30336b",
                color: "white",
                borderRadius: "5px",
              }}
            >
              Search
            </button>
          </div>
        </Row>
        <Row>
        <Col lg={6} md={6} sm={12}>
            <div className="table-responsive">
              <button onClick={toggleTUB} className="btn btn-primary mb-3">
                {showthub ? "Hide T-HUB Details" : "Show T-HUB Details"}
              </button>
              {showthub && (
                <table className="table table-bordered table-striped">
                  <thead className="table-dark">
                    <tr className="text-uppercase">
                      <th>T-HUB</th>
                      <th>Information</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(training).map(([key, value]) => (
                      <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="table-responsive">
              <button onClick={toggleCerti} className="btn btn-primary mb-3">
                {showcerti ? "Hide Cetification Details " : "Show Certification Details"}
              </button>
              {showcerti && (
                <table className="table table-bordered table-striped">
                  <thead className="table-dark">
                    <tr className="text-uppercase">
                      <th>Student</th>
                      <th> Certification Information</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(certificate).map(([key, value]) => (
                      <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </Col>
          
        </Row>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="table-responsive">
              <button onClick={toggleDetails} className="btn btn-primary mb-3">
                {showDetails ? "Hide Student Details " : "Show Student Details"}
              </button>
              {showDetails && (
                <table className="table table-bordered table-striped">
                  <thead className="table-dark">
                    <tr className="text-uppercase">
                      <th>Student</th>
                      <th>Information</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(data).map(([key, value]) => (
                      <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="table-responsive">
              <button onClick={toggleParent} className="btn btn-primary mb-3">
                {showParent ? "Hide Parents Details" : "Show Parents Details"}
              </button>
              {showParent && (
                <table className="table table-bordered table-striped">
                  <thead className="table-dark">
                    <tr className="text-uppercase">
                      <th>Parents</th>
                      <th>Information</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(parentDetails).map(([key, value]) => (
                      <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Marks data={marks}/>
        </Row>
        {/* <Row>
          <Certification1/>
        </Row> */}
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
