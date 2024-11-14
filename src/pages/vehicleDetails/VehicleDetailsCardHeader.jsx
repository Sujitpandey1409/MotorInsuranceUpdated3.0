import React from 'react';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io'
import { CardBody } from 'reactstrap';

export default function VehicleDetailsCardHeader({ iconImage, title, text, downArrow }) {
    return (
        <>
            <CardBody style={{ height:"92px"}}>
                <div className="d-flex gap-2">
                    <div className="icon-conatiner">
                        <img src={iconImage} alt="vehicle icon" />
                    </div>
                    <div className="d-flex flex-column">
                        <h5>{title}</h5>
                        <p className='title-text'>{text}</p>
                    </div>
                    {downArrow?<IoIosArrowDropdown className='arrow-up-expanded' style={{color:"#0000004D"}}/>:
                    <IoIosArrowDropup className='arrow-up-expanded' />
                    }
                </div>
            </CardBody>
        </>
    )
}
