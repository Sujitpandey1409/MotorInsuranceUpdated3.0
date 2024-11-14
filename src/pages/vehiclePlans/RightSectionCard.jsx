import React, { useContext, useEffect, useState } from "react";
import "./RightSectionCard.css";
import logo from "../../assets/quta-logo.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Drawer from "./Drawer";
import { Col, Row } from "reactstrap";
import { PlanContext } from "../../contexts/PlanProvider";

const RightSectionCard = ({ planName, benefits, price, handleBenifit, toggleDrawer, handleShowMore }) => {
    const [isShowMore, setShowMore] = useState(benefits.length < 4);
    const { plansData, setPlansData, selectedPlan, setSelectedPlan } = useContext(PlanContext)

    // useEffect(()=>{
    //     setShowMore(benefits.length > 3)
    // },[])
    const tempBenefits = benefits.slice(0, 3)
    const navigate = useNavigate()
    const handleCustomize = () => {
        handleBenifit(planName);
    }
    const handlePremiumBreakup = () => {
        toggleDrawer();
        setSelectedPlan(planName);
    }
    const handleShow = () => {
        setShowMore(true)
        handleShowMore(true)
    }

    return (
        <div className="card-container">
            <div className="card-header">
                {/* Insurance Company Logo */}
                <div className="logo">
                    <img src={logo} alt="Insurance Logo" className="logo-image" />
                </div>
                {/* Plan Information */}
                <div className="plan-info">
                    <h3 className="plan-title">{planName}</h3>
                    <div className="premium-breakup">
                        <span onClick={handlePremiumBreakup}>Premium Breakup</span>
                        <MdOutlineArrowForwardIos className="forward-arrow" />
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="d-flex justify-content-between">
                <div className="benefits">
                    <h4 className="benefits-title">{benefits.length} Benefits</h4>
                    <ul className="benefits-list">
                        {isShowMore ? (
                            benefits.map((benefit, index) => (
                                <li key={index} className="benefit-item">
                                    <span className="dot"></span> {benefit}
                                </li>
                            ))
                        ) : (
                            tempBenefits.map((benefit, index) => (
                                <li key={index} className="benefit-item">
                                    <span className="dot"></span> {benefit}
                                </li>
                            ))
                        )}
                        {!isShowMore && <button href="#" onClick={handleShow}>Show more</button>}
                    </ul>
                </div>
                <div className="customize-button" onClick={handleCustomize}>Customize</div>
            </div>

            {/* Divider Line */}
            <hr className="divider-line" />

            {/* Price and Buy Button Section */}
            <div className="price-section">
                <div className="price-info">
                    <p className="premium-label">Premium Amount:</p>
                    <p className="premium-amount">₹ {price}</p>
                </div>
                <div onClick={() => navigate('/vehicle-verification')} className="buy-now-button plan-button-responsive">Buy Now</div>
            </div>
        </div>
    );
};

export default RightSectionCard;
