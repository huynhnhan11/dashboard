import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import Patients from '../pages/Patients';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Patients />
    </div>
  );
}

export default App;
