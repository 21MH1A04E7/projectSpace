import React from "react";
import { Row, Col, CardBody, Card, Progress } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

//Import Components
import LineChart from "./line-chart";
import RevenueChart from "./revenue-chart";
import SalesAnalytics from "./sales-analytics";
import ScatterChart from "./scatter-analytics";
import LatestTransaction from "./latest-transaction";

//Import Image
import widgetImage from "../../assets/images/widget-img.png";
import Overview from "./Overview";
import Reviews from "./Reviews";
import Revenue from "./Revenue";
import Inbox from "./Inbox";

const Dashboard = () => {
  const [inputData, setInputData] = useState("");
  const [data,setData]=useState({})
  const [marks,setMarks]=useState({})
  const handleChange = (e) => {
    console.log(e.target.value);
    setInputData(e.target.value);
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
      setData({Name:data.student_name,RollNo:data.roll_number,Father:data.
        father_name,Mother:data.mother_name,Branch:data.branch,College:data.college
        });
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
        {Object.entries(data).map(([key, value]) => (
        <Col key={key} lg={14} sm={10}>
          <div className="bg-light border gap-3 fs-3 border border-dark p-2 rounded-3">
            <span className="text-uppercase">{`${key} :`}</span>
            <span className="p-2">{value}</span>
          </div>
        </Col>
      ))}
          {/* <Col lg={6}>
            <LineChart />

          </Col>
          <Col lg={3}>
            <RevenueChart />
          </Col> */}
        </Row>
        <Row className="">
        <p className="fs-2 ">Studnets marks</p>
        {Object.entries(marks).map(([key, value]) => (
          <Col key={key} lg={14} sm={10}>
            <div className="bg-light border gap-3 fs-3 border border-dark p-2 rounded-3">
              <span className="text-uppercase">{`${key} :`}</span>
              <span className="p-2">{value}</span>
            </div>
          </Col>
        ))}
        </Row>
      </div>
      
    </React.Fragment>
  );
};

export default Dashboard;
