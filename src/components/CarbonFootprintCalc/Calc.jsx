import React, { useState } from 'react';

function CarbonFootprintCalculator() {
  // State for inputs
  const [electricity, setElectricity] = useState('');
  const [gas, setGas] = useState('');
  const [carMiles, setCarMiles] = useState('');
  const [publicTransport, setPublicTransport] = useState('');
  const [flights, setFlights] = useState('');

  // State for result
  const [footprint, setFootprint] = useState(null);

  // Function to calculate carbon footprint
  const calculateFootprint = () => {
    // Example calculations (these should be replaced with real factors)
    const electricityFactor = 0.0005; // kg CO2 per kWh
    const gasFactor = 0.002; // kg CO2 per kWh
    const carFactor = 0.25; // kg CO2 per mile
    const publicTransportFactor = 0.1; // kg CO2 per mile
    const flightFactor = 0.2; // kg CO2 per mile

    const totalFootprint =
      (electricity * electricityFactor) +
      (gas * gasFactor) +
      (carMiles * carFactor) +
      (publicTransport * publicTransportFactor) +
      (flights * flightFactor);

    setFootprint(totalFootprint.toFixed(2));
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Carbon Footprint Calculator</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Electricity Consumption (kWh)</label>
          <input
            type="number"
            value={electricity}
            onChange={(e) => setElectricity(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Gas Consumption (kWh)</label>
          <input
            type="number"
            value={gas}
            onChange={(e) => setGas(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Car Mileage (miles)</label>
          <input
            type="number"
            value={carMiles}
            onChange={(e) => setCarMiles(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Public Transport Mileage (miles)</label>
          <input
            type="number"
            value={publicTransport}
            onChange={(e) => setPublicTransport(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Flight Mileage (miles)</label>
          <input
            type="number"
            value={flights}
            onChange={(e) => setFlights(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button
          type="button"
          onClick={calculateFootprint}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Calculate
        </button>
      </form>
      {footprint !== null && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-semibold">Your Carbon Footprint:</h3>
          <p className="text-xl font-bold">{footprint} kg CO2</p>
        </div>
      )}
    </div>
  );
}

export default CarbonFootprintCalculator;
