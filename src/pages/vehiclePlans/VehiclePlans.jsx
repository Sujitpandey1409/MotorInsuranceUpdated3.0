import React, { useState } from 'react'
import './VehiclePlans.css'
import { Col, Container, Row } from 'reactstrap'
import VehiclePlansLeft from './VehiclePlansLeft';
import VehiclePlansRight from './VehiclePlansRight';
import EditPolicyDetailPopUp from './EditPolicyDetailPopUp';
import Drawer from './Drawer';

function VehiclePlans() {
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  //   const toggleDrawer = () => {
  //       setIsDrawerOpen(!isDrawerOpen);
  //   };
  return (
    <div style={{ background: "#F5F6F6", minHeight: "90vh", marginTop: "61px", overflow: 'hidden', fontFamily:'Mukta ' }}>
      <Container className='vehicle-plans-container'>
        <Row style={{ height: "90vh", overflow: "auto", position: 'relative' }}>
          <Col md={3} className='left-section-container  d-flex flex-column gap-4'>
            {/* left-section */}
            <VehiclePlansLeft />
          </Col>
          <Col className='right-section-container '>
            {/* right-section */}
            {/* <VehiclePlansRight toggleDrawer={toggleDrawer} /> */}
            {/* <Drawer isOpen={isDrawerOpen} handleClose={toggleDrawer} /> */}
            <VehiclePlansRight  />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default VehiclePlans