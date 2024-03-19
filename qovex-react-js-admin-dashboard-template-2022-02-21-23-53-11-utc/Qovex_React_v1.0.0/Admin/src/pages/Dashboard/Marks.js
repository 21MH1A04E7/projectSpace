import React from "react";
import { Row, Col, CardBody, Card, Progress } from "reactstrap";
function Marks() {
  return (
    <div className="p-4 border rounded bg-light">
      <h4 className="mb-4">Student Marks</h4>
      <Row className="mb-4">
        <Col md={3} sm={6}>
          <div className="text-center">
            <h6>SSC</h6>
            <div className="bg-primary p-3 rounded-circle text-white">
              <i className="fas fa-graduation-cap fa-3x"></i>
            </div>
            <p className="mt-3"></p>
          </div>
        </Col>
        <Col md={3} sm={6}>
          <div className="text-center">
            <h6>Intermediate</h6>
            <div className="bg-success p-3 rounded-circle text-white">
              <i className="fas fa-graduation-cap fa-3x"></i>
            </div>
            <p className="mt-3"></p>
          </div>
        </Col>
        <Col md={3} sm={6}>
          <div className="text-center">
            <h6>B.Tech</h6>
            <div className="bg-warning p-3 rounded-circle text-white">
              <i className="fas fa-graduation-cap fa-3x"></i>
            </div>
            <p className="mt-3"></p>
          </div>
        </Col>
        <Col md={3} sm={6}>
          <div className="text-center">
            <h6>Diploma</h6>
            <div className="bg-danger p-3 rounded-circle text-white">
              <i className="fas fa-graduation-cap fa-3x"></i>
            </div>
            <p className="mt-3"></p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Marks;
