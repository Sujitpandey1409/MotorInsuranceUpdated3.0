import React from 'react'
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io'
import { CardBody } from 'reactstrap'
import './VehicleVerificationCardHeader.css'
import { FiEdit3 } from "react-icons/fi";

export default function VehicleVerificationCardHeader({ title, downArrow, done }) {
  return (
    <div>
      <CardBody className='verification-header-cardBody'>
        <h5 style={downArrow?{margin:'auto 0'}:{}}>{title}</h5>
        <div className="d-flex gap-2" style={downArrow?{alignItems:'center'}:{}}>
          {done&& <><div className='d-flex gap-2 kyc-editButton' style={downArrow?{alignItems:'center'}:{}}><FiEdit3 style={{marginTop:'2px'}}/> <p style={downArrow?{margin:'auto 0'}:{}}>edit</p></div><hr className='editArrowSeperator'/></>}
        {downArrow ? <IoIosArrowDropdown className='arrow-up-expanded' style={{ color: "#0000004D" }} /> :
          <IoIosArrowDropup className='arrow-up-expanded' />
        }
        </div>
      </CardBody>
    </div>
  )
}
