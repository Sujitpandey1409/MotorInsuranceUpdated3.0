import React from 'react'
import LeftSectionCard from './LeftSectionCard'
import { SiTata } from "react-icons/si";
import LeftSectionAdditionalDetail from './LeftSectionAdditionalDetail';

export default function VehiclePlansLeft() {
    return (
        <div style={{ overflowY:"auto", display:'grid', gap:'20px'}}>
            <LeftSectionCard IconImage={SiTata} title={'CH01CD7170'} text={'1210 BUS STR 48'} />
            <LeftSectionAdditionalDetail />
        </div>
    )
}
