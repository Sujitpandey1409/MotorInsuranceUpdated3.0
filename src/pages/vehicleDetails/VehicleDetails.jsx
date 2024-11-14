import React from 'react'
import VehicleDetailsLeft from './VehicleDetailsLeft'
import VehicleDetailsRight from './VehicleDetailsRight'
import './VehicleDetails.css'

function VehicleDetails() {
  return (
    <div className='vehicle-details-wrapper'>
    <div className="d-flex gap-2 vehicle-details-container" >
      <VehicleDetailsLeft />
      <VehicleDetailsRight />
    </div>
    </div>
  )
}

export default VehicleDetails