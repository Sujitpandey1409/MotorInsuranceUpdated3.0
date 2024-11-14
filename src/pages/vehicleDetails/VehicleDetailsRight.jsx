import React, { useContext, useEffect, useState } from 'react';
import { Button, Collapse, Card, CardBody, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import "./VehicleDetailsRight.css"
import vehicleIcon from '../../assets/vehicleIcon.png'
import policyIcon from '../../assets/policyIcon.png'
import policyIcon2 from '../../assets/policyIcon2.png'
import VehicleInfoCardU from './VehicleInfoCardU';
import VehicleDetailsCardHeader from './VehicleDetailsCardHeader';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { CiCalendarDate } from 'react-icons/ci';
import Select from 'react-select';
import { VehicleContext } from '../../contexts/VehicleProvider';

const VehicleDetailsRight = () => {
  const [isVehicleDetailsOpen, setIsVehicleDetailsOpen] = useState(true);
  const [isPolicyDetailsOpen, setIsPolicyDetailsOpen] = useState(false);
  // Validation Errors
  const [vehicleErrors, setVehicleErrors] = useState({});
  const [policyErrors, setPolicyErrors] = useState({});

  const { vehicleDetails, setVehicleDetails, policyDetails, setPolicyDetails } = useContext(VehicleContext);
  const { manufacturer, model, variant, manufacturingYear, registrationDate } = vehicleDetails;
  const { policyExpiryDate, previousInsurer, policyType, claimsMade, permitType } = policyDetails;
  const navigate = useNavigate();

  const insurers = [
    { value: 'Insurer1', label: 'Insurer1' },
    { value: 'Insurer2', label: 'Insurer2' },
    { value: 'Insurer3', label: 'Insurer3' },
  ];

  const manufacturers = [
    { value: 'Manufacturer1', label: 'Manufacturer1' },
    { value: 'Manufacturer2', label: 'Manufacturer2' },
    { value: 'Manufacturer3', label: 'Manufacturer3' },
  ];

  const models = [
    { value: 'Model1', label: 'Model1' },
    { value: 'Model2', label: 'Model2' },
    { value: 'Model3', label: 'Model3' },
  ]

  const variants = [
    { value: 'Variant1', label: 'Variant1' },
    { value: 'Variant2', label: 'Variant2' },
    { value: 'Variant3', label: 'Variant3' },
  ]

  // Toggle functions to maintain accordion style
  const toggleVehicleDetails = () => {
    setIsVehicleDetailsOpen(true);
    setIsPolicyDetailsOpen(false);
  };

  const togglePolicyDetails = () => {
    setIsPolicyDetailsOpen(true);
    setIsVehicleDetailsOpen(false);
  };

  // validations
  const validateVehicleDetails = () => {
    const errors = {};
    if (!manufacturer) errors.manufacturer = 'Manufacturer is required';
    if (!model) errors.model = 'Model is required';
    if (!variant) errors.variant = 'Variant is required';
    if (!manufacturingYear) errors.manufacturingYear = 'Manufacturing Year is required';
    if (!registrationDate) errors.registrationDate = 'Registration Date is required';
    return errors;
  };

  const validatePolicyDetails = () => {
    const errors = {};
    if (!policyExpiryDate) errors.policyExpiryDate = 'Policy Expiry Date is required';
    if (!previousInsurer) errors.previousInsurer = 'Previous Insurer is required';console.log('Previous Insurer is required');
    
    if (!policyType) errors.policyType = 'Policy Type is required';
    if (!permitType) errors.permitType = 'Permit Type is required';
    return errors;
  };

  const handleSubmitVehicleDetails = (e) => {
    e.preventDefault();
    const errors = validateVehicleDetails();
    if (Object.keys(errors).length === 0) {
      togglePolicyDetails();
      // Proceed with form submission
      console.log({
        manufacturer,
        model,
        variant,
        manufacturingYear,
        registrationDate
      });
    } else {
      setVehicleErrors(errors);
    }
  };

  const handleSubmitPolicyDetails  = (e) => {
    e.preventDefault(); 
    const errors = validatePolicyDetails();
    if (Object.keys(errors).length === 0) {
      // Proceed with form submission
      console.log({
        policyExpiryDate,
        previousInsurer,
        policyType,
        claimsMade,
        permitType
      });
      navigate('/insurer-selection')
    } else {
      setPolicyErrors(errors);
      console.log(policyDetails);
      
    }
  };

  return (
    <div className="container vehicle-right-responsive" style={{ background: '#F4F4F4' }}>
      <div className="back-button">
        <div className="back-arrow-icon">
          <HiArrowLeft />
        </div>
        <span>Goods Carrying Vehicle Insurance</span>
      </div>
      <div className="section-header" onClick={toggleVehicleDetails}>
        <div className="icon-text">
          <i className="fas fa-car"></i>
          <VehicleInfoCardU show={isPolicyDetailsOpen} />
        </div>
        <i className={isVehicleDetailsOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
      </div>
      <Collapse isOpen={isVehicleDetailsOpen}>
        <Card className='vehicle-right-container'>
          <VehicleDetailsCardHeader iconImage={vehicleIcon}
            title={'Vehicle Details'}
            text={'Your answers help us find the best plans for you!'} />
          <hr className='devider' />
          <CardBody>
            <Form onSubmit={handleSubmitVehicleDetails}>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="manufacturer" className='font-600'>Manufacturer
                      <span style={{ color: "red" }}> *</span>
                    </Label>
                    <Select
                      name="manufacturer"
                      id="manufacturer"
                      value = { manufacturers.find(option => option.value === vehicleDetails.manufacturer) || null }
                      options={manufacturers}
                      onChange={(selectedOption) => setVehicleDetails({ ...vehicleDetails, manufacturer: selectedOption.value })}
                      isClearable
                    />
                    {/* </Select> */}
                    {vehicleErrors.manufacturer && <small className="text-danger">{vehicleErrors.manufacturer}</small>}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="model" className='font-600'>Model
                      <span style={{ color: "red" }}> *</span>
                    </Label>
                    <Select
                      id="model"
                      value={models.find(option => option.value === vehicleDetails.model) || null}
                      onChange={(selectedOption) => setVehicleDetails({ ...vehicleDetails, model: selectedOption.value })}
                      options={models}
                      placeholder="Select Model"
                      isClearable
                    />
                    {vehicleErrors.model && <small className="text-danger">{vehicleErrors.model}</small>}
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="variant" className='font-600'>Variant
                      <span style={{ color: "red" }}> *</span>
                    </Label>
                    <Select
                      id="variant"
                      value={variants.find(option => option.value === vehicleDetails.variant) || null}
                      onChange={(selectedOption) => setVehicleDetails({ ...vehicleDetails, variant: selectedOption.value })}
                      options={variants}
                      placeholder="Select Variants"
                      isClearable
                    />
                    {vehicleErrors.variant && <small className="text-danger">{vehicleErrors.variant}</small>}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="manufacturingYear" className='font-600'>Manufacturing Year
                      <span style={{ color: "red" }}> *</span>
                    </Label>
                    <div className="d-flex align-items-center" style={{ position: 'relative' }}>
                      <DatePicker
                        style={{ width: '100%' }}
                        selected={manufacturingYear}
                        onChange={(date) => setVehicleDetails({ ...vehicleDetails, manufacturingYear: date })}
                        id="manufacturingYear"
                        name='manufacturingYear'
                        className="form-control w-full" /* Responsive input */
                        wrapperClassName="w-full"
                        dateFormat="dd/MM/yyyy"
                        placeholderText="DD/MM/YYYY"
                      />
                      <span
                        className="input-icon"
                        onClick={() => document.querySelector('#manufacturingYear').focus()}
                        style={{ cursor: 'pointer', position: 'absolute' }}
                      >
                        <CiCalendarDate size={20} />
                      </span>
                    </div>
                    {vehicleErrors.manufacturingYear && <small className="text-danger">{vehicleErrors.manufacturingYear}</small>}
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="registrationDate" className='font-600'>Registration Date
                      <span style={{ color: "red" }}> *</span>
                    </Label>
                    <div className="d-flex align-items-center" style={{ position: 'relative' }}>
                      {/* Input field with calendar icon */}
                      <DatePicker
                        style={{ width: '100%' }}
                        selected={registrationDate}
                        onChange={(date) => setVehicleDetails({ ...vehicleDetails, registrationDate: date })}
                        className="form-control w-full"
                        id='registrationDate'
                        wrapperClassName="w-full"
                        dateFormat="dd/MM/yyyy"
                        placeholderText="DD/MM/YYYY"
                      />
                      <span
                        className="input-icon"
                        onClick={() => document.querySelector('#registrationDate').focus()}
                        style={{ cursor: 'pointer', position: 'absolute' }}
                      >
                        <CiCalendarDate size={20} />
                      </span>
                    </div>
                    {vehicleErrors.registrationDate && <small className="text-danger">{vehicleErrors.registrationDate}</small>}
                  </FormGroup>
                </Col>
              </Row>
              <Button className="proceed-button">Proceed</Button>
            </Form>
          </CardBody>
        </Card>
      </Collapse>

      {/* Previous Policy Details Section */}
      <div onClick={togglePolicyDetails}>
        <div className="icon-text">
          {isVehicleDetailsOpen &&
            <Card className='details-bottom-card-collapsed-container'>
              <VehicleDetailsCardHeader iconImage={policyIcon2}
                title={'Previous policy details'}
                text={'Your answers help us find the best plans for you!'}
                downArrow={true} />
            </Card>}
        </div>
        <i className={isPolicyDetailsOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
      </div>
      <Collapse isOpen={isPolicyDetailsOpen}>
        <Card className='details-bottom-card-expanded-container'>
          <VehicleDetailsCardHeader iconImage={policyIcon}
            title={'Previous policy details'}
            text={'Your answers help us find the best plans for you!'} />
          <hr className='devider' />
          <CardBody>
            <Form onSubmit={handleSubmitPolicyDetails}>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="policyExpiryDate" className='font-600'>Existing Policy Expiry Date
                      <span style={{ color: "red" }}> *</span>
                    </Label>
                    <div className="d-flex align-items-center" style={{ position: 'relative' }}>
                      {/* Input field with calendar icon */}
                      <DatePicker
                        style={{ width: '100%' }}
                        selected={policyExpiryDate}
                        id='policyExpiryDate'
                        onChange={(date) => setPolicyDetails({ ...policyDetails, policyExpiryDate: date })}
                        className="form-control w-full" /* Responsive input */
                        wrapperClassName="w-full"
                        dateFormat="dd/MM/yyyy"
                        placeholderText="DD/MM/YYYY"
                      />
                      {/* Calendar icon next to input */}
                      <span
                        className="input-icon"
                        onClick={() => document.querySelector('#policyExpiryDate').focus()}
                        style={{ cursor: 'pointer', position: 'absolute' }}
                      >
                        <CiCalendarDate size={20} />
                      </span>
                    </div>
                    {policyErrors.policyExpiryDate && <small className="text-danger">{policyErrors.policyExpiryDate}</small>}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="previousInsurer" className='font-600'>Previous Insurer
                      <span style={{ color: "red" }}> *</span>
                    </Label>
                    <div className="d-flex gap-4"></div>
                    <Select
                      id="previousInsurer"
                      value={insurers.find(option => option.value === policyDetails.previousInsurer) || null}
                      onChange={(selectedOption) => setPolicyDetails({ ...policyDetails, previousInsurer: selectedOption.value })}
                      options={insurers}
                      placeholder="Select Insurer"
                      isClearable
                    />
                  {policyErrors.previousInsurer && <small className="text-danger">{policyErrors.previousInsurer}</small>}
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup tag="fieldset">
                    <Label className='font-600'>Previous Policy Type
                      <span style={{ color: "red" }}> *</span>
                    </Label>
                    <div className="d-flex gap-4">
                      <FormGroup check>
                        <Label check inline>
                          <Input
                            type="radio"
                            name="policyType"
                            value="comprehensive"
                            checked={policyType === 'comprehensive'}
                            onChange={(e) => setPolicyDetails({ ...policyDetails, policyType: e.target.value })}
                          />
                          Comprehensive
                        </Label>
                      </FormGroup>

                      <FormGroup check>
                        <Label check inline>
                          <Input
                            type="radio"
                            name="policyType"
                            value="third-party"
                            checked={policyType === 'third-party'}
                            onChange={(e) => setPolicyDetails({ ...policyDetails, policyType: e.target.value })}
                          />
                          Third Party
                        </Label>
                        {policyErrors.policyType && <small className="text-danger">{vehicleErrors.policyType}</small>}
                      </FormGroup>
                    </div>

                  </FormGroup>
                </Col>
                {/* <Col md={6}>
                  <FormGroup tag="fieldset">
                    <Label className='font-600'>Claims Made In Existing Policy
                      <span style={{ color: "red" }}> *</span>
                    </Label>
                    <div className="d-flex gap-4">
                      <FormGroup check>
                        <Label check inline>
                          <Input
                            type="radio"
                            name="claimsMade"
                            value="yes"
                            checked={claimsMade === 'yes'}
                            onChange={(e) => setClaimsMade(e.target.value)}
                          />
                          Yes
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check inline>
                          <Input
                            type="radio"
                            name="claimsMade"
                            value="no"
                            checked={claimsMade === 'no'}
                            onChange={(e) => setClaimsMade(e.target.value)}
                          />
                          No
                        </Label>
                      </FormGroup>
                    </div>
                  </FormGroup>
                </Col> */}
                <Col md={6}>
                  <FormGroup tag="fieldset">
                    <Label className="font-600">
                      Claims Made In Existing Policy
                      <span style={{ color: "red" }}> *</span>
                    </Label>
                    <div className="d-flex gap-4 align-items-center">
                      <div className="toggle-switch">
                        <Input
                          type="checkbox"
                          id="claimsMadeToggle"
                          checked={claimsMade === 'yes'}
                          onChange={(e) =>
                            setPolicyDetails({ ...policyDetails, claimsMade: e.target.checked ? 'yes' : 'no' })
                          }
                        />
                        <Label className="toggle-label" for="claimsMadeToggle">
                          <span className="toggle-inner"></span>
                          <span className="toggle-switch-handle"></span>
                        </Label>
                      </div>
                      <div>{claimsMade === 'yes' ? 'Yes' : 'No'}</div>
                    </div>
                    {policyErrors.claimsMade && <small className="text-danger">{vehicleErrors.claimsMade}</small>}
                  </FormGroup>
                </Col>

              </Row>
              <FormGroup tag="fieldset">
                <Label className='font-600'>Permit Type
                  <span style={{ color: "red" }}> *</span>
                </Label>
                <div className='d-flex gap-4'>
                  <FormGroup check>
                    <Label check inline>
                      <Input
                        type="radio"
                        name="permitType"
                        value="private"
                        checked={permitType === 'private'}
                        onChange={(e) => setPolicyDetails({ ...policyDetails, permitType: e.target.value })}
                      />
                      Private
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check inline>
                      <Input
                        type="radio"
                        name="permitType"
                        value="public"
                        checked={permitType === 'public'}
                        onChange={(e) => setPolicyDetails({ ...policyDetails, permitType: e.target.value })}
                      />
                      Public
                    </Label>
                    {policyErrors.permitType && <small className="text-danger">{vehicleErrors.permitType}</small>}
                  </FormGroup>
                </div>
              </FormGroup>
              <Button onClick={handleSubmitPolicyDetails} className='proceed-button'>Proceed</Button>
            </Form>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default VehicleDetailsRight;
