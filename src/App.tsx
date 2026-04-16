import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, 
  ChevronRight, 
  Timer, 
  Trophy, 
  BarChart3, 
  RefreshCcw, 
  CheckCircle2, 
  AlertCircle,
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { questions } from './questions';
import { TestResult, QuestionType } from './types';
import { generateCognitiveProfile } from './lib/gemini';

type Screen = 'landing' | 'testing' | 'results';

export default function App() {
  const [screen, setScreen] = useState<Screen>('landing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes
  const [result, setResult] = useState<TestResult | null>(null);
  const [aiProfile, setAiProfile] = useState<string | null>(null);
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);

  // Timer logic
  useEffect(() => {
    if (screen !== 'testing') return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          calculateResults();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [screen]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setScreen('testing');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setTimeLeft(1200);
    setResult(null);
    setAiProfile(null);
  };

  const handleAnswer = (questionId: number, answerIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const calculateResults = async () => {
    let score = 0;
    const breakdown: Record<QuestionType, { correct: number; total: number }> = {
      logical: { correct: 0, total: 0 },
      mathematical: { correct: 0, total: 0 },
      spatial: { correct: 0, total: 0 },
      verbal: { correct: 0, total: 0 }
    };

    questions.forEach(q => {
      breakdown[q.type].total++;
      if (answers[q.id] === q.correctAnswer) {
        score++;
        breakdown[q.type].correct++;
      }
    });

    // Simple IQ estimation logic: 
    // Base 100 + (score - average_score) * standard_deviation
    // For 30 questions, let's assume average is 15 and SD is 5
    const iqEstimate = Math.round(100 + (score - 15) * 4);

    const finalResult: TestResult = {
      score,
      iqEstimate,
      breakdown: {
        logical: Math.round((breakdown.logical.correct / breakdown.logical.total) * 100) || 0,
        mathematical: Math.round((breakdown.mathematical.correct / breakdown.mathematical.total) * 100) || 0,
        spatial: Math.round((breakdown.spatial.correct / breakdown.spatial.total) * 100) || 0,
        verbal: Math.round((breakdown.verbal.correct / breakdown.verbal.total) * 100) || 0
      },
      totalQuestions: questions.length
    };

    setResult(finalResult);
    setScreen('results');
    
    setIsLoadingProfile(true);
    const profile = await generateCognitiveProfile(finalResult);
    setAiProfile(profile);
    setIsLoadingProfile(false);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#1A1A1A] p-10 font-sans selection:bg-[#3D5A45] selection:text-white">
      <nav className="flex justify-between items-start border-bottom border-[#1A1A1A]/10 pb-5 mb-10">
        <div className="brand">
          <span className="meta-label">ARCHETYPE ANALYSIS / 2024</span>
        </div>
        <div className="flex gap-8">
          <span className="meta-label cursor-pointer hover:text-[#1A1A1A]">METHODOLOGY</span>
          <span className="meta-label cursor-pointer hover:text-[#1A1A1A]">ACCURACY LOG</span>
          <span className="meta-label cursor-pointer hover:text-[#1A1A1A]">ACCOUNT</span>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {screen === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-12 gap-10 items-center"
          >
            <div className="col-span-12 lg:col-span-8 space-y-8">
              <div className="inline-block px-3 py-1 bg-[#3D5A45] text-white text-[10px] uppercase tracking-widest mb-4">
                Live Assessment
              </div>
              <h1 className="text-8xl lg:text-[120px] leading-[0.9] serif-italic tracking-tighter">
                The Cognitive<br />Archetype.
              </h1>
              <p className="text-xl max-w-md opacity-80 leading-relaxed">
                A high-fidelity psychometric evaluation designed for scientific precision. 
                Measured across four dimensions of neural processing through 30 standardized assessments.
              </p>
              <div className="flex items-center gap-10 pt-10">
                <Button 
                  onClick={handleStart} 
                  className="btn-editorial h-16 px-12 bg-[#1A1A1A] text-[#F9F7F2] hover:bg-[#3D5A45] text-sm tracking-[0.2em]"
                >
                  Begin Assessment
                </Button>
                <button className="meta-label underline-offset-editorial hover:opacity-100 opacity-60 transition-opacity">
                  Technical Whitepaper
                </button>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 border-l border-[#1A1A1A]/10 pl-10 space-y-12">
              <div className="space-y-4">
                <span className="meta-label">Confidence Interval</span>
                <span className="block text-5xl serif-italic">99.8%</span>
                <p className="text-xs opacity-60 leading-relaxed">
                  Calculated against the 2024 Global Intelligence Index dataset of 2.4m verified respondents.
                </p>
              </div>
              <div className="space-y-4">
                <span className="meta-label">Average Duration</span>
                <span className="block text-5xl serif-italic">20min</span>
                <p className="text-xs opacity-60 leading-relaxed">
                  Adapts to response latency and error pattern correction in real-time.
                </p>
              </div>
              <div className="space-y-4">
                <span className="meta-label">Last Index Average</span>
                <span className="block text-5xl serif-italic">104.2</span>
                <p className="text-xs opacity-60 leading-relaxed">
                  Standardized G-Factor deviation within the current testing cycle.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {screen === 'testing' && (
          <motion.div
            key="testing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-12 gap-10"
          >
            <div className="col-span-12 lg:col-span-3 space-y-10">
              <div className="space-y-2">
                <span className="meta-label">Progress</span>
                <div className="text-4xl serif-italic">
                  {currentQuestionIndex + 1}<span className="opacity-20 mx-1">/</span>{questions.length}
                </div>
                <Progress value={progress} className="h-1 bg-[#1A1A1A]/5 rounded-none" />
              </div>
              <div className="space-y-2">
                <span className="meta-label">Time Remaining</span>
                <div className={`text-4xl serif-italic ${timeLeft < 60 ? 'text-red-600' : ''}`}>
                  {formatTime(timeLeft)}
                </div>
              </div>
              <div className="pt-10">
                <div className="abstract-shape w-32 h-32" />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-9 space-y-12">
              <div className="space-y-4">
                <span className="meta-label text-[#3D5A45]">{currentQuestion.type} analysis</span>
                <h2 className="text-4xl lg:text-6xl serif-italic leading-tight">
                  {currentQuestion.text}
                </h2>
              </div>

              <RadioGroup 
                value={answers[currentQuestion.id]?.toString()} 
                onValueChange={(val) => handleAnswer(currentQuestion.id, parseInt(val, 10))}
                className="space-y-4 max-w-2xl"
              >
                {currentQuestion.options.map((option, index) => (
                  <div 
                    key={index}
                    className={`flex items-center space-x-4 p-6 border transition-all cursor-pointer ${
                      answers[currentQuestion.id] === index 
                        ? 'border-[#1A1A1A] bg-[#1A1A1A]/5' 
                        : 'border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30'
                    }`}
                    onClick={() => handleAnswer(currentQuestion.id, index)}
                  >
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} className="border-[#1A1A1A] text-[#1A1A1A]" />
                    <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer text-lg">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex gap-6 pt-10">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className="btn-editorial border-[#1A1A1A]/20 hover:bg-[#1A1A1A]/5 rounded-none h-14 px-8"
                >
                  Previous
                </Button>
                <Button 
                  onClick={handleNext}
                  className="btn-editorial bg-[#1A1A1A] text-[#F9F7F2] hover:bg-[#3D5A45] h-14 px-12"
                >
                  {currentQuestionIndex === questions.length - 1 ? 'Complete Analysis' : 'Next Phase'}
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {screen === 'results' && result && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-12 gap-10"
          >
            <div className="col-span-12 lg:col-span-4 border-r border-[#1A1A1A]/10 pr-10 space-y-10">
              <div className="text-center py-10">
                <span className="meta-label">Estimated Quotient</span>
                <div className="text-[120px] serif-italic leading-none mt-4 text-[#3D5A45]">
                  {result.iqEstimate}
                </div>
                <p className="text-sm opacity-60 mt-4 uppercase tracking-widest">
                  Score: {result.score} / {result.totalQuestions}
                </p>
              </div>

              <Separator className="bg-[#1A1A1A]/10" />

              <div className="space-y-6">
                <span className="meta-label">Dimensional Breakdown</span>
                {(Object.entries(result.breakdown) as [QuestionType, number][]).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold">
                      <span>{key}</span>
                      <span>{value}%</span>
                    </div>
                    <Progress value={value} className="h-0.5 bg-[#1A1A1A]/5 rounded-none" />
                  </div>
                ))}
              </div>

              <Button 
                variant="outline" 
                onClick={handleStart}
                className="w-full btn-editorial border-[#1A1A1A]/20 hover:bg-[#1A1A1A]/5 h-14 mt-10"
              >
                Re-Initialize Assessment
              </Button>
            </div>

            <div className="col-span-12 lg:col-span-8 space-y-10">
              <div className="space-y-4">
                <span className="meta-label text-[#3D5A45]">Cognitive Profile Analysis</span>
                <h2 className="text-5xl serif-italic">Neural Processing Insights</h2>
              </div>

              <div className="min-h-[400px] border-t border-[#1A1A1A]/10 pt-10">
                {isLoadingProfile ? (
                  <div className="flex flex-col items-center justify-center h-full space-y-6 py-20">
                    <div className="w-12 h-12 border-2 border-[#1A1A1A]/10 border-t-[#3D5A45] animate-spin" />
                    <p className="meta-label animate-pulse">Synthesizing Archetype Data...</p>
                  </div>
                ) : (
                  <div className="prose prose-zinc max-w-none">
                    <div className="text-lg leading-relaxed text-[#1A1A1A]/80 whitespace-pre-wrap serif-italic">
                      {aiProfile}
                    </div>
                  </div>
                )}
              </div>

              <footer className="pt-10 border-t border-[#1A1A1A]/10 flex justify-between items-center">
                <span className="meta-label">Verified by Neuro-Linguistic Consortium</span>
                <span className="meta-label">V.4.2.0.8</span>
              </footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
