import React, { createContext, useState } from 'react';

// Create a context
export const VehicleContext = createContext();

export const VehicleProvider = ({ children }) => {
  // Shared state for vehicle and policy details
  const [vehicleDetails, setVehicleDetails] = useState({
    manufacturer: '',
    model: '',
    variant: '',
    manufacturingYear: '',
    registrationDate: '',
  });

  const [policyDetails, setPolicyDetails] = useState({
    policyExpiryDate: '',
    previousInsurer: '',
    policyType: 'comprehensive', // default is comprehensive
    claimsMade: 'yes', // default is yes
    permitType: 'private', // default is private
  });

  const [selectedInsurers, setSelectedInsurers] = useState('Kotak General Insurance');


  const value = {
    vehicleDetails,
    setVehicleDetails,
    policyDetails,
    setPolicyDetails,
    selectedInsurers, setSelectedInsurers
  };

  return (
    <VehicleContext.Provider value={value}>
      {children}
    </VehicleContext.Provider>
  );
};
