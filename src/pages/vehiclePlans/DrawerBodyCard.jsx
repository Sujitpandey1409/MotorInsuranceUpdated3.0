import React from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DrawerBodyCard.css'

const DrawerBodyCard = ({ title }) => {
  return (
    <Card className='drawer-body-card-container'>
      <div className='drawer-body-card-header'>
        <h6>
          {title}
        </h6>
        <h5>
          ₹ 65,86
        </h5>
      </div>

      <CardBody style={{ paddingTop: '60px' }}>
        <Row>
          <Col md={6} >
            <div style={{ paddingBottom: '15px' }}>
              <div className='d-flex justify-content-between'>
                <div style={{ color: 'rgba(43, 53, 69, 0.8)' }}>Basic On Damage</div>
                <div style={{ fontWeight: '700', color: '#2B3545' }}>₹ 65,86</div>
              </div>
              <div className='d-flex justify-content-between'>
                <div style={{ color: 'rgba(43, 53, 69, 0.8)' }}>Electrical Accessories</div>
                <div style={{ fontWeight: '400', color: '#2B3545' }}>NA</div>
              </div>
              <div className='d-flex justify-content-between'>
                <div style={{ color: 'rgba(43, 53, 69, 0.8)' }}>CNG/LPG Kit</div>
                <div style={{ fontWeight: '400', color: '#2B3545' }}>NA</div>
              </div>
            </div>
          </Col>

          <Col>
            <div >
              <div className='d-flex justify-content-between'>
                <div style={{ color: 'rgba(43, 53, 69, 0.8)' }}>GVW</div>
                <div style={{ fontWeight: '700', color: '#2B3545' }}>₹ 65,86</div>
              </div>
              <div className='d-flex justify-content-between'>
                <div style={{ color: 'rgba(43, 53, 69, 0.8)' }}>Non Electrical Accessories</div>
                <div style={{ fontWeight: '400', color: '#2B3545' }}>NA</div>
              </div>
              <div className='d-flex justify-content-between'>
                <div style={{ color: 'rgba(43, 53, 69, 0.8)' }}>IMT 23</div>
                <div style={{ fontWeight: '400', color: '#2B3545' }}>NA</div>
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default DrawerBodyCard;
