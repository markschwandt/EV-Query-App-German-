import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter, Target, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const Dashboard: React.FC = () => {
  const data = [
    { name: 'Automobil (Rauschen)', value: 85, color: '#1A1C1D' }, // Dark Gray for Noise
    { name: 'Pro Audio (Signal)', value: 15, color: '#ED1C24' }, // EV Red for Signal
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      <header className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-[#000000] uppercase tracking-tighter leading-none">
          Optimierung des <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED1C24] to-[#6706EF]">
            Signal-Rausch-Verhältnisses
          </span>
        </h1>
        <p className="text-xl text-[#595E62] max-w-3xl font-light">
          Servus beim <span className="font-bold text-black">Electro-Voice & Dynacord</span> Query Engineering Hub. 
          Meistern Sie die "Contextual Anchor" Strategie, um 270M+ irrelevante Datensätze zu filtern und die professionelle Audio-Konversation zu isolieren.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        <StatusCard 
          icon={<Activity className="text-[#ED1C24]" />}
          title="Das Problem"
          description="99% der 'EV' Erwähnungen sind Rauschen (Tesla, Laden). Einfaches Matching scheitert."
          link="/noise"
        />
        <StatusCard 
          icon={<Filter className="text-[#6706EF]" />}
          title="Die Lösung"
          description="Das 3-Teile-Framework: Einschlüsse, Kontext (NEAR/x) und Ausschlüsse."
          link="/lab"
        />
        <StatusCard 
          icon={<Target className="text-black" />}
          title="Das Ziel"
          description="Erreichen Sie >90% Datenpräzision für akkurates Brand-Health-Reporting."
          link="/quiz"
        />
      </div>

      <div className="bg-white rounded-sm shadow-sm border border-[#E0E2E5] p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-start justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-2">Die Mehrdeutigkeits-Krise</h2>
            <p className="text-[#595E62]">Relatives Gesprächsvolumen auf sozialen Plattformen.</p>
          </div>
        </div>

        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart layout="vertical" data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" width={170} tick={{fill: '#000000', fontSize: 12, fontWeight: 600, textTransform: 'uppercase'}} />
              <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: 0}} />
              <Bar dataKey="value" radius={[0, 0, 0, 0]} barSize={48}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-[#000000] rounded-sm p-12 text-white flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        {/* Decorative Gradient Blob */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6706EF] rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        
        <div className="mb-6 md:mb-0 relative z-10">
          <h3 className="text-3xl font-bold uppercase mb-2 tracking-tight">Bereit zum Bauen?</h3>
          <p className="text-[#979EA4] text-lg">Testen Sie Ihre Logik in der interaktiven Boolean-Sandbox.</p>
        </div>
        <Link to="/lab" className="relative z-10 bg-[#ED1C24] hover:bg-[#B9161C] text-white font-bold py-4 px-8 rounded-sm flex items-center transition-all uppercase tracking-wider text-sm">
          Ins Labor <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>
    </div>
  );
};

const StatusCard: React.FC<{ icon: React.ReactNode; title: string; description: string; link: string }> = ({ icon, title, description, link }) => (
  <Link to={link} className="block group">
    <div className="bg-white p-8 rounded-sm shadow-sm border border-[#E0E2E5] h-full transition-all duration-300 hover:border-[#ED1C24] hover:shadow-md">
      <div className="mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-black uppercase tracking-tight mb-3 group-hover:text-[#ED1C24] transition-colors">{title}</h3>
      <p className="text-[#595E62] leading-relaxed text-sm mb-6">{description}</p>
      <div className="text-[#ED1C24] font-bold text-xs uppercase tracking-widest flex items-center">
        Mehr erfahren <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </Link>
);

export default Dashboard;