import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../components/layout/Navbar';
import Patients from '../pages/Patients';
import Prescriptions from '../pages/Prescriptions';
import PrescriptionForm from '../pages/PrescriptionForm'; // 👈 thêm dòng này
import Invoices from '../pages/Invoices'
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Patients />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/prescriptions" element={<Prescriptions />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/prescriptions/new/:patientId" element={<PrescriptionForm />} /> {/* 👈 Thêm route này */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
