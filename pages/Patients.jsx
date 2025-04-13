import React from 'react';
import PatientTable from '../components/PatientTable';

const Patients = () => {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold text-blue-700">Quản lý bệnh nhân</h1>
            <PatientTable />
        </div>
    );
};

export default Patients;
