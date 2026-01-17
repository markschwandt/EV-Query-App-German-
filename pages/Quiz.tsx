import React, { useState } from 'react';
import { Check, X, Award, RefreshCw } from 'lucide-react';
import { quizQuestions } from '../data/quizData';

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerClick = (index: number, isCorrect: boolean) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    const nextQ = currentQuestion + 1;
    if (nextQ < quizQuestions.length) {
      setCurrentQuestion(nextQ);
      setIsAnswered(false);
      setSelectedOption(null);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setIsAnswered(false);
    setSelectedOption(null);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-12 animate-fade-in">
      <h1 className="text-4xl font-bold text-black text-center uppercase tracking-tight leading-none">Analysten-Zertifizierung</h1>

      {showScore ? (
        <div className="bg-white rounded-sm shadow-lg border border-[#E0E2E5] p-16 text-center">
          <div className="inline-flex items-center justify-center p-6 bg-[#000000] rounded-full mb-8">
            <Award size={64} className="text-[#ED1C24]" />
          </div>
          <h2 className="text-3xl font-bold mb-4 uppercase text-black">Dein Ergebnis: {score} von {quizQuestions.length}</h2>
          <p className="text-[#595E62] mb-12 text-lg">
            {score === quizQuestions.length 
              ? "Perfekt! Du bist ein Query Engineering Meister." 
              : score > quizQuestions.length / 2 
              ? "Gut gemacht! Überprüfe den Spickzettel um 100% zu erreichen." 
              : "Überprüfe die Lernmodule und versuche es erneut."}
          </p>
          <button 
            onClick={resetQuiz}
            className="inline-flex items-center px-8 py-4 bg-[#ED1C24] hover:bg-[#B9161C] text-white rounded-sm transition-colors uppercase font-bold tracking-wider"
          >
            <RefreshCw size={18} className="mr-3" /> Quiz Neustarten
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-sm shadow-sm border border-[#E0E2E5] overflow-hidden">
          {/* Progress Bar with Gradient */}
          <div className="w-full bg-[#E0E2E5] h-1">
            <div 
              className="bg-gradient-to-r from-[#ED1C24] to-[#6706EF] h-1 transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>

          <div className="p-10">
            <div className="mb-8">
              <span className="text-xs font-bold text-[#979EA4] tracking-widest uppercase">Frage {currentQuestion + 1}/{quizQuestions.length}</span>
              <h2 className="text-2xl font-bold text-black mt-4 leading-tight">{quizQuestions[currentQuestion].question}</h2>
            </div>

            <div className="space-y-4">
              {quizQuestions[currentQuestion].options.map((option, index) => {
                const isSelected = selectedOption === index;
                const isCorrect = option.isCorrect;
                
                let buttonStyle = "border-[#E0E2E5] hover:bg-[#F8FAFC] hover:border-[#979EA4]";
                if (isAnswered) {
                  if (isCorrect) buttonStyle = "bg-[#F0FFF4] border-[#10B981] text-[#065F46]"; // Green allowed for semantic correctness
                  else if (isSelected && !isCorrect) buttonStyle = "bg-[#FFF5F5] border-[#ED1C24] text-[#ED1C24]";
                  else buttonStyle = "border-[#E0E2E5] opacity-40";
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index, option.isCorrect)}
                    disabled={isAnswered}
                    className={`w-full text-left p-5 rounded-sm border transition-all ${buttonStyle} flex items-center justify-between group`}
                  >
                    <span className="font-medium">{option.text}</span>
                    {isAnswered && isCorrect && <Check size={20} className="text-[#10B981]" />}
                    {isAnswered && isSelected && !isCorrect && <X size={20} className="text-[#ED1C24]" />}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div className="mt-8 pt-8 border-t border-[#E0E2E5] animate-fade-in flex flex-col items-end">
                <p className="text-[#595E62] mb-6 bg-[#F8FAFC] p-6 rounded-sm text-sm w-full border-l-4 border-[#6706EF]">
                  <span className="font-bold block mb-2 text-black uppercase text-xs tracking-wider">Erklärung</span>
                  {quizQuestions[currentQuestion].explanation}
                </p>
                <button 
                  onClick={nextQuestion}
                  className="bg-black text-white px-8 py-3 rounded-sm hover:bg-[#1A1C1D] font-bold uppercase tracking-wide text-sm"
                >
                  {currentQuestion === quizQuestions.length - 1 ? "Beenden" : "Nächste Frage"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;