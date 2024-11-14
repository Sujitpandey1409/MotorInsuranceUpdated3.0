import React from 'react';
import './LeftSectionAdditionalDetail.css'
import { Button, FormGroup, Input, Label } from 'reactstrap';
import LeftSectionToggleExpand from './LeftSectionToggleExpand';

export default function LeftSectionAdditionalDetail({showAdditionalDetail,
    setAdditional}) {
    return (
        <div className='AdditionDetailCoantainer'>
            <div className="d-flex flex-column">
                {showAdditionalDetail&&<h4 style={{fontWeight:600}}>Apply Filter To See Results</h4>}
                {showAdditionalDetail&&<hr/>}
                <div className="d-flex flex-column">
                    <Label style={{ fontWeight: "700" }}>Package Type:</Label>
                    <div className="d-flex gap-4">
                        <FormGroup check>
                            <Label check inline>
                                <Input
                                    type="radio"
                                    name="packageType"
                                    value="comprehensive"
                                // checked={policyType === 'comprehensive'}
                                // onChange={(e) => setPolicyType(e.target.value)}
                                />
                                Comprehensive
                            </Label>
                        </FormGroup>

                        <FormGroup check>
                            <Label check inline>
                                <Input
                                    type="radio"
                                    name="packageType"
                                    value="third-party"
                                // checked={policyType === 'third-party'}
                                // onChange={(e) => setPolicyType(e.target.value)}
                                />
                                Third Party
                            </Label>
                        </FormGroup>
                    </div>
                    <hr />
                </div>
                <div className="d-flex  flex-column">
                    <Label style={{ fontWeight: "700" }}>Vehicle owned by:</Label>
                    <div className="d-flex gap-4">
                        <FormGroup check>
                            <Label check inline>
                                <Input
                                    type="radio"
                                    name="owned"
                                    value="comprehensive"
                                // checked={policyType === 'comprehensive'}
                                // onChange={(e) => setPolicyType(e.target.value)}
                                />
                                Individual
                            </Label>
                        </FormGroup>

                        <FormGroup check>
                            <Label check inline>
                                <Input
                                    type="radio"
                                    name="owned"
                                    value="third-party"
                                // checked={policyType === 'third-party'}
                                // onChange={(e) => setPolicyType(e.target.value)}
                                />
                                Company
                            </Label>
                        </FormGroup>
                    </div>
                    <hr />
                </div>
                <div className="d-flex  flex-column">
                    <Label style={{ fontWeight: "700" }}>Insured Declared Value (IDV)</Label>
                    <div className="d-flex gap-4 flex-wrap">
                        <FormGroup check>
                            <Label check inline>
                                <Input
                                    type="radio"
                                    name="IDV"
                                    value="comprehensive"
                                // checked={policyType === 'comprehensive'}
                                // onChange={(e) => setPolicyType(e.target.value)}
                                />
                                Recommended
                                ₹ 5,47,069
                            </Label>
                        </FormGroup>

                        <FormGroup check>
                            <Label check inline>
                                <Input
                                    type="radio"
                                    name="IDV"
                                    value="third-party"
                                // checked={policyType === 'third-party'}
                                // onChange={(e) => setPolicyType(e.target.value)}
                                />
                                Choose your own IDV
                            </Label>
                        </FormGroup>
                    </div>
                    <hr />
                </div>
                <LeftSectionToggleExpand />
                {showAdditionalDetail&&
                <div className="d-flex justify-content-between mt-4" style={{width:"100%"}}>
                    <Button onClick={()=>setAdditional(false)} outline className='cancel-button' style={{width:'45%'}}>Cancel</Button>
                    <Button className='apply-button'>Apply</Button>
                </div>
                }
            </div>
        </div>
    )
}
