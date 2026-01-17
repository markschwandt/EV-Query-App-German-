import React from 'react';
import { 
  GitMerge, 
  Layers, 
  Shield, 
  ArrowDown, 
  Check, 
  X, 
  AlertTriangle
} from 'lucide-react';

const VisualGuides: React.FC = () => {
  return (
    <div className="space-y-20 animate-fade-in pb-12">
       {/* Header */}
       <header className="border-b border-[#E0E2E5] pb-8">
        <h1 className="text-4xl font-bold text-black uppercase tracking-tighter leading-none mb-4">Query Baupläne</h1>
        <p className="text-[#595E62] text-lg">Visualisierung der Logik-Strukturen für hochpräzise Datenabfragen.</p>
      </header>

      {/* 1. The Decision Flowchart */}
      <section className="scroll-mt-8" id="flowchart">
        <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-8 flex items-center gap-3">
            <div className="p-2 bg-black text-white rounded-sm"><GitMerge size={20}/></div>
            Konstruktions-Ablaufplan
        </h2>
        
        <div className="bg-white p-12 rounded-sm shadow-sm border border-[#E0E2E5] overflow-x-auto">
          <div className="min-w-[700px] flex flex-col items-center space-y-6">
            
            {/* Start Node */}
            <div className="bg-[#000000] text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider shadow-lg">
              Start: Suchbegriff definieren
            </div>
            <ArrowDown className="text-[#979EA4]" />
            
            {/* Decision Diamond */}
            <div className="relative">
              <div className="bg-white border-2 border-[#ED1C24] text-black w-72 h-32 flex items-center justify-center text-center font-bold rounded-sm z-10 shadow-sm p-4">
                Ist der Begriff generisch? <br/> (z.B. "EV")
              </div>
            </div>

            {/* Branches */}
            <div className="flex justify-between w-full max-w-3xl px-12 relative pt-6">
               {/* Connecting Lines */}
               <div className="absolute top-0 left-1/2 w-full h-8 border-t-2 border-[#979EA4] transform -translate-x-1/2 -translate-y-4 -z-10"></div>
               <div className="absolute top-0 left-[calc(14%+2rem)] h-8 border-l-2 border-[#979EA4] -translate-y-4 -z-10"></div>
               <div className="absolute top-0 right-[calc(14%+2rem)] h-8 border-r-2 border-[#979EA4] -translate-y-4 -z-10"></div>

               {/* Left Branch (YES) */}
               <div className="flex flex-col items-center w-1/2 pr-8 space-y-6">
                  <div className="bg-[#ED1C24] text-white px-4 py-1 rounded-sm text-xs font-bold uppercase tracking-widest">JA (Hohes Risiko)</div>
                  <ArrowDown className="text-[#979EA4]" />
                  <div className="bg-[#F8FAFC] border border-[#979EA4] p-6 rounded-sm text-center w-full">
                    <div className="font-bold text-black uppercase mb-2">Contextual Anchor</div>
                    <div className="text-sm text-[#595E62]">Muss mit Kategorie (Speaker, Mic) verknüpft werden</div>
                  </div>
                  <ArrowDown className="text-[#979EA4]" />
                  <div className="bg-[#1A1C1D] text-[#00FF00] p-4 rounded-sm font-mono text-sm w-full text-center border-l-4 border-[#ED1C24]">
                    "EV" NEAR/15 "Speaker"
                  </div>
               </div>

               {/* Right Branch (NO) */}
               <div className="flex flex-col items-center w-1/2 pl-8 space-y-6">
                  <div className="bg-[#000000] text-white px-4 py-1 rounded-sm text-xs font-bold uppercase tracking-widest">NEIN (Eindeutig)</div>
                  <ArrowDown className="text-[#979EA4]" />
                  <div className="bg-[#F8FAFC] border border-[#979EA4] p-6 rounded-sm text-center w-full">
                    <div className="font-bold text-black uppercase mb-2">Einfache Inklusion</div>
                    <div className="text-sm text-[#595E62]">Nutze Standard OR Operator</div>
                  </div>
                  <ArrowDown className="text-[#979EA4]" />
                  <div className="bg-[#1A1C1D] text-[#00FF00] p-4 rounded-sm font-mono text-sm w-full text-center border-l-4 border-[#6706EF]">
                    "Dynacord"
                  </div>
               </div>
            </div>

            {/* Convergence */}
            <ArrowDown className="text-[#979EA4]" />
            <div className="bg-white border border-[#979EA4] text-black px-10 py-5 rounded-sm text-center shadow-sm w-2/3">
              <span className="font-bold uppercase">Globale Ausschlüsse (NOT)</span> <br/>
              <span className="text-sm text-[#595E62] mt-2 block">Entferne offensichtliches Rauschen (Tesla, Poker)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Boolean Hierarchy */}
       <section className="scroll-mt-8" id="hierarchy">
        <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-8 flex items-center gap-3">
            <div className="p-2 bg-black text-white rounded-sm"><Layers size={20}/></div>
            Hierarchie der Operatoren
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-white p-8 rounded-sm shadow-sm border border-[#E0E2E5]">
             <h3 className="font-bold uppercase text-sm text-[#979EA4] mb-6 tracking-widest">Reihenfolge der Spezifität</h3>
             <div className="space-y-2">
               <div className="relative">
                 {/* Pyramid Levels - using Gradients from guide */}
                 <div className="w-48 mx-auto bg-[#6706EF] text-white p-4 text-center font-bold z-40 relative shadow-lg">
                   "Quotes" <span className="block text-[10px] uppercase opacity-70 mt-1">Exakter Match</span>
                 </div>
                 <div className="w-64 mx-auto bg-gradient-to-r from-[#8538F2] to-[#B382F7] text-white p-4 text-center font-bold z-30 relative shadow-md -mt-2">
                   NEAR/x <span className="block text-[10px] uppercase opacity-70 mt-1">Proximity (Nähe)</span>
                 </div>
                 <div className="w-80 mx-auto bg-gradient-to-r from-[#979EA4] to-[#B2B9C0] text-black p-4 text-center font-bold z-20 relative shadow-md -mt-2">
                   AND <span className="block text-[10px] uppercase opacity-60 mt-1">Präsenz</span>
                 </div>
                 <div className="w-full mx-auto bg-[#E0E2E5] text-black p-4 text-center font-bold z-10 relative shadow-sm -mt-2">
                   OR <span className="block text-[10px] uppercase opacity-60 mt-1">Auswahl</span>
                 </div>
               </div>
             </div>
           </div>

           <div className="bg-[#1A1C1D] p-8 rounded-sm shadow-sm text-white">
              <h3 className="font-bold uppercase text-sm text-[#979EA4] mb-6 tracking-widest">Verschachtelungs-Logik</h3>
              <div className="font-mono text-sm space-y-6">
                <div className="p-6 bg-black rounded-sm border-l-4 border-[#00FF00]">
                   <span className="text-[#595E62] uppercase text-xs mb-2 block">// Korrektes Nesting</span>
                   <span className="text-[#D1B4FA]">"Dynacord"</span> <span className="text-[#ED1C24]">OR</span><br/>
                   <span className="text-[#FABBBD]">(</span><br/>
                   &nbsp;&nbsp;<span className="text-[#D1B4FA]">"EV"</span> <span className="text-[#ED1C24]">NEAR/15</span> <span className="text-white">"Speaker"</span><br/>
                   <span className="text-[#FABBBD]">)</span>
                </div>
                <div className="p-6 bg-[#2E3033] rounded-sm border-l-4 border-[#ED1C24]">
                   <span className="text-[#ED1C24] uppercase text-xs font-bold mb-2 block flex items-center gap-2"><AlertTriangle size={12}/> Inkorrekt (Mehrdeutig)</span>
                   <span className="opacity-50">"Dynacord" OR "EV" NEAR/15 "Speaker"</span>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. Side by Side Comparison */}
      <section className="scroll-mt-8" id="comparison">
        <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-8 flex items-center gap-3">
            <div className="p-2 bg-black text-white rounded-sm"><Shield size={20}/></div>
            Effizienz-Vergleich
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* BAD Query */}
          <div className="border border-[#E0E2E5] rounded-sm overflow-hidden bg-white shadow-sm hover:border-[#ED1C24] transition-colors group">
            <div className="bg-[#F8FAFC] p-6 border-b border-[#E0E2E5] flex justify-between items-center">
              <h3 className="font-bold text-[#595E62] uppercase tracking-wide flex items-center gap-2 group-hover:text-[#ED1C24]"><X size={20}/> Der löchrige Eimer</h3>
              <span className="text-[10px] font-bold bg-[#ED1C24] text-white px-2 py-1 uppercase">Präzision: &lt; 10%</span>
            </div>
            <div className="p-8 space-y-6">
              <div className="font-mono text-sm bg-black text-[#F14950] p-6 rounded-sm">
                ("EV" OR "Electro-Voice") <br/>
                <span className="text-white">AND</span> <br/>
                ("Speaker" OR "Amp")
              </div>
              <div className="space-y-4">
                <p className="text-sm text-[#595E62] flex gap-3">
                  <span className="font-bold text-black shrink-0">1.</span> Matcht Keywords irgendwo im Dokument.
                </p>
                <p className="text-sm text-[#595E62] flex gap-3">
                   <span className="font-bold text-black shrink-0">2.</span> "EV" matcht zu locker (Tesla, Poker).
                </p>
              </div>
            </div>
          </div>

          {/* GOOD Query */}
          <div className="border border-[#E0E2E5] rounded-sm overflow-hidden bg-white shadow-sm hover:border-[#6706EF] transition-colors group">
            <div className="bg-[#F8FAFC] p-6 border-b border-[#E0E2E5] flex justify-between items-center">
              <h3 className="font-bold text-[#595E62] uppercase tracking-wide flex items-center gap-2 group-hover:text-[#6706EF]"><Check size={20}/> Der Laser-Fokus</h3>
              <span className="text-[10px] font-bold bg-[#6706EF] text-white px-2 py-1 uppercase">Präzision: &gt; 90%</span>
            </div>
            <div className="p-8 space-y-6">
              <div className="font-mono text-sm bg-black text-[#00FF00] p-6 rounded-sm">
                "Electro-Voice" <br/>
                <span className="text-white">OR</span> <br/>
                ("EV" <span className="text-[#ED1C24] font-bold">NEAR/10</span> "Speaker")
              </div>
               <div className="space-y-4">
                <p className="text-sm text-[#595E62] flex gap-3">
                  <span className="font-bold text-black shrink-0">1.</span> Contextual Anchor fixiert Bedeutung.
                </p>
                <p className="text-sm text-[#595E62] flex gap-3">
                   <span className="font-bold text-black shrink-0">2.</span> Eindeutige Begriffe sind separiert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisualGuides;