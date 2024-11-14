import React, { createContext, useState } from 'react';

// Create a context
export const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
  // Shared state for vehicle plan details
  const [plansData, setPlansData] = useState({
    "benefitPlans": [
      {
        "planName": "Basic Plan",
        "price": "4,500",
        "benefits": [
          "Roadside Assistance",
          "Car Damages",
          "Standalone Personal Accident"
        ]
      },
      {
        "planName": "Smart Plan",
        "price": "6,800",
        "benefits": [
          "Roadside Assistance",
          "Car Damages",
          "Standalone Personal Accident",
          "Zero Depreciation",
          "Tyre Protect"
        ]
      },
      {
        "planName": "Enhanced Plan",
        "price": "9,500",
        "benefits": [
          "Roadside Assistance",
          "Car Damages",
          "Standalone Personal Accident",
          "Tyre Protect",
          "Return To Invoice",
          "Zero Depreciation"
        ]
      }
    ]
  });

  const [selectedPlan, setSelectedPlan] = useState('Basic Plan')

  const allBenefits = ['roadside assistance', 'zero depreciation', 'standalone personal accident', 'car damages', 'tyre protect', 'return to invoice', 'key protect']



  const value = {
    plansData,setPlansData,selectedPlan,setSelectedPlan, allBenefits
  };

  return (
    <PlanContext.Provider value={value}>
      {children}
    </PlanContext.Provider>
  );
};
