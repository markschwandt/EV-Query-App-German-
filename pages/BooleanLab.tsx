import React, { useState, useEffect } from 'react';
import { AlertTriangle, CheckCircle, RefreshCcw, Info, Search } from 'lucide-react';

const BooleanLab: React.FC = () => {
  const [query, setQuery] = useState('');
  const [feedback, setFeedback] = useState<FeedbackState>({ status: 'idle', message: 'Geben Sie eine Query ein, um die Effektivität zu testen.', score: 0 });
  const [activeTab, setActiveTab] = useState<'editor' | 'examples'>('editor');

  const analyzeQuery = (q: string) => {
    const lowerQ = q.toLowerCase();
    
    // Logic remains English (standard Query syntax), messages translated
    if ((lowerQ.includes('"ev"') || lowerQ.includes(' ev ')) && !lowerQ.includes('near') && !lowerQ.includes('electro-voice')) {
      return setFeedback({
        status: 'error',
        message: 'KRITISCH: Suche nach "EV" ohne NEAR-Kontext findet Tesla-Rauschen. Präzision: < 5%.',
        score: 10
      });
    }
    if (lowerQ.includes('battery') && !lowerQ.includes('not')) {
      if (lowerQ.includes('near')) {
         return setFeedback({
          status: 'warning',
          message: 'WARNUNG: "Battery" ist riskant. Stellen Sie sicher, dass Sie NEAR/x nutzen, um es mit "Speaker" zu verknüpfen.',
          score: 60
        });
      }
    }
    if (lowerQ.includes('near/') && (lowerQ.includes('speaker') || lowerQ.includes('mic') || lowerQ.includes('amp'))) {
       return setFeedback({
        status: 'success',
        message: 'EXZELLENT: Kontext-Anker erkannt. Marke wird mit Audio-Begriffen verknüpft.',
        score: 95
      });
    }
    if (lowerQ.includes('dynacord') && lowerQ.includes('not') && lowerQ.includes('tape')) {
      return setFeedback({
        status: 'success',
        message: 'SUPER: Dynacord wird getrackt, Vintage "Tape Echo" Rauschen ausgeschlossen.',
        score: 90
      });
    }
    if (q.length === 0) {
      return setFeedback({ status: 'idle', message: 'Tippen Sie los für Echtzeit-Feedback...', score: 0 });
    }
    return setFeedback({
      status: 'neutral',
      message: 'Denken Sie an die 3 Schritte: Einschlüsse, Kontext (NEAR/x) und Ausschlüsse.',
      score: 40
    });
  };

  useEffect(() => {
    analyzeQuery(query);
  }, [query]);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-black uppercase tracking-tight leading-none mb-2">Boolean Labor</h1>
          <p className="text-[#595E62]">Testen Sie Ihre Logik gegen die "Automotive Noise" Filtersimulation.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Editor Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-sm shadow-sm border border-[#E0E2E5] overflow-hidden">
            <div className="bg-[#F8FAFC] border-b border-[#E0E2E5] px-6 py-4 flex gap-8">
              <button 
                onClick={() => setActiveTab('editor')}
                className={`text-sm font-bold uppercase tracking-wide pb-1 border-b-2 transition-colors ${activeTab === 'editor' ? 'text-[#ED1C24] border-[#ED1C24]' : 'text-[#979EA4] border-transparent hover:text-black'}`}
              >
                Query Editor
              </button>
              <button 
                onClick={() => setActiveTab('examples')}
                className={`text-sm font-bold uppercase tracking-wide pb-1 border-b-2 transition-colors ${activeTab === 'examples' ? 'text-[#ED1C24] border-[#ED1C24]' : 'text-[#979EA4] border-transparent hover:text-black'}`}
              >
                Spickzettel
              </button>
            </div>
            
            <div className="p-0">
              {activeTab === 'editor' ? (
                <>
                  <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder='("EV" NEAR/10 "Speaker") NOT ("Tesla" OR "Car")'
                    className="w-full h-64 p-6 font-mono text-sm bg-[#000000] text-[#00FF00] focus:ring-0 outline-none resize-none placeholder-gray-600"
                    spellCheck="false"
                  />
                  <div className="bg-[#000000] p-4 flex justify-end border-t border-[#1A1C1D]">
                    <button 
                      onClick={() => setQuery('')}
                      className="text-xs text-[#979EA4] hover:text-[#ED1C24] flex items-center gap-2 uppercase font-bold tracking-wider"
                    >
                      <RefreshCcw size={12} /> Konsole leeren
                    </button>
                  </div>
                </>
              ) : (
                <div className="h-64 overflow-y-auto p-6 space-y-4 bg-white">
                  <div className="p-4 bg-[#F8FAFC] border-l-4 border-[#ED1C24]">
                    <p className="text-[10px] font-bold text-[#979EA4] uppercase mb-2">Der Gold-Standard</p>
                    <code className="text-xs font-mono text-black block break-words">
                      ("Electro-Voice" OR ("EV" NEAR/10 ("Speaker" OR "Mic" OR "ZLX"))) NOT ("Tesla" OR "Car")
                    </code>
                  </div>
                  <div className="p-4 bg-[#F8FAFC] border-l-4 border-[#6706EF]">
                    <p className="text-[10px] font-bold text-[#979EA4] uppercase mb-2">Dynacord Sauber</p>
                    <code className="text-xs font-mono text-black block break-words">
                      "Dynacord" NOT ("Tape Echo" OR "Vintage" OR "Auction")
                    </code>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Feedback Section */}
          <div className={`rounded-sm p-8 border-l-4 shadow-sm transition-all duration-300 ${
            feedback.status === 'error' ? 'bg-[#FFF5F5] border-[#ED1C24]' :
            feedback.status === 'success' ? 'bg-[#F0FFF4] border-[#10B981]' : // Green allowed for Success state
            feedback.status === 'warning' ? 'bg-[#FFFAF0] border-[#F59E0B]' :
            'bg-white border-[#E0E2E5]'
          }`}>
            <div className="flex items-start gap-6">
              <div className={`mt-1 p-3 rounded-full shrink-0 ${
                 feedback.status === 'error' ? 'bg-[#ED1C24] text-white' :
                 feedback.status === 'success' ? 'bg-[#10B981] text-white' :
                 feedback.status === 'warning' ? 'bg-[#F59E0B] text-white' :
                 'bg-[#E0E2E5] text-white'
              }`}>
                {feedback.status === 'error' ? <AlertTriangle size={24} /> :
                 feedback.status === 'success' ? <CheckCircle size={24} /> :
                 feedback.status === 'warning' ? <Info size={24} /> :
                 <Search size={24} />}
              </div>
              <div>
                <h3 className="font-bold text-xl uppercase tracking-tight text-black mb-1">
                  Präzisions-Score: <span className={feedback.status === 'error' ? 'text-[#ED1C24]' : 'text-black'}>{feedback.score}%</span>
                </h3>
                <p className="text-[#595E62] leading-relaxed">
                  {feedback.message}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Sidebar */}
        <div className="space-y-6">
          <div className="bg-[#000000] p-8 rounded-sm text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#ED1C24] rounded-full blur-[60px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
            <h3 className="font-bold uppercase tracking-tight mb-6 flex items-center gap-3">
              <Info size={20} className="text-[#ED1C24]"/> Logik-Gatter
            </h3>
            <ul className="space-y-4 text-sm text-[#E0E2E5]">
              <li className="flex flex-col gap-1">
                <span className="font-mono text-[#ED1C24] font-bold">NEAR/x</span>
                <span className="opacity-80">Das "Schiebefenster". Kritisch für "EV".</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-mono text-[#ED1C24] font-bold">NOT</span>
                <span className="opacity-80">Die Leitplanke. Schließt spezifisches Rauschen aus.</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-mono text-[#ED1C24] font-bold">""</span>
                <span className="opacity-80">Exakte Phrase. Wichtig für "Live Sound".</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-sm border border-[#E0E2E5]">
            <h3 className="font-bold text-[#ED1C24] uppercase tracking-wider text-xs mb-3">Profi-Tipp</h3>
            <h4 className="font-bold text-black uppercase mb-2">Das Batterie-Paradoxon</h4>
            <p className="text-sm text-[#595E62] leading-relaxed">
              EV-Autos nutzen Batterien (Rauschen). EVERSE-Lautsprecher nutzen Batterien (Signal). 
              <br/><br/>
              Schließen Sie "Battery" NICHT global aus. Nutzen Sie: <br/>
              <code className="text-xs bg-[#F1F5F9] p-1 mt-1 block text-black">NOT ("EV" NEAR/5 "Car Battery")</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeedbackState {
  status: 'idle' | 'success' | 'warning' | 'error' | 'neutral';
  message: string;
  score: number;
}

export default BooleanLab;