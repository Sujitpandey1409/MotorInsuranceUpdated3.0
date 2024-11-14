import React from 'react'
import SuccessPage from './SuccessFailure'
import './PaymentStatus.css'

function PaymentStatus({status}) {
  return (
    <div className='Payment-status-container'><SuccessPage status={status}/></div>
  )
}

export default PaymentStatus