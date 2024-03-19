import React from "react";
import { Row, Col, CardBody, Card, Progress } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useRef} from 'react'


const Dashboard = () => {
  const [inputData, setInputData] = useState("");
  const [data,setData]=useState({})
  const [parentDetails,setParentDetails]=useState({})
  const [marks,setMarks]=useState({})
  const inputRef = useRef(null);
  const handleChange = (e) => {
    console.log(e.target.value);
    setInputData(e.target.value);
  };
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
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
      setData({Name:data.student_name,RollNo:data.roll_number,DateOfBirth:data.date_of_birth,Gender:data.gender,'Blood Group':data.
        blood_group,Category:data.
        category ,Nationality:data.nationality,
        Religion:data.religion,
        Mother_tongue
        :data.mother_tongue,Mobile:data.mobile,'College Mail':data.
        official_mail,College:data.college});
        setParentDetails({
          Father:data.father_name,Mother:data.mother_name,
        })
        setMarks({SccPercent:data.ssc_percent,InterPercent:data.inter_percent
        });
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  console.log(data)
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 font-size-18">StudentDetails</h4>

              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active">
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
          <Col lg={12} md={8} sm={8}>
            <div>
      <button onClick={toggleDetails} className="btn btn-primary mb-3">
        {showDetails ? 'Hide Student Details ' : 'Show Student Details'}
      </button>
      {showDetails && (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Student</th>
                <th>Value</th>
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
        </div>
      )}
    </div>
            {/* <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Key</th>
            <th>Value</th>
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
    </div> */}

          </Col>
        </Row>
      </div>
      
    </React.Fragment>
  );
};

export default Dashboard;
