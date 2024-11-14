import React from 'react';
import vehicleIcon from '../../assets/veh-detail-collapsed-icon.png'
import arrowDown from '../../assets/arrow_down_profile.png'
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';
import { IoIosArrowDropdown } from "react-icons/io";
import './VehicleInfoCardU.css'


const VehicleInfoCardU = ({ show }) => {
  return (<>
    {show ? (<Card className='vehicle-info-card-container'>
      <CardBody>
        <div className="d-flex gap-2">
          <div className="icon-conatiner">
            <img src={vehicleIcon} alt="vehicle icon" />
          </div>
          <div className="vehicle-details-collapsed">
            <Row>
              <Col md={6} >
                {/* <div className="d-flex align-items-center"> */}
                  <Row>
                    <Col md={6} sm={6} xs={6}>
                    <span className='icon-text-title'>Registration No</span>
                    </Col>
                    <Col>
                    <h6>: DL 5C A 0068</h6>
                    </Col>
                  </Row>
                {/* </div> */}
              </Col>
              <Col md={6} >
                {/* <div className="d-flex align-items-center"> */}
                <Row>
                    <Col md={6} sm={6} xs={6}>
                    <span className='icon-text-title'>Policy Type</span>
                    </Col>
                    <Col>
                    <h6>: Private</h6>
                    </Col>
                  </Row>
                  {/* <span className='icon-text-title'>Policy Type</span>
                  <h6>: Private</h6> */}
                {/* </div> */}
              </Col>
            </Row>
            <Row>
              <Col md={6} >
                {/* <div className="d-flex align-items-center"> */}
                <Row>
                  <Col md={6} sm={6} xs={6}>
                  <span className='icon-text-title'>model</span>
                  </Col>
                  <Col>
                  <h6>: 911</h6>
                  </Col>
                  </Row>
                {/* </div> */}
              </Col>
              <Col md={6}>
                {/* <div className="d-flex align-items-center"> */}
                <Row>
                  <Col md={6} sm={6} xs={6}>
                  <span className='icon-text-title'>Previous Insurer</span>
                  </Col>
                  <Col>
                  <h6>: HDFC Bank</h6>
                  </Col>
                  </Row>
                {/* </div> */}
              </Col>
            </Row>
          </div>
          <IoIosArrowDropdown className='arrow-up-expanded' size={30} />
        </div>
      </CardBody>
    </Card>) : null}
  </>);
};

export default VehicleInfoCardU;