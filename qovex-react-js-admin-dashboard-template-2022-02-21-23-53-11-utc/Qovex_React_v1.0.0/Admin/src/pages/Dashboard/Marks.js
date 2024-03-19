import React from "react";
import { Row, Col, CardBody, Card, Progress } from "reactstrap";
function Marks(props) {
  
    console.log()
  return (
    <div className="p-4 border rounded bg-light">
      <h4 className="mb-4">Student Marks</h4>
      <Row className="mb-4">
        <Col md={3} sm={6}>
          <div className="text-center">
            <h6>SSC</h6>
            <div className="bg-primary p-4 rounded-circle text-white">
              <i className="fas fa-graduation-cap fa-3x"></i>
            </div>
            <p className="mt-3">{`${props.data.SccPercent==undefined?'Not Completed':props.data.InterPercent+' %'}`}</p>
          </div>
        </Col>
        <Col md={3} sm={6}>
          <div className="text-center">
            <h6>Intermediate</h6>
            <div className="bg-success p-4 rounded-circle text-white">
              <i className="fas fa-graduation-cap fa-3x"></i>
            </div>
            <p className="mt-3">{`${props.data.InterPercent==undefined?'Not Completed':props.data.InterPercent+' %'}`}</p>
          </div>
        </Col>
        <Col md={3} sm={6}>
          <div className="text-center">
            <h6>B.Tech</h6>
            <div className="bg-warning p-4 rounded-circle text-white">
              <i className="fas fa-graduation-cap fa-3x"></i>
            </div>
            <p className="mt-3">{`${props.data.Btech==undefined?'Not Completed':props.data.Btech+' %'}`}</p>
          </div>
        </Col>
        <Col md={3} sm={6} className="border-1">
          <div className="text-center">
            <h6 className="text-red">Diploma</h6>
            <div className="bg-danger p-4 rounded-circle text-white">
              <i className="fas fa-graduation-cap fa-3x"></i>
            </div>
            <p className="mt-3">{`${props.data.diploma_percent==undefined?'Not Completed':props.data.diploma_percent+' %'}`}</p>
          </div>
        </Col>
      </Row>
    </div>

  );
}

export default Marks;
