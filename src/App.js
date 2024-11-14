import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import PaymentStatus from './pages/paymentStatus/PaymentStatus'
import VehicleDetails from './pages/vehicleDetails/VehicleDetails';
import VehiclePlans from './pages/vehiclePlans/VehiclePlans';
import VehicleVerificationSteps from './pages/VehicleVerificationSteps/VehicleVerificationSteps';
import Header from './components/Header';
import QuoteLoaderPage from './pages/vehiclePlans/InsurerSelectionPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<h1>Welcome to the Vehicle App</h1>} />
          <Route path="/vehicle-details" element={<VehicleDetails />} />
          <Route path="/insurer-selection" element={<QuoteLoaderPage />} />
          <Route path="/vehicle-plans" element={<VehiclePlans />} />
          <Route path="/vehicle-verification" element={<VehicleVerificationSteps />} />
          <Route path="/payment-status" element={<PaymentStatus status={true}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
