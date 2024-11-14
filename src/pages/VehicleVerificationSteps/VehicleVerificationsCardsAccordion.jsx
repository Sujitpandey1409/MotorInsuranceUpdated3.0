import React, { useState } from 'react'
import { Button, Collapse, Card, CardBody, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import VehicleVerificationCardHeader from './VehicleVerificationCardHeader'
import './VehicleVerificationsCardsAccordion.css'
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { CiCalendarDate } from 'react-icons/ci';


export default function VehicleVerificationsCardsAccordion({ stepsActiveState,
    stepsDoneState,
    toggleCKYCDetails,
    handleSubmitCKYCDetails,
    toggleVehicleDetails,
    handleSubmitVehicleDetails,
    toggleCustomerDetails,
    handleSubmitCustomerDetails,
    toggleNomineeDetails,
    handleSubmitNomineeDetails, sbmttActn, setSbmttActn }) {
    const navigate = useNavigate();
    // states for form CKYC fields
    const [policyType, setPolicyType] = useState('');
    const [panCard, setPanCard] = useState('');
    const [aadharNumber, setAadharNumber] = useState('');
    const [otherId, setOtherId] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    // states for form Vehicle Details fields
    const [engineNumber, setEngineNumber] = useState('');
    const [chassisNumber, setChassisNumber] = useState('');
    const [previousPolicyNumber, setPreviousPolicyNumber] = useState('');
    const [vehicleOnLoan, setVehicleOnLoan] = useState('');

    // State for form Customer Detail fields
    const [cFirstName, setCFirstName] = useState('');
    const [clastName, setCLastName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [city, setCity] = useState('');
    const [cAddress, setCAddress] = useState('');
    const [cState, setCState] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [gender, setGender] = useState('');

    // State for form Nominee fields
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nomineeAge, setNomineeAge] = useState('');
    const [relationship, setRelationship] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');


    // Define states for validation errors
    const [errorsKyc, setErrorsKyc] = useState({});
    const [errorsVehicles, setErrorsVehicles] = useState({});
    const [errorsCustomer, setErrorsCustomer] = useState({});
    const [errorsNominee, setErrorsNominee] = useState({});
    // const [sbmttActn, setSbmttActn] = useState(false)

    const countErrors = (errors) => {
        return Object.values(errors).filter((error) => error !== '').length;
    };

    const validateFormCkyc = () => {
        const newErrors = {};

        if (!policyType) {
            newErrors.policyType = 'Please select a CKYC option';
        }

        if (policyType === 'PAN' && !panCard) {
            newErrors.panCard = 'PAN Card number is required';
        } else if (policyType === 'PAN' && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panCard)) {
            newErrors.panCard = 'Please enter a valid PAN Card number';
        }

        if (policyType === 'Aadhar' && !aadharNumber) {
            newErrors.aadharNumber = 'Aadhar number is required';
        } else if (policyType === 'Aadhar' && !/^\d{12}$/.test(aadharNumber)) {
            newErrors.aadharNumber = 'Please enter a valid 12-digit Aadhar number';
        }

        if (policyType === 'Other' && !otherId) {
            newErrors.otherId = 'Please provide the ID for the selected "Other" option';
        }

        if (!dateOfBirth) {
            newErrors.dateOfBirth = 'Date of Birth is required';
        }

        if (!agreeTerms) {
            newErrors.agreeTerms = 'You must agree to the terms';
        }

        setErrorsKyc(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmitCkyc = (e) => {
        e.preventDefault();
        if (validateFormCkyc()) {
            // If validation passes, proceed with form submission
            const formData = {
                policyType,
                panCard,
                aadharNumber,
                otherId,
                dateOfBirth,
                agreeTerms
            };
            handleSubmitCKYCDetails(formData);
        }
    };


    const validateFormVehicle = () => {
        const newErrors = {};

        if (!engineNumber) {
            newErrors.engineNumber = 'Engine Number is required';
        }

        if (!chassisNumber) {
            newErrors.chassisNumber = 'Chassis Number is required';
        }

        if (!previousPolicyNumber) {
            newErrors.previousPolicyNumber = 'Previous Policy Number is required';
        }

        if (!vehicleOnLoan) {
            newErrors.vehicleOnLoan = 'Please select whether your vehicle is on loan';
        }

        setErrorsVehicles(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmitVehicle = (e) => {
        e.preventDefault();
        if (validateFormVehicle()) {
            // If validation passes, proceed with form submission
            const formData = {
                engineNumber,
                chassisNumber,
                previousPolicyNumber,
                vehicleOnLoan
            };
            handleSubmitVehicleDetails(formData);
        }
    };

    // Validation logic
    const validateFormCustomer = () => {
        const newErrors = {};

        if (!cFirstName) {
            newErrors.firstName = 'First Name is required';
        }
        if (!mobileNumber) {
            newErrors.mobileNumber = 'Mobile Number is required';
        } else if (!/^\d{10}$/.test(mobileNumber)) {
            newErrors.mobileNumber = 'Mobile Number must be 10 digits';
        }
        if (!cAddress) {
            newErrors.address = 'Address is required';
        }
        if (!clastName) {
            newErrors.lastName = 'Last Name is required';
        }

        if (!pinCode) {
            newErrors.pinCode = 'Pin Code is required';
        }

        if (!city) {
            newErrors.city = 'City is required';
        }

        if (!cState) {
            newErrors.state = 'State is required';
        }

        if (!maritalStatus) {
            newErrors.maritalStatus = 'Marital Status is required';
        }

        if (!gender) {
            newErrors.gender = 'Gender is required';
        }

        setErrorsCustomer(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmitCustomer = (e) => {
        e.preventDefault();
        if (validateFormCustomer()) {
            const formData = {
                firstName: cFirstName,
                lastName: clastName,
                mobileNumber,
                pinCode,
                city,
                address: cAddress,
                state: cState,
                maritalStatus,
                gender
            };
            handleSubmitCustomerDetails(formData); // Pass form data to parent handler
        }
    };

    // Validation logic
    const validateFormNominee = () => {
        const newErrors = {};

        if (!firstName) {
            newErrors.firstName = 'Nominee First Name is required';
        }
        if (!lastName) {
            newErrors.lastName = 'Nominee Last Name is required';
        }
        if (!address) {
            newErrors.address = 'Nominee Address is required';
        }
        if (!middleName) {
            newErrors.middleName = 'Nominee Middle Name is required';
        }

        if (!nomineeAge) {
            newErrors.nomineeAge = 'Nominee Age is required';
        }

        if (!relationship) {
            newErrors.relationship = 'Relationship is required';
        }

        if (!state) {
            newErrors.state = 'State is required';
        }

        setErrorsNominee(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle validation error while whole form submit
    const handleValidationErrors = () => {

        // Scroll to the specific element
        const scrollTo = (id) => {
            const element = document.querySelector(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        let errorFound = false;  // To stop after the first error is found

        // Switch case to check errors in sequence
        switch (true) {
            case countErrors(errorsNominee) > 0:
                scrollTo('#nominee');
                toggleNomineeDetails();
                errorFound = true;
                break;

            case countErrors(errorsKyc) > 0 || dateOfBirth.length == 0:
                scrollTo('#CKYC');
                toggleCKYCDetails();
                errorFound = true;
                break;

            case countErrors(errorsVehicles) > 0 || engineNumber.length == 0:
                scrollTo('#vehicleDetail');
                toggleVehicleDetails();
                errorFound = true;
                break;

            case countErrors(errorsCustomer) > 0 || cFirstName.length == 0:
                scrollTo('#customer');
                toggleCustomerDetails();
                errorFound = true;
                break;

            default:
                break;
        }

        // If an error is found, stop further execution
        if (errorFound) {
            setSbmttActn(true) // to add blinking action
            return;
        }
    };

    const handleSubmitNominee = (e) => {
        e.preventDefault();
        if (validateFormNominee() && validateFormCkyc() && validateFormCustomer() && validateFormVehicle()) {
            const formData = {
                firstName,
                middleName,
                lastName,
                nomineeAge,
                relationship,
                address,
                state,
            };
            handleSubmitNomineeDetails(formData); // Pass form data to parent handler
            navigate('/payment-status'); // Redirect to payment status page after submission
        }
        handleValidationErrors()
    };




    return (
        <div className="container" style={{ background: '#F4F4F4', padding: '0', fontSize: '14px', display: 'grid' }}>
            <div style={{ margin: '15px 0' }} id='CKYC'>
                <div onClick={toggleCKYCDetails}>
                    {stepsActiveState !== 'step1' && (
                        <VehicleVerificationCardHeader
                            title={'CKYC of the Customer'}
                            downArrow={true}
                            done={stepsDoneState.step1}
                        />
                    )}
                </div>
                <Collapse isOpen={stepsActiveState === 'step1'}>
                    <Card className='verification-card-style'>
                        <VehicleVerificationCardHeader title={'CKYC OF the Customer'} downArrow={false} />
                        <CardBody>
                            <Form onSubmit={handleSubmitCkyc}>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup tag="fieldset">
                                            <Label className='font-600'>
                                                Enter CKYC Detail<span style={{ color: "red" }}> *</span>
                                            </Label>
                                            <div className="d-flex gap-4">
                                                {['CKYC', 'PAN', 'Aadhar', 'Other'].map(option => (
                                                    <FormGroup check key={option}>
                                                        <Label check inline className='custom-label-radio'>
                                                            <Input
                                                                type="radio"
                                                                name="policyType"
                                                                value={option}
                                                                checked={policyType === option}
                                                                onChange={(e) => {
                                                                    setPolicyType(e.target.value);
                                                                    // Reset the related fields when option changes
                                                                    setPanCard('');
                                                                    setAadharNumber('');
                                                                    setOtherId('');
                                                                    setErrorsKyc({})
                                                                }}
                                                            />
                                                            {option}
                                                        </Label>
                                                    </FormGroup>
                                                ))}
                                            </div>
                                            {errorsKyc.policyType && <div className="text-danger">{errorsKyc.policyType}</div>}
                                        </FormGroup>
                                    </Col>
                                </Row>

                                {/* Dynamic Inputs based on CKYC Option */}
                                <Row form>
                                    {policyType === 'PAN' && (
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="panCard" className='font-600'>
                                                    PAN Card<span style={{ color: "red" }}> *</span>
                                                </Label>
                                                <Input
                                                    type="text"
                                                    name="panCard"
                                                    placeholder='Enter PAN Card Number'
                                                    id="panCard"
                                                    value={panCard}
                                                    invalid={errorsKyc.panCard}
                                                    onChange={(e) => { setPanCard(e.target.value); setErrorsKyc({ ...errorsKyc, panCard: '' }) }}
                                                    className={`custom-input form-control ${sbmttActn && (!panCard || errorsKyc.panCard) ? 'blink-error' : ''}`}
                                                />
                                                {errorsKyc.panCard && <div className="text-danger">{errorsKyc.panCard}</div>}
                                            </FormGroup>
                                        </Col>
                                    )}

                                    {policyType === 'Aadhar' && (
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="aadharNumber" className='font-600'>
                                                    Aadhar Number<span style={{ color: "red" }}> *</span>
                                                </Label>
                                                <Input
                                                    type="text"
                                                    name="aadharNumber"
                                                    placeholder='Enter 12-digit Aadhar Number'
                                                    id="aadharNumber"
                                                    value={aadharNumber}
                                                    invalid={errorsKyc.aadharNumber}
                                                    onChange={(e) => { setAadharNumber(e.target.value); setErrorsKyc({ ...errorsKyc, aadharNumber: '' }) }}
                                                    className={`custom-input form-control ${sbmttActn && (!aadharNumber || errorsKyc.aadharNumber) ? 'blink-error' : ''}`}
                                                />
                                                {errorsKyc.aadharNumber && <div className="text-danger">{errorsKyc.aadharNumber}</div>}
                                            </FormGroup>
                                        </Col>
                                    )}

                                    {policyType === 'Other' && (
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="otherId" className='font-600'>
                                                    Other ID<span style={{ color: "red" }}> *</span>
                                                </Label>
                                                <Input
                                                    type="text"
                                                    name="otherId"
                                                    placeholder='Enter ID for Other Option'
                                                    id="otherId"
                                                    value={otherId}
                                                    invalid={errorsKyc.otherId}
                                                    onChange={(e) => { setOtherId(e.target.value); setErrorsKyc({ ...errorsKyc, otherId: '' }) }}
                                                    className={`custom-input form-control ${sbmttActn && (!otherId || errorsKyc.otherId) ? 'blink-error' : ''}`}
                                                />
                                                {errorsKyc.otherId && <div className="text-danger">{errorsKyc.otherId}</div>}
                                            </FormGroup>
                                        </Col>
                                    )}

                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="dateOfBirth" className='font-600'>
                                                Date of Birth<span style={{ color: "red" }}> *</span>
                                            </Label>
                                            <div className="d-flex align-items-center" style={{ position: 'relative' }}>
                                                {/* Input field with calendar icon */}
                                                <DatePicker
                                                    style={{ width: '100%' }}
                                                    selected={dateOfBirth}
                                                    id='dateOfBirth'
                                                    wrapperClassName="w-full"
                                                    dateFormat="dd/MM/yyyy"
                                                    placeholderText="DD/MM/YYYY"
                                                    onChange={(date) => setDateOfBirth(date)}
                                                    maxDate={new Date()}
                                                    className={`form-control w-full custom-input form-control ${sbmttActn && (!dateOfBirth || errorsKyc.dateOfBirth) ? 'blink-error' : ''}`}
                                                />
                                                <span
                                                    className="input-icon"
                                                    onClick={() => document.querySelector('#dateOfBirth').focus()}
                                                    style={{ cursor: 'pointer', position: 'absolute' }}
                                                >
                                                    <CiCalendarDate size={20} />
                                                </span>
                                            </div>
                                            {/* <Input
                                                type="date"
                                                name="dateOfBirth"
                                                id="dateOfBirth"
                                                value={dateOfBirth}
                                                onChange={(e) => setDateOfBirth(e.target.value)}
                                            /> */}
                                            {errorsKyc.dateOfBirth && <div className="text-danger">{errorsKyc.dateOfBirth}</div>}
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col md={6}>
                                        <FormGroup check>
                                            <Input
                                                type="checkbox"
                                                name="agree"
                                                id="agree"
                                                checked={agreeTerms}
                                                onChange={(e) => { setAgreeTerms(e.target.checked); setErrorsKyc({ ...errorsKyc, agreeTerms: '' }) }}
                                            />
                                            <label style={{ fontSize: '12px', color: '#0E233C80', margin: '4px' }} htmlFor="agree">
                                                By continuing I agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
                                            </label>
                                            {errorsKyc.agreeTerms && <div className="text-danger">{errorsKyc.agreeTerms}</div>}
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Button type="submit" className="proceed-button">Proceed</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
            <div style={{ margin: '15px 0' }} id='vehicleDetail'>
                <div onClick={toggleVehicleDetails}>
                    {stepsActiveState !== 'step2' && (
                        <VehicleVerificationCardHeader
                            title={'Vehicle Detail'}
                            downArrow={true}
                            done={stepsDoneState.step2}
                        />
                    )}
                </div>
                <Collapse isOpen={stepsActiveState === 'step2'}>
                    <Card className='verification-card-style'>
                        <VehicleVerificationCardHeader title={'Vehicle Detail'} downArrow={false} />
                        <CardBody>
                            <Form onSubmit={handleSubmitVehicle}>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="engineNumber" className='font-600'>
                                                Engine Number<span style={{ color: "red" }}> *</span>
                                            </Label>
                                            <Input
                                                type="text"
                                                name="engineNumber"
                                                id="engineNumber"
                                                value={engineNumber}
                                                invalid={errorsVehicles.engineNumber}
                                                onChange={(e) => { setEngineNumber(e.target.value); setErrorsVehicles({ ...errorsVehicles, engineNumber: '' }) }}
                                                className={`form-control ${sbmttActn && (errorsVehicles.engineNumber || !engineNumber) ? 'blink-error' : ''}`}
                                            />
                                            {errorsVehicles.engineNumber && <div className="text-danger">{errorsVehicles.engineNumber}</div>}
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="chassisNumber" className='font-600'>
                                                Chassis Number<span style={{ color: "red" }}> *</span>
                                            </Label>
                                            <Input
                                                type="text"
                                                name="chassisNumber"
                                                id="chassisNumber"
                                                value={chassisNumber}
                                                invalid={errorsVehicles.chassisNumber}
                                                onChange={(e) => { setChassisNumber(e.target.value); setErrorsVehicles({ ...errorsVehicles, chassisNumber: '' }) }}
                                                className={`form-control ${sbmttActn && (errorsVehicles.chassisNumber || !chassisNumber) ? 'blink-error' : ''}`}
                                            />
                                            {errorsVehicles.chassisNumber && <div className="text-danger">{errorsVehicles.chassisNumber}</div>}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="previousPolicyNumber" className='font-600'>
                                                Previous Policy Number<span style={{ color: "red" }}> *</span>
                                            </Label>
                                            <Input
                                                type="text"
                                                name="previousPolicyNumber"
                                                id="previousPolicyNumber"
                                                value={previousPolicyNumber}
                                                invalid={errorsVehicles.previousPolicyNumber}
                                                onChange={(e) => { setPreviousPolicyNumber(e.target.value); setErrorsVehicles({ ...errorsVehicles, previousPolicyNumber: '' }) }}
                                                className={`form-control ${sbmttActn && (errorsVehicles.previousPolicyNumber || !previousPolicyNumber) ? 'blink-error' : ''}`}
                                            />
                                            {errorsVehicles.previousPolicyNumber && <div className="text-danger">{errorsVehicles.previousPolicyNumber}</div>}
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup tag="fieldset">
                                            <Label className='font-600'>
                                                Is your Vehicle on loan?<span style={{ color: "red" }}> *</span>
                                            </Label>
                                            <div className="d-flex gap-4">
                                                <FormGroup check>
                                                    <Label check inline className='custom-label-radio'>
                                                        <Input
                                                            type="radio"
                                                            name="vehicleOnLoan"
                                                            value="Yes"
                                                            checked={vehicleOnLoan === 'Yes'}
                                                            onChange={(e) => { setVehicleOnLoan(e.target.value); setErrorsVehicles({ ...errorsVehicles, vehicleOnLoan: '' }) }}
                                                        />
                                                        Yes
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check>
                                                    <Label check inline className='custom-label-radio'>
                                                        <Input
                                                            type="radio"
                                                            name="vehicleOnLoan"
                                                            value="No"
                                                            checked={vehicleOnLoan === 'No'}
                                                            onChange={(e) => { setVehicleOnLoan(e.target.value); setErrorsVehicles({ ...errorsVehicles, vehicleOnLoan: '' }) }}
                                                        />
                                                        No
                                                    </Label>
                                                </FormGroup>
                                            </div>
                                            {errorsVehicles.vehicleOnLoan && <div className="text-danger">{errorsVehicles.vehicleOnLoan}</div>}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Button type="submit" className="proceed-button">Proceed</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
            <div style={{ margin: '15px 0' }} id='customer'>
                <div onClick={toggleCustomerDetails}>
                    {stepsActiveState !== 'step3' && (
                        <VehicleVerificationCardHeader
                            title={'Customer Detail'}
                            downArrow={true}
                            done={stepsDoneState.step3}
                        />
                    )}
                </div>
                <Collapse isOpen={stepsActiveState === 'step3'}>
                    <Card className='verification-card-style'>
                        <VehicleVerificationCardHeader title={'Customer Detail'} downArrow={false} />
                        <CardBody>
                            <Form onSubmit={handleSubmitCustomer}>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="firstName" className='font-600'>
                                                First Name
                                            </Label>
                                            <Input
                                                placeholder='First Name'
                                                type="text"
                                                id="firstName"
                                                value={cFirstName}
                                                onChange={(e) => { setCFirstName(e.target.value); setErrorsCustomer({ ...errorsCustomer, firstName: '' }) }}
                                                invalid={errorsCustomer.firstName}
                                                className={`form-control ${sbmttActn && (errorsCustomer.firstName || !cFirstName) ? 'blink-error' : ''}`}
                                            />
                                            {errorsCustomer.firstName && <div className="text-danger">{errorsCustomer.firstName}</div>}
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="lastName" className='font-600'>
                                                Last Name<span style={{ color: "red" }}> *</span>
                                            </Label>
                                            <Input
                                                placeholder='Last Name'
                                                type="text"
                                                id="lastName"
                                                value={clastName}
                                                onChange={(e) => { setCLastName(e.target.value); setErrorsCustomer({ ...errorsCustomer, lastName: '' }) }}
                                                invalid={errorsCustomer.lastName}
                                                className={`form-control ${sbmttActn && (errorsCustomer.lastName || !clastName) ? 'blink-error' : ''}`}
                                            />
                                            {errorsCustomer.lastName && <div className="text-danger">{errorsCustomer.lastName}</div>}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="mobileNumber" className='font-600'>
                                                Mobile Number
                                            </Label>
                                            <Input
                                                placeholder='Mobile Number'
                                                type="number"
                                                id="mobileNumber"
                                                value={mobileNumber}
                                                onChange={(e) => { setMobileNumber(e.target.value); setErrorsCustomer({ ...errorsCustomer, mobileNumber: '' }) }}
                                                invalid={errorsCustomer.mobileNumber}
                                                className={`form-control ${sbmttActn && (errorsCustomer.mobileNumber || !mobileNumber) ? 'blink-error' : ''}`}
                                            />
                                            {errorsCustomer.mobileNumber && <div className="text-danger">{errorsCustomer.mobileNumber}</div>}
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label for="pinCode" className='font-600'>
                                                Pin Code<span style={{ color: "red" }}> *</span>
                                            </Label>
                                            <Input
                                                placeholder='Pin Code'
                                                type="number"
                                                id="pinCode"
                                                value={pinCode}
                                                onChange={(e) => { setPinCode(e.target.value); setErrorsCustomer({ ...errorsCustomer, pinCode: '' }) }}
                                                invalid={errorsCustomer.pinCode}
                                                className={`form-control ${sbmttActn && (errorsCustomer.pinCode || !pinCode) ? 'blink-error' : ''}`}
                                            />
                                            {errorsCustomer.pinCode && <div className="text-danger">{errorsCustomer.pinCode}</div>}
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label for="city" className='font-600'>
                                                City<span style={{ color: "red" }}> *</span>
                                            </Label>
                                            <Input
                                                placeholder='City'
                                                type="text"
                                                id="city"
                                                value={city}
                                                onChange={(e) => { setCity(e.target.value); setErrorsCustomer({ ...errorsCustomer, city: '' }) }}
                                                invalid={errorsCustomer.city}
                                                className={`form-control ${sbmttActn && (errorsCustomer.city || !city) ? 'blink-error' : ''}`}
                                            />
                                            {errorsCustomer.city && <div className="text-danger">{errorsCustomer.city}</div>}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="address" className='font-600'>
                                                Address
                                            </Label>
                                            <Input
                                                placeholder='Address'
                                                type="text"
                                                id="address"
                                                value={cAddress}
                                                onChange={(e) => { setCAddress(e.target.value); setErrorsCustomer({ ...errorsCustomer, address: '' }) }}
                                                invalid={errorsCustomer.address}
                                                className={`form-control ${sbmttActn && (errorsCustomer.address || !cAddress) ? 'blink-error' : ''}`}
                                            />
                                            {errorsCustomer.address && <div className="text-danger">{errorsCustomer.address}</div>}
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="state" className='font-600'>
                                                State<span style={{ color: "red" }}> *</span>
                                            </Label>
                                            <Input
                                                placeholder='State'
                                                type="text"
                                                id="state"
                                                value={cState}
                                                onChange={(e) => { setCState(e.target.value); setErrorsCustomer({ ...errorsCustomer, state: '' }) }}
                                                invalid={errorsCustomer.state}
                                                className={`form-control ${sbmttActn && (errorsCustomer.state || !cState) ? 'blink-error' : ''}`}
                                            />
                                            {errorsCustomer.state && <div className="text-danger">{errorsCustomer.state}</div>}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="maritalStatus" className='font-600'>
                                                Marital Status<span style={{ color: "red" }}> *</span>
                                            </Label>
                                            <Input
                                                placeholder='Marital Status'
                                                type="text"
                                                id="maritalStatus"
                                                value={maritalStatus}
                                                onChange={(e) => { setMaritalStatus(e.target.value); setErrorsCustomer({ ...errorsCustomer, maritalStatus: '' }) }}
                                                invalid={errorsCustomer.maritalStatus}
                                                className={`form-control ${sbmttActn && (errorsCustomer.maritalStatus || !maritalStatus) ? 'blink-error' : ''}`}
                                            />
                                            {errorsCustomer.maritalStatus && <div className="text-danger">{errorsCustomer.maritalStatus}</div>}
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup tag="fieldset">
                                            <Label className='font-600'>
                                                Gender<span style={{ color: "red" }}> *</span>
                                            </Label>
                                            <div className="d-flex gap-4">
                                                <FormGroup check>
                                                    <Label check inline className='custom-label-radio'>
                                                        <Input
                                                            type="radio"
                                                            name="gender"
                                                            value="Male"
                                                            checked={gender === 'Male'}
                                                            onChange={(e) => setGender(e.target.value)}
                                                        />
                                                        Male
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check>
                                                    <Label check inline className='custom-label-radio'>
                                                        <Input
                                                            type="radio"
                                                            name="gender"
                                                            value="Female"
                                                            checked={gender === 'Female'}
                                                            onChange={(e) => { setGender(e.target.value); setErrorsCustomer({ ...errorsCustomer, gender: '' }) }}
                                                        />
                                                        Female
                                                    </Label>
                                                </FormGroup>
                                            </div>
                                            {errorsCustomer.gender && <div className="text-danger">{errorsCustomer.gender}</div>}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Button type="submit" className="proceed-button">Proceed</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
            <div style={{ margin: '15px 0' }} id='nominee'>
                <div onClick={toggleNomineeDetails}>
                    {stepsActiveState !== 'step4' && (
                        <VehicleVerificationCardHeader
                            title={'Nominee Detail'}
                            downArrow={true}
                            done={stepsDoneState.step4}
                        />
                    )}
                </div>
                <Collapse isOpen={stepsActiveState === 'step4'}>
                    <Card className='verification-card-style'>
                        <VehicleVerificationCardHeader title={'Nominee Detail'} downArrow={false} />
                        <CardBody>
                            <Form onSubmit={handleSubmitNominee}>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="firstName" className='font-600'>
                                                First Name
                                            </Label>
                                            <Input
                                                placeholder='First Name'
                                                type="text"
                                                id="firstName"
                                                value={firstName}
                                                onChange={(e) => { setFirstName(e.target.value); setErrorsNominee({ ...errorsNominee, firstName: '' }) }}
                                                invalid={errorsNominee.firstName}
                                                className={`form-control ${sbmttActn && (errorsNominee.firstName || !firstName) ? 'blink-error' : ''}`}
                                            />
                                            {errorsNominee.firstName && <div className="text-danger">{errorsNominee.firstName}</div>}
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="middleName" className='font-600'>
                                                Middle Name<span style={{ color: "red" }}> *</span>
                                            </Label>
                                            <Input
                                                placeholder='Middle Name'
                                                type="text"
                                                id="middleName"
                                                value={middleName}
                                                onChange={(e) => { setMiddleName(e.target.value); setErrorsNominee({ ...errorsNominee, middleName: '' }) }}
                                                invalid={errorsNominee.middleName}
                                                className={`form-control ${sbmttActn && (errorsNominee.middlename || !middleName) ? 'blink-error' : ''}`}
                                            />
                                            {errorsNominee.middleName && <div className="text-danger">{errorsNominee.middleName}</div>}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="lastName" className='font-600'>
                                                Last Name
                                            </Label>
                                            <Input
                                                placeholder='Last Name'
                                                type="text"
                                                id="lastName"
                                                value={lastName}
                                                onChange={(e) => { setLastName(e.target.value); setErrorsNominee({ ...errorsNominee, lastName: '' }) }}
                                                invalid={errorsNominee.lastName}
                                                className={`form-control ${sbmttActn && (errorsNominee.lastName || !lastName) ? 'blink-error' : ''}`}
                                            />
                                            {errorsNominee.lastName && <div className="text-danger">{errorsNominee.lastName}</div>}
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label for="nomineeAge" className='font-600'>
                                                Nominee Age<span style={{ color: "red" }}> *</span>
                                            </Label>
                                            <Input
                                                placeholder='Nominee Age'
                                                type="number"
                                                id="nomineeAge"
                                                value={nomineeAge}
                                                onChange={(e) => { setNomineeAge(e.target.value); setErrorsNominee({ ...errorsNominee, nomineeAge: '' }) }}
                                                invalid={errorsNominee.nomineeAge}
                                                className={`form-control ${sbmttActn && (errorsNominee.nomineeAge || !nomineeAge) ? 'blink-error' : ''}`}
                                            />
                                            {errorsNominee.nomineeAge && <div className="text-danger">{errorsNominee.nomineeAge}</div>}
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label for="relationship" className='font-600'>
                                                Relationship<span style={{ color: "red" }}> *</span>
                                            </Label>
                                            <Input
                                                placeholder='Relationship'
                                                type="text"
                                                id="relationship"
                                                value={relationship}
                                                onChange={(e) => { setRelationship(e.target.value); setErrorsNominee({ ...errorsNominee, relationship: '' }) }}
                                                invalid={errorsNominee.relationship}
                                                className={`form-control ${sbmttActn && (errorsNominee.relationship || !relationship) ? 'blink-error' : ''}`}

                                            />
                                            {errorsNominee.relationship && <div className="text-danger">{errorsNominee.relationship}</div>}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="address" className='font-600'>
                                                Address
                                            </Label>
                                            <Input
                                                placeholder='Address'
                                                type="text"
                                                id="address"
                                                value={address}
                                                onChange={(e) => { setAddress(e.target.value); setErrorsNominee({ ...errorsNominee, address: '' }) }}
                                                invalid={errorsNominee.address}
                                                className={`form-control ${sbmttActn && (errorsNominee.address || !address) ? 'blink-error' : ''}`}
                                            />
                                            {errorsNominee.address && <div className="text-danger">{errorsNominee.address}</div>}
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="state" className='font-600'>
                                                State<span style={{ color: "red" }}> *</span>
                                            </Label>
                                            <Input
                                                placeholder='State'
                                                type="text"
                                                id="state"
                                                value={state}
                                                onChange={(e) => { setState(e.target.value); setErrorsNominee({ ...errorsNominee, state: '' }) }}
                                                invalid={errorsNominee.state}
                                                className={`form-control ${sbmttActn && (errorsNominee.state || !state) ? 'blink-error' : ''}`}
                                            />
                                            {errorsNominee.state && <div className="text-danger">{errorsNominee.state}</div>}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Button type="submit" className="proceed-button">Proceed</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        </div>
    )
}
