import { useState, useEffect } from 'react'
import { textHeading2, textSemi } from '../../data/uiStyles'

const CardBenefits = ({ title, description, index }) => {
  const num = index + 1;
  const [typedText, setTypedText] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (index === 1) {
      const fullText = "> Analyzing expenses...\n> Pattern detected: high dining costs.\n> Suggested budget: Limit $200 for dining.";
      let charIndex = 0;
      let isTyping = true;
      let timeoutId;

      const type = () => {
        if (charIndex <= fullText.length) {
          setTypedText(fullText.substring(0, charIndex));
          charIndex++;
          timeoutId = setTimeout(type, 50);
        } else {
          // Pause for 4 seconds, then restart
          timeoutId = setTimeout(() => {
            charIndex = 0;
            setTypedText('');
            type();
          }, 4000);
        }
      };

      type();

      return () => {
        clearTimeout(timeoutId);
      };
    }

    if (index === 4) {
      // Import/Export Progress Animation
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 1;
        if (currentProgress > 100) {
          currentProgress = 0;
        }
        setProgress(currentProgress);
      }, 50); // 50ms * 100 = 5000ms for full cycle

      return () => clearInterval(interval);
    }
  }, [index]);

  const renderIllustration = () => {
    switch (index) {
      case 0: // Scan Receipt
        return (
          <div className="relative h-48 w-full rounded-md bg-[#0c0c0c] bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent overflow-hidden">
            <style>
              {`
                @keyframes scan-beam {
                  0%, 100% { top: 5%; opacity: 0; }
                  10%, 90% { opacity: 1; }
                  50% { top: 90%; }
                }
                @keyframes receipt-float {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-4px); }
                }
                .scan-beam-anim {
                  animation: scan-beam 2.5s ease-in-out infinite;
                }
                .receipt-float-anim {
                  animation: receipt-float 4s ease-in-out infinite;
                }
              `}
            </style>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-[200px] h-32 flex items-center justify-center">

                {/* Viewfinder Corners */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Top Left */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500 rounded-tl-lg"></div>
                  {/* Top Right */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500 rounded-tr-lg"></div>
                  {/* Bottom Left */}
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500 rounded-bl-lg"></div>
                  {/* Bottom Right */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500 rounded-br-lg"></div>
                </div>

                {/* Receipt Card */}
                <div className="receipt-float-anim relative w-20 h-28 bg-[#fafafa] rounded shadow-lg overflow-hidden flex flex-col items-center pt-3 pb-2 px-2">
                  {/* Receipt Header */}
                  <div className="w-8 h-8 rounded-full bg-neutral-200 mb-2"></div>
                  {/* Lines */}
                  <div className="w-full space-y-1.5 opacity-60">
                    <div className="h-1.5 w-full bg-neutral-300 rounded"></div>
                    <div className="h-1.5 w-3/4 bg-neutral-300 rounded"></div>
                    <div className="h-1.5 w-full bg-neutral-300 rounded"></div>
                    <div className="h-1.5 w-1/2 bg-neutral-300 rounded"></div>
                  </div>
                  {/* Total */}
                  <div className="mt-auto w-full pt-2 border-t border-neutral-200">
                    <div className="h-2 w-1/2 bg-neutral-800 rounded ml-auto"></div>
                  </div>
                </div>

                {/* Scan Beam */}
                <div className="scan-beam-anim absolute left-8 right-8 h-[2px] bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)] z-10">
                  <div className="absolute inset-0 bg-blue-400 blur-sm"></div>
                </div>

              </div>

              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>
            </div>
            <div className={`absolute bottom-1.5 left-1.5 p-3 bg-[#0c0c0c] rounded-lg flex items-center justify-center h-[40px] w-[40px] text-[20px] font-bold text-blue-300`}>{num}</div>
          </div>
        );
      case 1: // Integrated with AI
        return (
          <div className="relative h-48 w-full rounded-md bg-[#0c0c0c] bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center p-6">
              {/* Terminal Window */}
              <div className="w-full h-full bg-[#1e1e1e] rounded-md border border-neutral-700/40 shadow-xl overflow-hidden flex flex-col">
                {/* Terminal Header */}
                <div className="bg-[#2d2d2d] px-1.5 py-1.5 flex items-center gap-1.5 border-b border-neutral-700/40">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                {/* Terminal Content */}
                <div className="p-2 font-mono text-[12px] leading-relaxed text-blue-300">
                  <div className="whitespace-pre-line">
                    {typedText}
                    <span className="animate-pulse inline-block w-1 h-3 bg-blue-300 align-middle ml-1"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`absolute bottom-1.5 left-1.5 p-3 bg-[#0c0c0c] rounded-lg flex items-center justify-center h-[40px] w-[40px] text-[20px] font-bold text-blue-300`}>{num}</div>
          </div>
        );
      case 2: // Voice Note Input
        return (
          <div className="relative h-48 w-full rounded-md bg-[#0c0c0c] bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent overflow-hidden">
            <style>
              {`
                @keyframes waveform {
                  0%, 100% { height: 20%; }
                  50% { height: var(--peak, 90%); }
                }
                .waveform-bar {
                  animation: waveform 1.2s ease-in-out infinite;
                }
              `}
            </style>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">

                {/* Ripple Effect - Concentric circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-blue-500/30 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-blue-500/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-blue-500/10 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-blue-500/5 rounded-full"></div>

                {/* Audio Waveform Bars */}
                <div className="relative z-10 flex items-center gap-1.5 h-20">
                  {[30, 80, 50, 90, 60, 40, 75, 45, 85, 35].map((height, i) => (
                    <div
                      key={i}
                      className={`waveform-bar w-1.5 bg-gradient-to-t from-blue-600 to-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)]`}
                      style={{
                        height: `${height}%`,
                        '--peak': (i === 0 || i === 9) ? '65%' : '90%',
                        animationDuration: `${0.8 + (i % 4) * 0.2}s`,
                        animationDelay: `${i * 0.15}s`,
                        opacity: 0.7 + (i % 3) * 0.15
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>
            </div>
            <div className={`absolute bottom-1.5 left-1.5 p-3 bg-[#0c0c0c] rounded-lg flex items-center justify-center h-[40px] w-[40px] text-[20px] font-bold text-blue-300`}>{num}</div>
          </div>
        );
      case 3: // Smart Notification
        return (
          <div className="relative h-48 w-full rounded-md bg-[#0c0c0c] bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent overflow-hidden">
            <style>
              {`
                @keyframes cursor-move {
                  0% { transform: translate(-40px, 80px); opacity: 0; }
                  10% { opacity: 1; }
                  30%, 45% { transform: translate(-12px, 16px); opacity: 1; }
                  50% { transform: translate(-8px, 20px); opacity: 0; }
                  100% { opacity: 0; }
                }
                @keyframes bell-tap {
                  0%, 30% { transform: scale(1); filter: brightness(1); }
                  40% { transform: scale(0.9); filter: brightness(0.6) contrast(1.2); }
                  45%, 100% { transform: scale(1); filter: brightness(1); }
                }
                @keyframes card-sequence {
                  0%, 42% { transform: translateY(-50px); opacity: 0; pointer-events: none; }
                  60%, 90% { transform: translateY(-38px); opacity: 1; pointer-events: auto; }
                  100% { transform: translateY(-50px); opacity: 0; pointer-events: none; }
                }
                @keyframes pulse-red-lite {
                  0%, 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
                  50% { box-shadow: 0 0 15px 1px rgba(239, 68, 68, 0.3); }
                }
                .cursor-anim {
                  animation: cursor-move 5.5s infinite;
                }
                .bell-anim {
                  animation: bell-tap 5.5s infinite;
                }
                .card-anim {
                  animation: card-sequence 5.5s infinite;
                }
                .pulse-red-lite-anim {
                  animation: pulse-red-lite 2s infinite;
                }
              `}
            </style>

            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="w-full max-w-[220px] h-full relative">

                {/* Bell Icon Wrapper */}
                <div className="relative z-20">
                  <div className="bell-anim h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 relative">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>notifications</span>

                    {/* Visual Tap Ripple */}
                    <div className="absolute inset-0 rounded-xl bg-white/40 opacity-0 animate-ping" style={{ animationIterationCount: 1, animationDelay: '2.4s', animationDuration: '0.6s' }}></div>
                  </div>

                  {/* Cursor Icon */}
                  <div className="cursor-anim absolute top-0 left-0 z-30 pointer-events-none">
                    <span className="material-symbols-outlined text-white drop-shadow-lg" style={{ fontSize: '24px' }}>near_me</span>
                  </div>
                </div>

                {/* Notification Card - Now absolutely positioned relative to the container to slide 'over' or 'below' without pushing */}
                <div className="card-anim absolute top-12 left-0 right-0 bg-[#181818] border-2 border-red-400/40 rounded-xl p-3.5 shadow-2xl relative z-10">
                  <div className="pulse-red-lite-anim absolute inset-0 rounded-xl pointer-events-none"></div>
                  <div className="relative z-10 space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 shrink-0 rounded-full bg-red-500" />
                        <p className="text-[13px] font-bold text-white leading-none">Limit reached!</p>
                      </div>
                      <p className="text-[10px] text-neutral-400">Just now</p>
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-tight">
                      You've spent <span className="text-red-400 font-bold">$205</span> of <span className="text-white">$200</span> in Dining.
                    </p>
                  </div>
                </div>
              </div>

              {/* Background ambient elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full"></div>
            </div>

            <div className={`absolute bottom-1.5 left-1.5 p-3 bg-[#0c0c0c] rounded-lg flex items-center justify-center h-[40px] w-[40px] text-[20px] font-bold text-blue-300`}>{num}</div>
          </div>
        );
      case 4: // Import & Export Data
        return (
          <div className="relative h-48 w-full rounded-md bg-[#0c0c0c] bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent overflow-hidden">
            <style>
              {`
                @keyframes dash-move {
                  to { stroke-dashoffset: -20; }
                }
                @keyframes card-fade-csv {
                  0%, 45% { opacity: 1; transform: scale(1); }
                  50%, 95% { opacity: 0.3; transform: scale(0.95); }
                  100% { opacity: 1; transform: scale(1); }
                }
                @keyframes card-fade-pdf {
                  0%, 45% { opacity: 0.3; transform: scale(0.95); }
                  50%, 95% { opacity: 1; transform: scale(1); }
                  100% { opacity: 0.3; transform: scale(0.95); }
                }
                .dash-anim { animation: dash-move 1s linear infinite; }
                .card-csv-anim { animation: card-fade-csv 4s infinite ease-in-out; }
                .card-pdf-anim { animation: card-fade-pdf 4s infinite ease-in-out; }
              `}
            </style>

            <div className="absolute inset-0 flex items-center justify-center p-6 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)]">
              <div className="relative w-full h-full flex items-center justify-between px-4">

                {/* Left Side: Mobile App UI */}
                <div className="w-1/3 flex items-center justify-center z-10">
                  {/* Mobile Phone Frame */}
                  <div className="relative w-[80px] h-[140px] bg-[#1a1a1a] border border-neutral-600/50 rounded-xl shadow-xl overflow-hidden flex flex-col">
                    {/* Phone Notch */}
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-neutral-800 rounded-full z-10"></div>
                    {/* Phone Screen */}
                    <div className="flex-1 bg-[#252525] m-1 mt-3 rounded-lg overflow-hidden flex flex-col">
                      {/* App Header */}
                      <div className="h-3 bg-blue-500/20 border-b border-blue-500/30 flex items-center pl-2">
                        <div className="w-4 h-0.5 bg-blue-400/50 rounded-full"></div>
                      </div>
                      {/* App Body */}
                      <div className="p-1.5 space-y-1 flex-1">
                        <div className="h-6 bg-blue-500/10 rounded border border-blue-500/20"></div>
                        <div className="space-y-0.5">
                          <div className="h-1 w-full bg-neutral-700 rounded"></div>
                          <div className="h-1 w-3/4 bg-neutral-700 rounded"></div>
                          <div className="h-1 w-1/2 bg-neutral-700 rounded"></div>
                        </div>
                      </div>
                      {/* Sync Icon */}
                      <div className="flex justify-center pb-2.5">
                        <span className="material-symbols-outlined text-[10px] text-blue-400 animate-spin" style={{ animationDuration: '3s' }}>sync</span>
                      </div>
                    </div>
                    {/* Phone Button */}
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-neutral-600 rounded-full"></div>
                  </div>
                </div>

                {/* Center: Connectors & Progress */}
                <div className="flex-1 flex flex-col items-center justify-center px-2 relative h-full">
                  {/* Animated Dashed Line */}
                  <div className="w-full h-[2px] relative overflow-hidden mb-0.5">
                    <svg width="100%" height="2">
                      <line x1="0" y1="1" x2="100%" y2="1" stroke="#60A5FA" strokeWidth="2" strokeDasharray="4 4" className="dash-anim" opacity="0.6" />
                    </svg>
                  </div>

                  {/* Digital Percentage Counter */}
                  <div className="font-mono font-semibold text-blue-400 tabular-nums">
                    {progress}%
                  </div>
                </div>

                {/* Right Side: Floating Cards (CSV & PDF) */}
                <div className="flex flex-col gap-3 justify-center items-center w-1/3 z-10">
                  {/* CSV Card */}
                  <div className="card-csv-anim flex items-center gap-2 px-3 py-2 bg-[#1e1e1e] border border-green-500/30 rounded-lg shadow-lg shadow-green-500/10 w-full max-w-[100px]">
                    <div className="w-6 h-6 rounded bg-green-500/20 flex items-center justify-center">
                      <span className="text-[8px] font-bold text-green-400">CSV</span>
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="h-1 w-full bg-neutral-700 rounded-full"></div>
                      <div className="h-1 w-2/3 bg-neutral-700 rounded-full"></div>
                    </div>
                  </div>

                  {/* PDF Card */}
                  <div className="card-pdf-anim flex items-center gap-2 px-3 py-2 bg-[#1e1e1e] border border-red-500/30 rounded-lg shadow-lg shadow-red-500/10 w-full max-w-[100px]">
                    <div className="w-6 h-6 rounded bg-red-500/20 flex items-center justify-center">
                      <span className="text-[8px] font-bold text-red-400">PDF</span>
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="h-1 w-full bg-neutral-700 rounded-full"></div>
                      <div className="h-1 w-2/3 bg-neutral-700 rounded-full"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className={`absolute bottom-1.5 left-1.5 p-3 bg-[#0c0c0c] rounded-lg flex items-center justify-center h-[40px] w-[40px] text-[20px] font-bold text-blue-300`}>{num}</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-neutral-900/50 backdrop-blur-sm border border-white/5 p-4 rounded-xl flex flex-col gap-5 hover:bg-neutral-800/50 transition-all duration-500 group overflow-hidden">
      {renderIllustration()}
      <div className="space-y-2">
        <h3 className={`${textHeading2} font-bold text-white group-hover:text-blue-400 transition-colors duration-300`}>
          {title}
        </h3>
        <p className={`${textSemi} text-[14px] leading-relaxed`}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default CardBenefits
