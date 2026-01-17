import React from 'react';
import { CloudLightning, Zap, Radio, Volume2 } from 'lucide-react';

const TheNoiseProblem: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-black uppercase tracking-tight leading-none mb-6">Die "EV" Identitätskrise</h1>
        <p className="text-lg text-[#595E62]">
          Das Akronym "EV" ist einer der am stärksten überladenen Begriffe. 
          Ohne Präzisions-Engineering sind unsere Daten wertlos.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* The Noise */}
        <div className="bg-white border-2 border-[#ED1C24] rounded-sm p-10 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <CloudLightning size={160} className="text-black" />
          </div>
          <h2 className="text-2xl font-bold text-[#ED1C24] mb-6 flex items-center gap-3 uppercase tracking-tight">
            <Zap size={24} /> Das Rauschen (99%)
          </h2>
          <ul className="space-y-4">
            {[
              "Automobil: Tesla, Rivian, Laden, Reichweitenangst",
              "Finanzen: +EV (Erwartungswert bei Poker/Wetten)",
              "Fotografie: EV (Lichtwert / Exposure Value)",
              "Biologie: Extrazelluläre Vesikel"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-black text-sm font-medium">
                <span className="font-bold text-[#ED1C24]">×</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* The Signal */}
        <div className="bg-black border border-black rounded-sm p-10 relative overflow-hidden shadow-2xl transform md:-translate-x-6 text-white">
           <div className="absolute inset-0 bg-gradient-to-br from-[#1A1C1D] to-black z-0"></div>
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <Radio size={160} className="text-white" />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 uppercase tracking-tight">
                <Volume2 size={24} className="text-[#00FF00]"/> Das Signal (1%)
            </h2>
            <ul className="space-y-4">
                {[
                "Professionelles Audio: Line Array, Subwoofer, PA",
                "Produktlinien: ZLX, EVERSE, RE20, EVID",
                "Kontext: 'Live Sound', 'Gig', 'Soundcheck'",
                "Dynacord Verbindung: Amps, Mixer, SONICUE"
                ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-[#E0E2E5] text-sm">
                    <span className="font-bold text-[#00FF00]">✓</span> {item}
                </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-12 rounded-sm border border-[#E0E2E5] shadow-sm mt-8">
        <h3 className="text-xl font-bold text-black uppercase tracking-tight mb-8">Die Lösung: Contextual Anchors</h3>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-mono">
          <div className="flex-1 bg-[#F8FAFC] p-6 rounded-sm text-center border border-[#E0E2E5] opacity-50">
            "EV"
            <div className="text-xs text-[#979EA4] uppercase mt-2 tracking-widest">Zu Breit</div>
          </div>
          <div className="text-[#979EA4] font-bold">→</div>
          <div className="flex-1 bg-[#F8FAFC] p-6 rounded-sm text-center border border-[#E0E2E5] opacity-50">
            "EV" AND "Speaker"
            <div className="text-xs text-[#979EA4] uppercase mt-2 tracking-widest">Riskant</div>
          </div>
          <div className="text-[#ED1C24] font-bold">→</div>
          <div className="flex-1 bg-black p-6 rounded-sm text-center border-2 border-[#ED1C24] text-white font-bold shadow-lg relative">
            "EV" NEAR/10 "Speaker"
            <div className="text-xs text-[#ED1C24] uppercase mt-2 tracking-widest">Proximity Lock</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheNoiseProblem;