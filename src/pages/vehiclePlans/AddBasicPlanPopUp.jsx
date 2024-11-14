import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Card, CardBody, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { IoMdClose } from "react-icons/io";
import './AddBasicPlanPopUp.css';
import { PlanContext } from '../../contexts/PlanProvider';

export default function AddBasicPlanPopUp({ handleClose, isOpen }) {
    const { plansData, setPlansData, selectedPlan, setSelectedPlan } = useContext(PlanContext)
    const benefitsList = plansData.benefitPlans.filter((el, i) => el.planName === selectedPlan)[0].benefits.map((el) => el.toLowerCase())
    let [newBenefits, setNewBenefits] = useState([...benefitsList])
    const popUpRef = useRef(null);


    // Initial state for checkboxes
    const [selectedOptions, setSelectedOptions] = useState({
        roadsideAssistance: benefitsList.includes('roadside assistance'),
        zeroDepreciation: benefitsList.includes('zero depreciation'),
        personalAccident: benefitsList.includes('standalone personal accident'),
        carDamages: benefitsList.includes('car damages'),
        tyreProtect: benefitsList.includes('tyre protect'),
        returnToInvoice: benefitsList.includes('return to invoice'),
        keyProtect: benefitsList.includes('key protect'),
    });

    // Handle change for checkboxes
    const handleCheckboxChange = (e) => {
        const { name, checked, value } = e.target;
        setSelectedOptions(prevState => ({
            ...prevState,
            [name]: checked,
        }));
        if (checked) {
            if (!newBenefits.includes(value)) {
                setNewBenefits((prev) => [...prev, value])
            }
        }
        else {
            if (newBenefits.includes(value)) {
                let tempArray = [...newBenefits]
                tempArray.pop(tempArray.indexOf(value))
                setNewBenefits(tempArray)
            }
        }
        console.log(value, newBenefits)
    };

    const updateBenefits = (selectedPlan, newBenefits) => {
        let prevState = plansData
        // Function to update the specific plan 
        const updatedBenefitPlans = prevState.benefitPlans.map((el) => {
            if (el.planName === selectedPlan) {
                return {
                    ...el,
                    benefits: newBenefits // Update the benefits
                };
            }
            return el;
        });

        // Return the updated state
        return {
            ...prevState,
            benefitPlans: updatedBenefitPlans
        };

    };

    // const updateBenefits = (plan, newBenefits) => {
    //     setPlansData((prevState) => {
    //         // Find the specific plan you want to update
    //         const updatedBenefitPlans = prevState.benefitPlans.map((planEl) => {
    //             if (planEl.planName === plan) {
    //                 return {
    //                     ...planEl,
    //                     benefits: newBenefits // Update the benefits
    //                 };
    //             }
    //             return planEl;
    //         });

    //         // Return the updated state
    //         return {
    //             ...prevState,
    //             benefitPlans: updatedBenefitPlans
    //         };
    //     });
    // };

    const handleSubmitPolicyDetails = (e) => {
        e.preventDefault();
        // Handle form submission for policy details
        const newPlanData = updateBenefits(selectedPlan, newBenefits)
        setPlansData(newPlanData)
        handleClose()
        console.log(selectedOptions);
    };

    useEffect(()=>{
        const handleClickOutside = (event) => {
            // If the click happened outside the drawer, close it
            if (popUpRef.current && !popUpRef.current.contains(event.target)) {
                handleClose();
            }
        }
        // if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        // }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, handleClose])

    return (
        <div className='edit-policy-detail-popUp-container'>
            <Card >
                <div ref={popUpRef}  className="add-plan-popUp">
                <div className="padding-header">
                    <span onClick={handleClose} className='close-Button'><IoMdClose size={21} /></span>
                    <p style={{ fontWeight: '700', fontSize: '17px' }}>Add Basic Plans Benefits</p>
                </div>
                <hr className='plan-seperator' />
                <CardBody>
                    <Form  onSubmit={handleSubmitPolicyDetails} className='d-flex flex-column gap-2'>
                        <FormGroup check>
                            <Input
                                type="checkbox"
                                name="roadsideAssistance"
                                value="roadside assistance"
                                id="roadsideAssistance"
                                checked={selectedOptions.roadsideAssistance}
                                onChange={handleCheckboxChange}
                            />
                            <Label check for="roadsideAssistance">Roadside Assistance</Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input
                                type="checkbox"
                                name="zeroDepreciation"
                                value="zero depreciation"
                                id="zeroDepreciation"
                                checked={selectedOptions.zeroDepreciation}
                                onChange={handleCheckboxChange}
                            />
                            <Label check for="zeroDepreciation">Zero Depreciation</Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input
                                type="checkbox"
                                name="personalAccident"
                                value="standalone personal accident"
                                id="personalAccident"
                                checked={selectedOptions.personalAccident}
                                onChange={handleCheckboxChange}
                            />
                            <Label check for="personalAccident">Standalone Personal Accident</Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input
                                type="checkbox"
                                name="carDamages"
                                value="car damages"
                                id="carDamages"
                                checked={selectedOptions.carDamages}
                                onChange={handleCheckboxChange}
                            />
                            <Label check for="carDamages">Car Damages</Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input
                                type="checkbox"
                                name="tyreProtect"
                                value="tyre protect"
                                id="tyreProtect"
                                checked={selectedOptions.tyreProtect}
                                onChange={handleCheckboxChange}
                            />
                            <Label check for="tyreProtect">Tyre Protect</Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input
                                type="checkbox"
                                name="returnToInvoice"
                                value="Return to invoice"
                                id="returnToInvoice"
                                checked={selectedOptions.returnToInvoice}
                                onChange={handleCheckboxChange}
                            />
                            <Label check for="returnToInvoice">Return To Invoice</Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input
                                type="checkbox"
                                name="keyProtect"
                                value="key protect"
                                id="keyProtect"
                                checked={selectedOptions.keyProtect}
                                onChange={handleCheckboxChange}
                            />
                            <Label check for="keyProtect">Key Protect</Label>
                        </FormGroup>
                        <div className="d-flex justify-content-between gap-2" style={{ marginTop: '32px' }}>
                            <Button onClick={handleClose} outline className='cancel-button'>Cancel</Button>
                            <Button type="submit" className='proceed-button plan-submit-responsive'>Submit</Button>
                        </div>
                    </Form>
                </CardBody>
                </div>
            </Card>
        </div>
    );
}
