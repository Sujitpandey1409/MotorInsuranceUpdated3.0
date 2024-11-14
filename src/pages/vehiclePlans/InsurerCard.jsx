import React, { useContext, useState } from 'react'
import './InsurerCard.css'
import { IoMdClose } from 'react-icons/io'
import { IoArrowBackOutline } from "react-icons/io5";
import { Card, CardBody, Button, FormGroup, Label, Input, Row, Col, Form } from 'reactstrap';
import logo1 from '../../assets/logoIsurer1.png'
import logo2 from '../../assets/logoIsurer2.png'
import logo3 from '../../assets/logoIsurer3.png'
import logo4 from '../../assets/logoIsurer3.png'
import { Link, useNavigate } from 'react-router-dom';
import { VehicleContext } from '../../contexts/VehicleProvider';
// Insurers data (mock)
const insurers = [
  { id: 1, name: 'Kotak General Insurance', logo: logo1 },
  { id: 2, name: 'ICICI Lombard', logo: logo2 },
  { id: 3, name: 'Bajaj Allianz', logo: logo3 },
  { id: 4, name: 'HDFC Ergo', logo: logo4 }
];

function InsurerCard() {
  // const [selectedInsurers, setSelectedInsurers] = useState('Kotak General Insurance');
  const{selectedInsurers, setSelectedInsurers} = useContext(VehicleContext)
  const navigate = useNavigate()

  // Toggle insurer selection
  const handleCheckboxChange = (insurerId) => {
    setSelectedInsurers(prevSelected => {
      if (prevSelected.includes(insurerId)) {
        return prevSelected.filter(id => id !== insurerId);
      } else {
        return [...prevSelected, insurerId];
      }
    });
  };

  const handleSubmitInsurer = ()=>{
    localStorage.setItem('Existing Insurer', selectedInsurers)
    console.log();
    
  }

  return (
    <div className='insurer-card-container'>
      <div className="isurer-card">
        <span className='close-Button insurer-responsive-close-Button'><IoMdClose size={21} /></span>
        <div className="header-container mt-2">
          <div className="header-text-icon-container">
            <Link to={'/vehicle-details'}><div className="icon-container">
              <IoArrowBackOutline size={21} />
            </div></Link>
            <div className="d-flex flex-column" style={{ width: '209px', height: '48px' }}>
              <h5 style={{ fontSize: '14px', fontWeight: '700' }}>Select Insurer for:</h5>
              <p>CH01CD7190  |  Tata Nexon</p>
            </div>
          </div>
        </div>
        <Input className='insurer-responsive-search' placeholder="Search Insurer" />
        <div className="popular-insurer-section">
          <h5 className='isurer-responsive-text-h5' style={{ fontSize: '14px', fontWeight: '700' }}>Popular insurers:</h5>
          <Form onSubmit={handleSubmitInsurer}>
            <Row className='insurer-row'>
              {insurers.map(insurer => (
                <Col xs="6" key={insurer.id}>
                  <Card
                    className={`mb-3 p-2 isurer-type-card ${selectedInsurers === insurer.name && 'border-primary'}`}
                    onClick={() => setSelectedInsurers(insurer.name)}
                  >
                    <CardBody className="d-flex align-items-center justify-content-start gap-2" style={{ marginTop: '-17px', alignSelf: 'start' }}>
                      <FormGroup check style={{ marginBottom: '33px' }}>
                        <Label check inline>
                          <Input
                            type="radio"
                            value={selectedInsurers.includes(insurer.name)}
                            checked={selectedInsurers.includes(insurer.name)}
                            onChange={() => setSelectedInsurers(insurer.name)}
                            name='insurer'
                          />
                        </Label>
                      </FormGroup>
                      <div className="d-flex flex-column gap-2">
                        <img src={insurer.logo} alt={insurer.name} style={{ width: '56px', marginRight: '10px' }} />
                        <h5 style={{ fontSize: '12px', fontWeight: 400 }}>
                          {insurer.name}
                        </h5>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
            <Button onClick={() => {navigate('/vehicle-plans'); localStorage.setItem('Existing Insurer', selectedInsurers);
            }} className='proceed-button proceed-button-responsive mt-5'>Proceed</Button>
          </Form>
          <div className="isurer-responsive-text-p">By continuing I agree to the  <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></div>
        </div>
      </div>
    </div>
  )
}

export default InsurerCard