"use client"
import React, { useState } from 'react';

export default function Home() {
  const [hours, setHours] = useState(0);
  const [rate, setRate] = useState(30);
  const [savings, setSavings] = useState(0);

  const calculate = () => {
    const monthly = (hours * rate * 0.4) * 4;
    setSavings(monthly);
  };

  return (
    <main className="min-h-screen bg-[#0f172a] text-white font-sans selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          AryanAI
        </div>
        <div className="text-sm text-gray-400 border border-slate-700 px-3 py-1 rounded-full bg-slate-800/50">
          2026 AI Automation Agency
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Stop Wasting <span className="text-blue-500">Hours</span> on Manual Work.
        </h1>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          I build custom AI systems that automate your emails, social media, and scheduling. Calculate your savings below.
        </p>

        {/* Calculator Card */}
        <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl shadow-2xl backdrop-blur-sm max-w-xl mx-auto mb-20">
          <div className="space-y-6 text-left">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">STEP 1: Weekly Admin Hours</label>
              <input 
                type="number" 
                placeholder="e.g. 20"
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-600 focus:border-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">STEP 2: Your Hourly Rate ($)</label>
              <input 
                type="number" 
                placeholder="e.g. 50"
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-600 focus:border-blue-500 outline-none"
              />
            </div>
            <button 
              onClick={calculate}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg transition-all"
            >
              Calculate My Savings
            </button>
          </div>

          {savings > 0 && (
            <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/50 rounded-2xl">
              <h2 className="text-blue-400 font-semibold mb-1">Monthly Savings Potential:</h2>
              <p className="text-5xl font-black text-white tracking-tighter">${savings.toFixed(0)}</p>
            </div>
          )}
        </div>

        {/* Professional Lead Form */}
        <div className="bg-gradient-to-b from-blue-600 to-blue-800 p-[1px] rounded-3xl max-w-lg mx-auto overflow-hidden">
          <div className="bg-[#0f172a] p-10 rounded-[23px]">
            <h2 className="text-3xl font-bold mb-2">Claim Your AI Setup</h2>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed">
              Ready to save that ${savings > 0 ? savings.toFixed(0) : '1,000'}+? Fill this out and I will personally reach out to start your setup.
            </p>
            
            <form 
              action="https://formspree.io/f/xeeojqkl" 
              method="POST"
              className="space-y-4 text-left"
            >
              <input 
                type="text" 
                name="name" 
                placeholder="Full Name" 
                required 
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-blue-500"
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Business Email" 
                required 
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-blue-500"
              />
              <textarea 
                name="message" 
                placeholder="What is the most boring task you do every day?" 
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-blue-500"
                rows="3"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-white text-blue-900 font-black py-4 rounded-xl text-lg hover:bg-gray-100 transition-all shadow-xl shadow-white/5"
              >
                REQUEST SETUP ($50)
              </button>
              <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest mt-4">
                Limited to 3 slots this week
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-slate-800 text-gray-600 text-xs">
        © 2026 AryanAI Agency • Leading the local business automation revolution.
      </footer>
    </main>
  );
}