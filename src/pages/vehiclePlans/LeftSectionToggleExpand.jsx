import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { FaPlus } from "react-icons/fa6";

const LeftSectionToggleExpand = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Card style={{ width: '100%', borderRadius: '8px 8px 0 0', border: '1px solid rgba(0, 0, 0, 0.09)' }}>
            <CardHeader className="d-flex justify-content-between align-items-center" style={{ padding: '15px', position: 'relative', borderBottom:'transparent' }}>
                <div className="d-flex gap-2">
                    <h5 style={{ fontWeight: 700, fontSize: '14px', color: '#00183D' }}>
                        Additional Covers
                    </h5>
                    <div
                        style={{
                            backgroundColor: '#334BC2',
                            color: '#FFF',
                            borderRadius: '50%',
                            width: '20px',
                            height: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '11.3px',
                            fontWeight: 700,
                            lineHeight: '19px',
                        }}
                    >
                        3
                    </div>
                </div>
                <Button
                    onClick={toggleExpand}
                    style={{
                        width: '26px',
                        height: '26px',
                        backgroundColor: '#EDEDF1',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: 'none',
                        color:'#605F5F',
                        fontSize:"14px"
                    }}
                >
                    {isExpanded ? '➖' : '➕' }
                </Button>
            </CardHeader>

            {isExpanded && (
                <CardBody style={{ padding: '15px'}}>
                    <Form>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" /> Zero Depreciation
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" /> Standalone Personal Accident
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" /> Car Damages
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" /> Tyre Protect
                            </Label>
                        </FormGroup>
                        <Button onClick={(e)=>e.preventDefault} style={{ backgroundColor: '#334BC2', border: 'none', width: '100%', marginTop: '10px' }}>
                            Submit
                        </Button>
                    </Form>
                </CardBody>
            )}
        </Card>
    );
};

export default LeftSectionToggleExpand;
