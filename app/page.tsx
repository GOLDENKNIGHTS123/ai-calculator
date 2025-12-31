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
    <main className="min-h-screen bg-[#0f172a] text-white font-sans selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          AryanAI
        </div>
        <div className="hidden md:block text-sm text-gray-400">
          Helping Local Businesses Automate & Scale
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Stop Wasting <span className="text-blue-500">Hours</span> on Manual Tasks.
        </h1>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          Use my custom-built calculator to see exactly how much money your business is losing by not using AI.
        </p>

        {/* Calculator Card */}
        <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl shadow-2xl backdrop-blur-sm max-w-xl mx-auto">
          <div className="space-y-6 text-left">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Weekly Admin Hours (Emails, Scheduling, Content)</label>
              <input 
                type="number" 
                placeholder="e.g. 15"
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Staff Hourly Rate ($)</label>
              <input 
                type="number" 
                placeholder="e.g. 25"
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
              />
            </div>

            <button 
              onClick={calculate}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-95"
            >
              Calculate My Potential Savings
            </button>
          </div>

          {savings > 0 && (
            <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/50 rounded-2xl animate-pulse">
              <h2 className="text-blue-400 font-semibold mb-1">Estimated Monthly Savings:</h2>
              <p className="text-5xl font-black text-white">${savings.toFixed(0)}</p>
            </div>
          )}
        </div>
      </section>

      {/* The Offer Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">The "AI Starter Pack" Setup</h2>
          <p className="text-gray-400">I will personally set up your business with 3 AI systems for a flat $50.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "AI Content Engine", desc: "Automate your social media posts and property descriptions in seconds." },
            { title: "Smart Inbox", desc: "Set up AI templates to answer customer inquiries while you sleep." },
            { title: "Meeting Automator", desc: "Record and summarize every client call into a 1-page action plan." }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-slate-800/30 border border-slate-700 rounded-2xl">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400 font-bold">
                {i + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 p-1 rounded-3xl">
          <div className="bg-[#0f172a] rounded-[22px] p-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to save ${savings > 0 ? savings.toFixed(0) : '1,000'}+ per month?</h2>
            <p className="text-gray-400 mb-8">Limited Time Offer: Full Setup for only $50 (Usually $250)</p>
            
            <button 
              onClick={() => window.location.href='mailto:legendhcs700@gmail.com?subject=AI Setup Inquiry'}
              className="bg-white text-blue-600 hover:bg-gray-100 font-extrabold py-4 px-10 rounded-full text-lg shadow-xl transition-all"
            >
              Get Started for $50
            </button>
            <p className="mt-4 text-xs text-gray-500 italic">Only 3 slots available this week.</p>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center border-t border-slate-800 text-gray-600 text-sm">
        © 2026 AryanAI Agency • Built with Next.js
      </footer>
    </main>
  );
}