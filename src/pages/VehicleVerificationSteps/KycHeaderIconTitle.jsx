import React, { useEffect, useRef } from 'react'
import { CardBody } from 'reactstrap'
import { MdArrowForwardIos } from "react-icons/md";
import './KycHeaderIconTitle.css'

export default function KycHeaderIconTitle({IconImage, title, text, active,
    done,}) {
        const headerIconContainer = useRef()
        // useEffect(()=>{
        //     done && headerIconContainer.current.classLists.add({background:'rgba(45, 164, 74, 1)'})
        // },[done])
    return (
        <CardBody style={{ margin: "auto", height: "42px" }}>
            <div className="d-flex gap-2 justify-center flex-wrap-none">
                <div ref={headerIconContainer} className={active?'icon-container-active':'icon-container'} style={done?{backgroundColor:'rgba(45, 164, 74, 1)', color:'#fff'}:{}}>
                    <IconImage size={25} />
                </div>
                <div className="d-flex flex-column" style={{width:"max-content"}}>
                    <h6 className='icon-title'>{title}</h6>
                    <p className='icon-title-text'>{text}</p>
                </div>
            </div>
        </CardBody>
    )
}
