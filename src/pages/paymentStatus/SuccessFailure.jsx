import React from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardText } from 'reactstrap';
import './SuccessPage.css'
import { IoArrowBack } from "react-icons/io5";
import { BsDownload } from "react-icons/bs";

const SuccessFailure = ({status}) => {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8} className='status-container'>
                    <Card className="p-4 shadow-md" style={{ border: 'none' }}>
                        {/* Success Icon & Message */}
                        <div className="text-center mb-4">
                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#E0E0E0', margin: 'auto' }}></div>
                            <h4 className="mt-3" style={{ fontSize: '18px' }}>{status?'Congratulations!':'Payment Failed!'}</h4>
                            <p style={{ fontSize: '16px', fontWeight: '500', color: 'rgba(43, 53, 69, 0.80)' }}>{status?'Your Payment is Successful.':'Unfortunately Your payment couldn’t got through'}</p>
                            <p style={{ color: 'rgba(43, 53, 69, 0.60)', fontWeight: '400' }}>Payment Confirmation Been Sent On <span style={{ fontWeight: '600' }}>Email ID</span> & <span style={{ fontWeight: '600' }}>Mobile Number</span></p>
                            {/* Transaction Reference */}
                            <Button color="success" className="mb-3" style={{ borderRadius: '20px', background: '#E5FFEC', fontSize: '12px', color: '#2DA44A' }}>
                                Transaction Reference No: <strong>123456ABC</strong>
                            </Button>
                        </div>

                        {/* Payment Details */}
                        <div className="border-top pt-3">
                            <Row>
                                <Col md={6} className="mb-2 order-details-left ">
                                    <p className="text-muted mb-0">proposal Number</p>
                                </Col>
                                <Col md={6} className="mb-2 order-details-right" style={{ textAlign: 'end' }}>
                                    ABCD123456
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} className="mb-2 order-details-left ">
                                    <p className="text-muted mb-0">Amount Paid</p>
                                </Col>
                                <Col md={6} className="mb-2 order-details-right" style={{ textAlign: 'end' }}>
                                    ABCD123456
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} className="mb-2 order-details-left ">
                                    <p className="text-muted mb-0">Insurance</p>
                                </Col>
                                <Col md={6} className="mb-2 order-details-right" style={{ textAlign: 'end' }}>
                                    Motor Insurance
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} className="mb-2 order-details-left ">
                                    <p className="text-muted mb-0">Date</p>
                                </Col>
                                <Col md={6} className="mb-2 order-details-right" style={{ textAlign: 'end' }}>
                                    24 July 2024
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} className="mb-2 order-details-left ">
                                    <p className="text-muted mb-0">Payment</p>
                                </Col>
                                <Col md={6} className="mb-2 order-details-right" style={{ textAlign: 'end' }}>
                                    Direct Debit
                                </Col>
                            </Row>
                        </div>
                        <hr />
                        <div className="note"><span>Note: </span>{status?'Please note your policy would be underneath by the insurer as per the their underwriting guidelines.':'Note: You can retry paying again by clicking below.'}</div>
                        {/* Evaluation Message */}
                        {status&&<Card className="border mt-4 mb-3" style={{ backgroundColor: '#FDFDFD' }}>
                            <CardBody>
                                <CardText>
                                    <h5 style={{ fontSize: '16px', fontWeight: '500', color: '#3C4473' }}>Your request is being evaluated.</h5>
                                    <p className="mb-0" style={{ fontSize: '12px', color: 'rgba(60, 68, 115, 0.80)' }}>You will be notified by the insurers on the status of the Proposal.</p>
                                </CardText>
                            </CardBody>
                        </Card>}
                        {/* Navigation */}
                        <Row>
                            <div className="d-flex justify-content-between">
                            <Col md={6} className="mt-2" style={!status?{marginLeft:'400px'}:{}}>
                                <Button color='link' className='back-button-text-container'>
                                    <IoArrowBack /> Back to home
                                </Button>
                            </Col>
                            {status&&<Col md={6} className="mt-2" style={{ textAlign: 'end' }}>
                                <Button outline color="primary" className='download-button-payment'>
                                    <BsDownload /> Download
                                </Button>
                            </Col>
                            }
                            </div>
                        </Row>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
};

export default SuccessFailure;
