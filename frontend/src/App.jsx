import React, { useState, useRef } from 'react';
import axios from 'axios';
import InputForm from './components/InputForm';
import ResultDisplay from './components/ResultDisplay';
import DrugDashboard from './components/DrugDashboard';

function App() {
  const [activeTab, setActiveTab] = useState('clinical');
  const [formData, setFormData] = useState({
    age: 30,
    health: 'good',
    riskTolerance: 'medium',
    problem: 'Fever',
    symptoms: '',
    duration: 'few_days'
  });

  const [result, setResult] = useState(null);
  const activeRequestId = useRef(0);

  const calculateOutcome = async (data) => {
    const requestId = Date.now();
    activeRequestId.current = requestId;
    try {
      const response = await axios.post('http://localhost:5001/api/calculate', data);
      if (activeRequestId.current === requestId) {
        setResult(response.data);
      }
    } catch (error) {
      console.error('Error calculating outcome:', error);
    }
  };

  const handleInputChange = (newData) => {
    setFormData(newData);
    calculateOutcome(newData);
  };

  // Initial calculation on mount
  React.useEffect(() => {
    calculateOutcome(formData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-300 font-sans p-6 overflow-x-hidden flex flex-col items-center">
      {/* Global Top Navbar */}
      <div className="flex flex-wrap gap-4 items-center justify-between mb-8 max-w-[1600px] w-full mx-auto pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3 pl-4">
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
          <h1 className="text-[16px] font-black text-white tracking-widest uppercase">OmniGen AI</h1>
          <span className="text-slate-700 px-2 text-xs">|</span>
          <h2 className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">
            {activeTab === 'clinical' ? 'Diagnostic Profiler' : 'Discovery Dashboard'}
          </h2>
        </div>
        
        <div className="flex gap-2 rounded-xl overflow-hidden bg-[#0f1524] p-1.5 border border-slate-800">
          <button 
            onClick={() => setActiveTab('clinical')} 
            className={`px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] transition-all ${activeTab === 'clinical' ? 'bg-[#0ea5e9] text-white shadow-lg shadow-cyan-500/20' : 'text-slate-500 hover:text-slate-300'}`}
          >
            Diagnostic Profiler
          </button>
          <button 
            onClick={() => setActiveTab('discovery')} 
            className={`px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] transition-all ${activeTab === 'discovery' ? 'bg-[#0ea5e9] text-white shadow-lg shadow-cyan-500/20' : 'text-slate-500 hover:text-slate-300'}`}
          >
            Discovery Dashboard
          </button>
        </div>
      </div>

      <div className="max-w-[1600px] w-full mx-auto flex-grow flex flex-col justify-start">
        {activeTab === 'discovery' ? (
          <DrugDashboard />
        ) : (
          <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto w-full items-stretch">
            {/* Left Side: Input Form (Lower visual weight) */}
            <div className="w-full lg:w-1/2 p-8 md:p-10 bg-[#111827] rounded-3xl shadow-xl shadow-slate-900/50 border border-slate-800 flex flex-col opacity-90 transition-opacity hover:opacity-100">
              <div className="mb-8">
                <h1 className="text-[13px] font-black text-white uppercase tracking-[0.1em] mb-2 block">Diagnostic Assessment Pipeline</h1>
                <p className="text-slate-500 font-medium text-xs leading-relaxed tracking-wide">Adjust patient parameters to run diagnostic intelligence.</p>
              </div>
              <InputForm formData={formData} onChange={handleInputChange} />
              
              {/* Patient Context Summary */}
              <div className="mt-auto pt-8 flex flex-col justify-end">
                <div className="px-5 py-4 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 shadow-sm flex flex-wrap gap-4 justify-between items-center text-xs relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full"></div>
                   
                   <div className="flex flex-col relative z-10">
                     <span className="text-[8px] sm:text-[9px] text-indigo-300/80 uppercase font-black tracking-widest mb-1 flex items-center gap-1">
                       <svg className="w-3 h-3 block sm:hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                       Profile
                     </span>
                     <span className="text-white font-bold tracking-wide mt-0.5 text-[11px] sm:text-xs">Age {formData?.age}</span>
                   </div>
                   
                   <div className="w-px h-6 bg-slate-800/80 hidden sm:block relative z-10"></div>
                   
                   <div className="flex flex-col relative z-10">
                     <span className="text-[8px] sm:text-[9px] text-indigo-300/80 uppercase font-black tracking-widest mb-1">Health</span>
                     <span className="text-white font-bold capitalize tracking-wide mt-0.5 text-[11px] sm:text-xs">{formData?.health}</span>
                   </div>
                   
                   <div className="w-px h-6 bg-slate-800/80 hidden sm:block relative z-10"></div>
                   
                   <div className="flex flex-col relative z-10">
                     <span className="text-[8px] sm:text-[9px] text-indigo-300/80 uppercase font-black tracking-widest mb-1">Tolerance</span>
                     <span className="text-white font-bold capitalize tracking-wide mt-0.5 text-[11px] sm:text-xs">{formData?.riskTolerance}</span>
                   </div>
                   
                   <div className="w-px h-6 bg-slate-800/80 hidden sm:block relative z-10"></div>
                   
                   <div className="flex flex-col relative z-10">
                     <span className="text-[8px] sm:text-[9px] text-indigo-300/80 uppercase font-black tracking-widest mb-1">Condition</span>
                     <span className="text-emerald-400 font-bold capitalize tracking-wide mt-0.5 text-[11px] sm:text-xs">{formData?.problem || 'None'}</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Right Side: Results (Visually dominant) */}
            <div className="w-full lg:w-1/2 flex flex-col h-full bg-transparent">
              <ResultDisplay result={result} formData={formData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
//End Here for now as of time is 19:46 and its time to the first check point 