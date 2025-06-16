import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../components/Layout/Navbar';
import Patients from '../pages/Patients';
import Prescriptions from '../pages/Prescriptions';
import PrescriptionForm from '../components/prescriptions/PrescriptionForm'; // 👈 thêm dòng này
import Invoices from '../pages/Invoices'
import Drugs from '../pages/Drugs';
import Stock from '../pages/StockEntryList';
import Reports from '../pages/Reports';
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
          <Route path="/drugs" element={<Drugs />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/prescriptions/new/:patientId" element={<PrescriptionForm />} /> {/* 👈 Thêm route này */}
          <Route path="/prescriptions/create" element={<PrescriptionForm />} />
          <Route path="/prescriptions/create/:MaBenhNhan" element={<PrescriptionForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
