import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { inclusions, exclusions, contextTerms } from '../data/taxonomy';

const CheatSheet: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterList = (list: string[]) => {
    return list.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-[#E0E2E5] pb-6">
        <h1 className="text-4xl font-bold text-black uppercase tracking-tight leading-none">Taxonomie Referenz</h1>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#979EA4]" size={18} />
          <input 
            type="text" 
            placeholder="SUCHBEGRIFFE..." 
            className="w-full pl-10 pr-4 py-3 border border-[#E0E2E5] rounded-sm focus:ring-1 focus:ring-[#ED1C24] focus:border-[#ED1C24] outline-none text-sm uppercase font-medium placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Inclusions */}
        <Card title="Einschlüsse" subtitle="Die Marke" color="#000000">
          <ul className="space-y-2">
            {filterList(inclusions).map((item, i) => (
              <li key={i} className="text-sm p-3 bg-[#F8FAFC] text-black rounded-sm border-l-2 border-black font-mono">
                {item}
              </li>
            ))}
          </ul>
        </Card>

        {/* Context */}
        <Card title="Kontext" subtitle="Der Anker (NEAR/15)" color="#ED1C24">
          <ul className="space-y-2">
            {filterList(contextTerms).map((item, i) => (
              <li key={i} className="text-sm p-3 bg-[#FFF5F5] text-black rounded-sm border-l-2 border-[#ED1C24] font-mono">
                {item}
              </li>
            ))}
          </ul>
        </Card>

        {/* Exclusions */}
        <Card title="Ausschlüsse" subtitle="Das Rauschen (NOT)" color="#6706EF">
          <ul className="space-y-2">
            {filterList(exclusions).map((item, i) => (
              <li key={i} className="text-sm p-3 bg-[#F8FAFC] text-[#595E62] rounded-sm border-l-2 border-[#6706EF] font-mono flex justify-between items-center group hover:bg-[#F3E8FF] transition-colors">
                <span>{item}</span>
                <span className="opacity-0 group-hover:opacity-100 text-xs text-[#6706EF]">×</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="bg-[#000000] text-white p-10 rounded-sm mt-8 border border-[#1A1C1D]">
        <h3 className="font-bold uppercase tracking-wide mb-6">BigQuery SQL Syntax Referenz</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-[#ED1C24] font-bold text-xs uppercase tracking-widest mb-3">Effizienz (LIKE)</h4>
            <code className="block bg-[#1A1C1D] p-6 rounded-sm text-sm font-mono text-[#E0E2E5]">
              WHERE caption LIKE '%Dynacord%' <br/>
              <span className="text-[#595E62]">-- Schnell. Nutzt Such-Index. Beste Wahl für eindeutige Namen.</span>
            </code>
          </div>
          <div>
            <h4 className="text-[#6706EF] font-bold text-xs uppercase tracking-widest mb-3">Präzision (REGEX)</h4>
            <code className="block bg-[#1A1C1D] p-6 rounded-sm text-sm font-mono text-[#E0E2E5]">
              REGEXP_CONTAINS(caption, r'(?i)\bEV\b') <br/>
              <span className="text-[#595E62]">-- Nutzt \b Grenzen. Vermeidet Matches wie "Level".</span>
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card: React.FC<{ title: string; subtitle: string; color: string; children: React.ReactNode }> = ({ title, subtitle, color, children }) => {
  return (
    <div className="bg-white rounded-sm shadow-sm border border-[#E0E2E5] p-6 h-full flex flex-col">
      <div className="mb-6 pb-4 border-b border-[#E0E2E5]">
        <h3 className="font-bold text-2xl uppercase tracking-tighter text-black" style={{ color: color }}>{title}</h3>
        <p className="text-xs font-bold uppercase tracking-widest text-[#979EA4] mt-1">{subtitle}</p>
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default CheatSheet;