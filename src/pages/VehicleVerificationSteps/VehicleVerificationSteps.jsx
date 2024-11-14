import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import RightSectionCard from '../vehiclePlans/LeftSectionCard'
import { SiTata } from "react-icons/si";
import './VehicleVerificationSteps.css'
import KycHeaderIconTitle from './KycHeaderIconTitle';
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdArrowForwardIos, MdOutlineDone } from 'react-icons/md';
import { BsTicketDetailed, BsPersonGear } from "react-icons/bs";
import { BiSolidUserDetail } from "react-icons/bi";
import VehicleVerificationsCardsAccordion from './VehicleVerificationsCardsAccordion';
import { useNavigate } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';

function VehicleVerificationSteps() {
  const [stepsActiveState, setStepsActiveState] = useState('step1')
  const [stepsDoneState, setStepsDoneState] = useState({ step1: false, step2: false, step3: false, step4: false })
  const [sbmttActn, setSbmttActn] = useState(false)

  const navigate = useNavigate()
  const toggleCKYCDetails = () => {
    setStepsActiveState('step1')
    setSbmttActn(false)
  }
  const handleSubmitCKYCDetails = (data) => {
    console.log(data);
    
    setStepsDoneState(prevState => ({
      ...prevState,
      step1: true
    }));
    setStepsActiveState('step2')
  }
  const toggleVehicleDetails = () => {
    setStepsActiveState('step2')
    setSbmttActn(false)
  }
  const handleSubmitVehicleDetails = (e) => {
    setStepsDoneState(prevState => ({
      ...prevState,
      step2: true
    }));
    setStepsActiveState('step3')
  }
  const toggleCustomerDetails = () => {
    setStepsActiveState('step3')
    setSbmttActn(false)
  }
  const handleSubmitCustomerDetails = (e) => {
    setStepsDoneState(prevState => ({
      ...prevState,
      step3: true
    }));
    setStepsActiveState('step4')
  }
  const toggleNomineeDetails = () => {
    setStepsActiveState('step4')
    setSbmttActn(false)
  }
  const handleSubmitNomineeDetails = (e) => {
    setStepsDoneState(prevState => ({
      ...prevState,
      step4: true
    }));
    navigate('/payment-status')
    setStepsActiveState('step4')
    console.log(stepsActiveState, stepsDoneState)
  }
  return (
    <div style={{ background: "#F5F6F6", minHeight: "90vh", marginTop: "61px" }}>
      <Container className='vehicle-verification-container hide-scrollbar' >
        <Row style={{ height: "90vh", overflow: "auto", position: 'relative' }}>
          <Col className='d-flex flex-column gap-4 left-kyc-container'>
            {/* left-section */}
            <div className="left-sec-header-devider-container">
              <div className="left-sec-header-title">
                <KycHeaderIconTitle IconImage={stepsDoneState.step1 ? MdOutlineDone : HiOutlineUserGroup} done={stepsDoneState.step1}
                  active={stepsActiveState === 'step1'} title={'Step 01'} text={'CKYC of Customer'} />
                <MdArrowForwardIos />
                <KycHeaderIconTitle IconImage={stepsDoneState.step2 ? MdOutlineDone : BsTicketDetailed} done={stepsDoneState.step2}
                  active={stepsActiveState === 'step2'} title={'Step 02'} text={'Vehicle Details'} />
                <MdArrowForwardIos />
                <KycHeaderIconTitle IconImage={stepsDoneState.step3 ? MdOutlineDone : BiSolidUserDetail} done={stepsDoneState.step3}
                  active={stepsActiveState === 'step3'} title={'Step 03'} text={'Customer Details'} />
                <MdArrowForwardIos />
                <KycHeaderIconTitle IconImage={stepsDoneState.step4 ? MdOutlineDone : BsPersonGear} done={stepsDoneState.step4}
                  active={stepsActiveState === 'step4'} title={'Step 04'} text={'Nominee Details'} />
              </div>
              <Col md={8}>
                <hr style={{ margin: "0" }} />
              </Col>
            </div>
            <div onClick={()=>navigate('/vehicle-plans')} className="kycLeft-sec-header-responsive">
              <IoArrowBackOutline size={21} />
              <p>Proposal</p>
            </div>
            <div className="cards-container hide-scrollbar">
              <VehicleVerificationsCardsAccordion
                stepsActiveState={stepsActiveState}
                stepsDoneState={stepsDoneState}
                toggleCKYCDetails={toggleCKYCDetails}
                handleSubmitCKYCDetails={handleSubmitCKYCDetails}
                toggleVehicleDetails={toggleVehicleDetails}
                handleSubmitVehicleDetails={handleSubmitVehicleDetails}
                toggleCustomerDetails={toggleCustomerDetails}
                handleSubmitCustomerDetails={handleSubmitCustomerDetails}
                toggleNomineeDetails={toggleNomineeDetails}
                handleSubmitNomineeDetails={handleSubmitNomineeDetails}
                sbmttActn={sbmttActn}
                setSbmttActn={setSbmttActn}
              />
            </div>
          </Col>
          <Col md={3} className='right-sec-card-container'>
            <RightSectionCard IconImage={SiTata} title={'CH01CD7170'} text={'1210 BUS STR 48'} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default VehicleVerificationSteps