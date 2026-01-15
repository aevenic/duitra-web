import { useState, useEffect } from 'react'
import { textHeading2, textSemi } from '../../data/uiStyles'

const CardBenefits = ({ title, description, index }) => {
  const num = index + 1;
  const [typedText, setTypedText] = useState('');

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
  }, [index]);

  const renderIllustration = () => {
    switch (index) {
      case 0: // Local & Cloud Storage
        return (
          <div className="relative h-48 w-full rounded-md bg-[#0c0c0c] bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center gap-4">
                {/* Local Device - Made square (w-16) and icon larger */}
                <div className="relative flex flex-col items-center justify-center h-16 w-16 rounded-lg bg-[#181818]/80 border border-blue-500/30 backdrop-blur shadow-lg shadow-blue-500/10">
                  <span className="material-symbols-outlined text-blue-400" style={{ fontSize: '28px' }}>smartphone</span>
                </div>

                {/* Sync Icon - Made larger */}
                <div className="flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-300" style={{ fontSize: '24px' }}>sync_alt</span>
                </div>

                {/* Cloud - Icon larger/clearer */}
                <div className="relative flex flex-col items-center justify-center h-16 w-16 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 shadow-lg shadow-blue-500/20">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '28px' }}>cloud_upload</span>
                </div>

                {/* Decor elements */}
                <div className="absolute -top-6 -right-4 w-20 h-20 bg-blue-500/20 blur-xl rounded-full"></div>
                <div className="absolute -bottom-6 -left-4 w-20 h-20 bg-blue-400/10 blur-xl rounded-full"></div>
              </div>
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
