import React from "react"

import { Col, Row, Card, CardBody } from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const UiColors = () => {
  return (
    <React.Fragment>
      <div className="page-content">

        <Breadcrumbs title="UI Elements" breadcrumbItem="Colors" />

        <Row>
          <Col xl={3} md={6}>
            <Card>
              <CardBody className="text-center">
                <div className="color-box bg-primary p-4">
                  <h5 className="my-2 text-white">#3b5de7</h5>
                </div>
                <div className="color-box bg-primary bg-gradient p-4">
                  <h5 className="my-2 text-white">bg-gradient</h5>
                </div>
                <div className="color-box bg-soft-primary bg-gradient p-4">
                  <h5 className="my-2 text-primary">bg-soft-primary</h5>
                </div>

                <h5 className="mb-0 mt-3 text-primary">Primary</h5>
              </CardBody>
            </Card>
          </Col>
          <Col xl={3} md={6}>
            <Card>
              <CardBody className="text-center">
                <div className="color-box bg-success p-4">
                  <h5 className="my-2 text-white">#45cb85</h5>
                </div>
                <div className="color-box bg-success bg-gradient p-4">
                  <h5 className="my-2 text-white">bg-gradient</h5>
                </div>
                <div className="color-box bg-soft-success bg-gradient p-4">
                  <h5 className="my-2 text-success">bg-soft-success</h5>
                </div>
                <h5 className="mb-0 mt-3 text-success">Success</h5>
              </CardBody>
            </Card>
          </Col>
          <Col xl={3} md={6}>
            <Card>
              <CardBody className="text-center">
                <div className="color-box bg-info p-4">
                  <h5 className="my-2 text-white">#0caadc</h5>
                </div>
                <div className="color-box bg-info bg-gradient p-4">
                  <h5 className="my-2 text-white">bg-gradient</h5>
                </div>
                <div className="color-box bg-soft-info bg-gradient p-4">
                  <h5 className="my-2 text-info">bg-soft-info</h5>
                </div>
                <h5 className="mb-0 mt-3 text-info">Info</h5>
              </CardBody>
            </Card>
          </Col>
          <Col xl={3} md={6}>
            <Card>
              <CardBody className="text-center">
                <div className="color-box bg-warning p-4">
                  <h5 className="my-2 text-white">#eeb902</h5>
                </div>
                <div className="color-box bg-warning bg-gradient p-4">
                  <h5 className="my-2 text-white">bg-gradient</h5>
                </div>
                <div className="color-box bg-soft-warning bg-gradient p-4">
                  <h5 className="my-2 text-warning">bg-soft-warning</h5>
                </div>
                <h5 className="mb-0 mt-3 text-warning">Warning</h5>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xl={3} md={6}>
            <Card>
              <CardBody className="text-center">
                <div className="color-box bg-danger p-4">
                  <h5 className="my-2 text-white">#ff715b</h5>
                </div>
                <div className="color-box bg-danger bg-gradient p-4">
                  <h5 className="my-2 text-white">bg-gradient</h5>
                </div>
                <div className="color-box bg-soft-danger bg-gradient p-4">
                  <h5 className="my-2 text-danger">bg-soft-danger</h5>
                </div>
                <h5 className="mb-0 mt-3 text-danger">Danger</h5>
              </CardBody>
            </Card>
          </Col>
          <Col xl={3} md={6}>
            <Card>
              <CardBody className="text-center">
                <div className="color-box bg-dark p-4">
                  <h5 className="my-2 text-light">#343a40</h5>
                </div>
                <div className="color-box bg-dark  bg-gradient p-4">
                  <h5 className="my-2 text-white">bg-gradient</h5>
                </div>
                <div className="color-box bg-soft-dark  bg-gradient p-4">
                  <h5 className="my-2 text-dark ">bg-soft-dark </h5>
                </div>
                <h5 className="mb-0 mt-3 text-dark">Dark</h5>
              </CardBody>
            </Card>
          </Col>
          <Col xl={3} md={6}>
            <Card>
              <CardBody className="text-center">
                <div className="color-box bg-secondary p-4">
                  <h5 className="my-2 text-light">#9095ad</h5>
                </div>
                <div className="color-box bg-secondary  bg-gradient p-4">
                  <h5 className="my-2 text-white">bg-gradient</h5>
                </div>
                <div className="color-box bg-soft-secondary  bg-gradient p-4">
                  <h5 className="my-2 text-secondary ">bg-soft-secondary </h5>
                </div>
                <h5 className="mb-0 mt-3 text-muted">Secondary</h5>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default UiColors
