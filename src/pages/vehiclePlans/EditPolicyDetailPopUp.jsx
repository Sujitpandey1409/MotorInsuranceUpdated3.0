import React, { useContext, useEffect, useRef, useState } from 'react';
import './EditPolicyDetailPopUp.css';
import { Button, Card, CardBody, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { IoMdClose } from 'react-icons/io';
import { VehicleContext } from '../../contexts/VehicleProvider';
import DatePicker from 'react-datepicker';
import { CiCalendarDate } from 'react-icons/ci';
import InsurerCard from './InsurerCard';

export default function EditPolicyDetailPopUp({ handleClose, isOpen, existingPolicyDate,
    setExistingPolicyDate, previousNCB, fuelType,
    setFuelType,
    setPreviousNCB }) {
    const [fuelTypePopUp, setFuelTypePopUp] = useState('');
    const [variantPopup, setVariantPopUp] = useState('');
    const [existingPolicyDatePopUp, setExistingPolicyDatePopUp] = useState('');
    const [expiryDatePopUp, setExpiryDatePopUp] = useState('');
    const [existingInsurerPopUp, setExistingInsurerPopUp] = useState('');
    const [previousNCBPopUp, setPreviousNCBPopUp] = useState('');

    const { vehicleDetails, setVehicleDetails, policyDetails, setPolicyDetails, selectedInsurers, setSelectedInsurers } = useContext(VehicleContext);
    const { manufacturer, model, variant, manufacturingYear, registrationDate } = vehicleDetails;
    const { policyExpiryDate, previousInsurer, policyType, claimsMade, permitType } = policyDetails;

    const popUpRef = useRef(null)
    // Validation errors
    const [errors, setErrors] = useState({
        fuelType: '',
        variant: '',
        existingPolicyDate: '',
        expiryDate: '',
        existingInsurerPopUp: '',
        previousNCB: ''
    });

    const validateDates = () => {
        let valid = true;
        let validationErrors = {};

        if (!fuelType) {
            validationErrors.fuelType = 'Fuel Type is required'
        }

        if (!variantPopup) {
            validationErrors.variantPopup = 'Variant is required'
        }

        if (!existingPolicyDatePopUp) {
            validationErrors.existingPolicyDate = 'Existing Policy Date is required';
            valid = false;
        }

        if (!expiryDatePopUp) {
            validationErrors.expiryDate = 'Expiry Date is required';
            valid = false;
        } else if (existingPolicyDate && policyExpiryDate && new Date(policyExpiryDate) <= new Date(existingPolicyDate)) {
            validationErrors.expiryDate = 'Expiry Date must be greater than Existing Policy Date';
            valid = false;
        }

        if (!existingInsurerPopUp) {
            validationErrors.existingInsurerPopUp = 'Existing Insurer is required'
        }
        if (!previousNCBPopUp) {
            validationErrors.previousNCBPopUp = 'Previous NCB is required'
        }

        setErrors(validationErrors);
        return valid;
    };

    const handleSubmitPolicyDetails = (e) => {
        e.preventDefault();

        if (!validateDates()) {
            return;
        }
        setFuelType(fuelTypePopUp)
        setVehicleDetails({ ...vehicleDetails, variant: variantPopup })
        setExistingPolicyDate(existingPolicyDatePopUp)
        setVehicleDetails({ ...vehicleDetails, policyExpiryDate: expiryDatePopUp })
        setVehicleDetails({...vehicleDetails, variant:variantPopup})
        setSelectedInsurers(existingInsurerPopUp)
        setPreviousNCB(previousNCBPopUp)

        console.log({
            fuelTypePopUp,
            variantPopup,
            existingPolicyDatePopUp,
            expiryDatePopUp,
            existingInsurerPopUp,
            previousNCBPopUp,
        });
        handleClose()
    };
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (popUpRef.current && !popUpRef.current.contains(e.target)) {
                handleClose();
            }
        }
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    })


    return (
        <div className="edit-policy-detail-popUp-container">
            <Card>
                <div ref={popUpRef} className="edit-policy-detail-popUp">
                    <div className="padding-header">
                        <span onClick={handleClose} className="close-Button">
                            <IoMdClose size={21} />
                        </span>
                        <p style={{ fontWeight: '700', fontSize: '17px' }}>Edit Policy Detail</p>
                    </div>
                    <hr className="" />
                    <CardBody>
                        <Form onSubmit={handleSubmitPolicyDetails}>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label className="font-600">Fuel type</Label>
                                        <Input
                                            type="select"
                                            value={fuelTypePopUp}
                                            onChange={(e) => setFuelTypePopUp(e.target.value)}
                                            invalid={errors.fuelType}
                                        >
                                            <option value="">Select</option>
                                            <option value="Diesel">Diesel</option>
                                            <option value="Petrol">Petrol</option>
                                        </Input>
                                        {errors.fuelType && <p className="text-danger">{errors.fuelType}</p>}
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label className="font-600">Variant</Label>
                                        <Input
                                            type="select"
                                            value={variantPopup}
                                            onChange={(e) => setVariantPopUp(e.target.value)}
                                            invalid={errors.variantPopup}
                                        >
                                            <option value="">Select</option>
                                            <option value="Variant1">Variant 1</option>
                                            <option value="Variant2">Variant 2</option>
                                        </Input>
                                        {errors.variantPopup && <p className="text-danger">{errors.variantPopup}</p>}
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label className="font-600">Existing Policy</Label>
                                        <div className={`d-flex align-items-center ${errors.existingPolicyDate && 'error-border-date'}`} style={{ position: 'relative' }}>
                                            {/* Input field with calendar icon */}
                                            <DatePicker
                                                style={{ width: '100%' }}
                                                selected={existingPolicyDatePopUp}
                                                id='existingPolicyDate'
                                                onChange={(date) => setExistingPolicyDatePopUp(date)}
                                                className="form-control w-full" /* Responsive input */
                                                wrapperClassName="w-full"
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText="DD/MM/YYYY"

                                            />
                                            {/* Calendar icon next to input */}
                                            <span
                                                className="input-icon"
                                                onClick={() => document.querySelector('#existingPolicyDate').focus()}
                                                style={{ cursor: 'pointer', position: 'absolute' }}
                                            >
                                                <CiCalendarDate size={20} />
                                            </span>
                                        </div>
                                        {errors.existingPolicyDate && <p className="text-danger">{errors.existingPolicyDate}</p>}
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label className="font-600">Expiry Date</Label>
                                        <div className={`d-flex align-items-center ${errors.expiryDate && 'error-border-date'}`} style={{ position: 'relative' }}>
                                            {/* Input field with calendar icon */}
                                            <DatePicker
                                                style={{ width: '100%' }}
                                                selected={expiryDatePopUp}
                                                id='policyExpiryDate'
                                                // onChange={(date) => setPolicyDetails({ ...policyDetails, policyExpiryDate: date })}
                                                onChange={(date) => setExpiryDatePopUp(date)}
                                                wrapperClassName="w-full"
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText="DD/MM/YYYY"
                                                className={`form-control w-full`}

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
                                        {errors.expiryDate && <p className="text-danger">{errors.expiryDate}</p>}
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label className="font-600">Existing Insurer</Label>
                                        <Input
                                            type="select"
                                            value={existingInsurerPopUp}
                                            onChange={(e) => setExistingInsurerPopUp(e.target.value)}
                                            invalid={errors.existingInsurerPopUp}
                                        >
                                            <option value="">Select</option>
                                            <option value="Insurer1">Bajaj Allianz</option>
                                            <option value="Insurer2">TATA AIG</option>
                                        </Input>
                                        {errors.existingInsurerPopUp && <p className="text-danger">{errors.existingInsurerPopUp}</p>}
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label className="font-600">Previous NCB</Label>
                                        <Input
                                            type="select"
                                            value={previousNCBPopUp}
                                            onChange={(e) => setPreviousNCBPopUp(e.target.value)}
                                            invalid={errors.previousNCBPopUp}
                                        >
                                            <option value="">Select</option>
                                            <option value="20%">20%</option>
                                            <option value="40%">40%</option>
                                        </Input>
                                        {errors.previousNCBPopUp && <p className="text-danger">{errors.previousNCBPopUp}</p>}
                                    </FormGroup>
                                </Col>
                            </Row>
                            <div className="plan-edit-policy-btn-container">
                                <Button onClick={handleClose} outline className="cancel-button">Cancel</Button>
                                <Button type="submit" className="proceed-button">Proceed</Button>
                            </div>
                        </Form>
                    </CardBody>
                </div>
            </Card>
        </div>
    );
}
