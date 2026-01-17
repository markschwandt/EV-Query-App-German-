import React, { useState } from 'react';
import { HashRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Search, 
  ShieldAlert, 
  Database, 
  GraduationCap, 
  Menu, 
  X,
  Mic2,
  Map,
  Zap
} from 'lucide-react';

// Pages
import Dashboard from './pages/Dashboard';
import BooleanLab from './pages/BooleanLab';
import TheNoiseProblem from './pages/TheNoiseProblem';
import CheatSheet from './pages/CheatSheet';
import Quiz from './pages/Quiz';
import VisualGuides from './pages/VisualGuides';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <HashRouter>
      <div className="flex h-screen bg-white text-slate-900 overflow-hidden font-sans">
        {/* Sidebar - EV Corporate Black */}
        <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#000000] text-white transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
          <div className="flex flex-col h-full border-r border-[#1A1C1D]">
            {/* Header / Logo Area */}
            <div className="p-8 pb-12">
              <div className="flex items-center gap-4">
                {/* Logotype only */}
                <span className="text-2xl font-bold tracking-tight text-white uppercase leading-none">Electro-Voice</span>
              </div>
            </div>
            
            <div className="px-6 flex-1">
               <p className="text-[10px] font-bold text-[#979EA4] uppercase tracking-widest mb-4 pl-4">Schulungsmodule</p>
               <nav className="space-y-1">
                 <NavItem to="/" icon={<LayoutDashboard size={20}/>} label="Übersicht" />
                 <NavItem to="/visuals" icon={<Map size={20}/>} label="Visuelle Baupläne" />
                 <NavItem to="/noise" icon={<ShieldAlert size={20}/>} label="Das Lärm-Problem" />
                 <NavItem to="/lab" icon={<Search size={20}/>} label="Boolean Labor" />
                 <NavItem to="/cheatsheet" icon={<Database size={20}/>} label="Taxonomie Referenz" />
                 <NavItem to="/quiz" icon={<GraduationCap size={20}/>} label="Zertifizierungs-Quiz" />
               </nav>
            </div>

            <div className="mt-auto p-8 bg-gradient-to-t from-[#101112] to-transparent">
              <div className="flex items-center gap-4 border-t border-[#2E3033] pt-6">
                <div className="p-3 bg-[#ED1C24] text-white rounded-sm">
                  <Mic2 size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide">Query Ingenieur</p>
                  <p className="text-xs text-[#979EA4]">Internes Tool v2.4 (DE)</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden bg-[#F8FAFC]">
          {/* Mobile Header */}
          <header className="md:hidden bg-[#000000] text-white p-4 flex items-center justify-between">
             <div className="flex items-center gap-3">
                <span className="font-bold uppercase tracking-tight">Electro-Voice</span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(true)} className="text-white">
              <Menu size={24} />
            </button>
          </header>

          <main className="flex-1 overflow-y-auto p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/visuals" element={<VisualGuides />} />
                <Route path="/noise" element={<TheNoiseProblem />} />
                <Route path="/lab" element={<BooleanLab />} />
                <Route path="/cheatsheet" element={<CheatSheet />} />
                <Route path="/quiz" element={<Quiz />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </HashRouter>
  );
};

const NavItem: React.FC<{ to: string; icon: React.ReactNode; label: string }> = ({ to, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <NavLink 
      to={to} 
      className={`flex items-center space-x-3 px-4 py-4 rounded-sm transition-all duration-200 group ${
        isActive 
          ? 'bg-[#ED1C24] text-white shadow-lg' 
          : 'text-[#979EA4] hover:text-white hover:bg-[#1A1C1D]'
      }`}
    >
      <span className={`${isActive ? 'text-white' : 'text-[#595E62] group-hover:text-white'}`}>{icon}</span>
      <span className="font-medium tracking-wide uppercase text-sm">{label}</span>
    </NavLink>
  );
};

export default App;