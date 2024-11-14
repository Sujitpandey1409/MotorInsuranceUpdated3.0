// LeftSectionCard.js
import React, { useContext, useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Row, Col } from 'reactstrap';
import { FaEdit, FaExclamationTriangle } from 'react-icons/fa';
import { FiEdit3 } from "react-icons/fi";
import EditPolicyDetailPopUp from './EditPolicyDetailPopUp';
import { FaChevronDown } from 'react-icons/fa6';
import { VehicleContext } from '../../contexts/VehicleProvider';

const LeftSectionCard = ({ IconImage, title, text, classNameRightSec, isFetchedForResponsive,
    setIsFetchedForResponsive }) => {
    const [fuelType, setFuelType] = useState('');
    const [existingInsurer, setExistingInsurer] = useState('');
    const [isEditPolicyDetailPopUp, setEditPolicyPopUp] = useState(false)
    const [existingPolicyDate, setExistingPolicyDate] = useState('');
    const [previousNCB, setPreviousNCB] = useState('');
    const { vehicleDetails, setVehicleDetails, policyDetails, setPolicyDetails, selectedInsurers, setSelectedInsurers } = useContext(VehicleContext);
    const { policyExpiryDate, previousInsurer, policyType, claimsMade, permitType } = policyDetails;
    let expDate = policyExpiryDate ? policyExpiryDate.toLocaleDateString('en-IN') : '';
    let existingDate = existingPolicyDate ? existingPolicyDate.toLocaleDateString('en-IN') : '';
    console.log(expDate, policyExpiryDate);

    const { manufacturer, model, variant, manufacturingYear, registrationDate } = vehicleDetails;
    return (
        <>
            {isEditPolicyDetailPopUp && <EditPolicyDetailPopUp
                isOpen={isEditPolicyDetailPopUp}
                fuelType={fuelType}
                setFuelType={setFuelType}
                existingPolicyDate={existingPolicyDate}
                previousNCB={previousNCB}
                setPreviousNCB={setPreviousNCB}
                setExistingPolicyDate={setExistingPolicyDate} handleClose={() => setEditPolicyPopUp((prev) => false)} />}
            <Card className={`custom-card ${classNameRightSec}`}>
                {/* Header Section */}
                <CardBody style={{ padding: '20px', position: 'relative' }}>
                    <div className="d-flex justify-content-between">
                        <div className="custom-card-title-icon">
                            <IconImage size={29} />
                        </div>
                        <div className="d-flex flex-column">
                            <h6 style={{ fontSize: "16px" }}>{title}</h6>
                            <p className='title-text'>{text}</p>
                        </div>
                        <div onClick={() => setEditPolicyPopUp(true)} className="edit-icon">
                            <FiEdit3 />
                        </div>
                    </div>
                    <hr className='left-card-seperator' />
                </CardBody>
                {/* Body Section */}
                {!isFetchedForResponsive ? <><CardBody className='d-flex justify-content-center' style={{ padding: '20px', position: "relative", marginTop: "-45px" }}>
                    <div className="left-card-detail-container">
                        <div className="column-text">
                            <div className="column-text-title-info">
                                <h5>Fuel Type</h5>
                                <p>{fuelType || '-'}</p>
                                <h5>variant</h5>
                                <p>{variant || '-'}</p>
                                <h5>Exisiting Policy</h5>
                                <p>{existingDate || '-'}</p>
                            </div>
                        </div>
                        <div className="column-text">
                            <div className="column-text-title-info">
                                <h5>Expiry Date</h5>
                                <p>{expDate || '-'}</p>
                                <h5>Existing Insurer</h5>
                                <p>{selectedInsurers || '-'}</p>
                                <h5>Previous NCB</h5>
                                <p>{previousNCB || '- '}</p>
                            </div>
                        </div>
                    </div>

                </CardBody>

                    {/* Footer Section */}
                    <div className='triangle-warning-icon'>
                        <FaExclamationTriangle style={{ color: '#E01A1A', marginRight: '10px' }} />
                        <span style={{ color: '#E01A1A', fontWeight: 'bold' }}>Inspection Required</span>
                    </div></> : <p className='right-show-more d-flex gap-2' onClick={() => setIsFetchedForResponsive(false)}>Show More <FaChevronDown /></p>
                }
            </Card>
        </>
    );
}

export default LeftSectionCard;
