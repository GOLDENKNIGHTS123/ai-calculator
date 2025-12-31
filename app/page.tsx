"use client"
import React, { useState } from 'react';

export default function Home() {
  const [hours, setHours] = useState(0);
  const [rate, setRate] = useState(30);
  const [savings, setSavings] = useState(0);

  const calculate = () => {
    // AI typically automates 40% of admin tasks
    const monthly = (hours * rate * 0.4) * 4;
    setSavings(monthly);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-4 text-blue-400">AI Savings Calculator</h1>
      <p className="mb-8 text-gray-400">How much money is your business losing to manual work?</p>

      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <label className="block mb-2">Weekly Admin Hours (Emails, Scheduling, etc.)</label>
        <input 
          type="number" 
          onChange={(e) => setHours(Number(e.target.value))}
          className="w-full p-2 mb-4 rounded bg-gray-700 border border-gray-600"
        />

        <label className="block mb-2">Hourly Staff Rate ($)</label>
        <input 
          type="number" 
          onChange={(e) => setRate(Number(e.target.value))}
          className="w-full p-2 mb-6 rounded bg-gray-700 border border-gray-600"
        />

        <button 
          onClick={calculate}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
        >
          Calculate My Savings
        </button>

        {savings > 0 && (
          <div className="mt-8 p-4 bg-green-900/30 border border-green-500 rounded-lg text-center">
            <h2 className="text-xl">You could save:</h2>
            <p className="text-4xl font-bold text-green-400">${savings.toFixed(0)} / month</p>
          </div>
        )}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-4">Want to save this money? Read my guide:</p>
        <a href="https://yoursubstacklink.substack.com" className="text-blue-400 underline">
          Top 5 AI Tools for Small Business 2026
        </a>
      </div>
    </main>
  );
}