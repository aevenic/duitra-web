import React from 'react'
import { textSemi } from '../../data/uiStyles'

const CardProblem = ({ text, index }) => {

  const renderIllustration = () => {
    switch (index) {
      case 0: // Expenses feel random (Chaos)
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <style>
              {`
                @keyframes float-random-1 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 33% { transform: translate(10px, -10px) rotate(10deg); } 66% { transform: translate(-5px, 5px) rotate(-5deg); } }
                @keyframes float-random-2 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 33% { transform: translate(-10px, 10px) rotate(-10deg); } 66% { transform: translate(5px, -5px) rotate(5deg); } }
                @keyframes float-random-3 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 33% { transform: translate(5px, 10px) rotate(5deg); } 66% { transform: translate(-10px, -10px) rotate(-5deg); } }
              `}
            </style>
            <div className="relative w-36 h-28">
              {/* Scattered Icons */}
              <div className="absolute bottom-4 left-4 flex justify-center items-center w-[45px] h-[45px] bg-red-900/40 rounded-lg border border-red-500/30 text-red-400" style={{ animation: 'float-random-1 4s ease-in-out infinite' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>receipt_long</span>
              </div>
              <div className="absolute bottom-4 right-2 flex justify-center items-center w-[45px] h-[45px] bg-red-900/40 rounded-lg border border-red-500/30 text-red-400" style={{ animation: 'float-random-2 5s ease-in-out infinite' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>shopping_bag</span>
              </div>
              <div className="absolute top-0 left-12 flex justify-center items-center w-[45px] h-[45px] bg-red-900/40 rounded-lg border border-red-500/30 text-red-400" style={{ animation: 'float-random-3 4.5s ease-in-out infinite' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>payments</span>
              </div>
              {/* Connection Lines (Dash) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                <path d="M15 15 L129 97 M129 15 L15 97" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>
        );
      case 1: // Budgets never stick (Breakage)
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <style>
              {`
                @keyframes bar-fill-break { 
                  0% { width: 30%; background-color: #3b82f6; } 
                  60% { width: 80%; background-color: #ef4444; }
                  70% { width: 100%; background-color: #ef4444; transform: scaleY(1); }
                  75% { transform: scaleY(1.4); opacity: 0.8; }
                  80% { transform: scaleY(1); opacity: 1; }
                  100% { width: 100%; background-color: #ef4444; }
                }
                @keyframes shake-icon {
                  0%, 60% { transform: rotate(0); opacity: 0; }
                  65% { transform: rotate(-10deg); opacity: 1; }
                  70% { transform: rotate(10deg); }
                  75% { transform: rotate(-10deg); }
                  80% { transform: rotate(10deg); }
                  100% { transform: rotate(0); opacity: 1; }
                }
              `}
            </style>
            <div className="w-full max-w-[180px] flex flex-col gap-2">
              <div className="flex justify-between text-[10px] text-neutral-400 uppercase tracking-wider">
                <span>Budget</span>
                <span className="animate-pulse text-red-400">Overlimit</span>
              </div>
              <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden relative">
                <div className="h-full rounded-full" style={{ animation: 'bar-fill-break 4s ease-out infinite' }}></div>
              </div>
              <div className="flex justify-center mt-1" style={{ animation: 'shake-icon 4s ease-out infinite' }}>
                <span className="material-symbols-outlined text-red-500">warning</span>
              </div>
            </div>
          </div>
        );
      case 2: // You don’t see the full picture (Obscurity)
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <style>
              {`
                 @keyframes blur-pulse {
                   0%, 100% { filter: blur(4px); opacity: 0.5; }
                   50% { filter: blur(8px); opacity: 0.3; }
                 }
                 @keyframes search-move {
                   0%, 100% { transform: translate(-20px, -15px); }
                   50% { transform: translate(20px, 15px); }
                 }
              `}
            </style>
            {/* Blurry Chart Background */}
            <div className="absolute inset-4 flex justify-center items-end gap-1 opacity-50" style={{ animation: 'blur-pulse 3s infinite' }}>
              <div className="w-[64px] h-[40%] bg-red-900/50 rounded-t"></div>
              <div className="w-[64px] h-[70%] bg-red-800/50 rounded-t"></div>
              <div className="w-[64px] h-[50%] bg-red-700/50 rounded-t"></div>
              <div className="w-[64px] h-[80%] bg-red-600/50 rounded-t"></div>
            </div>

            {/* Question Mark / Search */}
            <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-neutral-900 rounded-full border border-red-500/50 text-red-500 shadow-lg shadow-red-900/20" style={{ animation: 'search-move 6s ease-in-out infinite' }}>
              <span className="material-symbols-outlined text-[24px]">question_mark</span>
            </div>
          </div>
        );
      case 3: // Financial stress keeps building (Pressure)
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <style>
              {`
                @keyframes pulse-pressure {
                  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
                  70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(239, 68, 68, 0); }
                  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
                }
                 @keyframes needle-rise {
                  0% { transform: rotate(-90deg); }
                  100% { transform: rotate(60deg); }
                }
              `}
            </style>
            <div className="relative w-24 h-24 flex items-center justify-center">
              {/* Gauge Circle */}
              <div className="absolute inset-0 rounded-full border-4 border-neutral-800 border-t-red-500 border-r-red-500" style={{ transform: 'rotate(-45deg)' }}></div>

              {/* Inner Pulse */}
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center text-red-500" style={{ animation: 'pulse-pressure 2s infinite' }}>
                <span className="material-symbols-outlined">network_check</span>
              </div>

              {/* Particles */}
              <div className="absolute -top-4 left-1/2 w-1 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="absolute top-0 right-0 w-1 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute bottom-2 -left-2 w-1 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="group relative w-full h-[280px] p-6 rounded-2xl bg-neutral-900 border border-white/5 hover:border-red-500/40 flex flex-col items-center justify-between transition-all duration-500 overflow-hidden">

      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-900/10 group-hover:via-red-500/5 group-hover:to-transparent transition-all duration-500" />

      {/* Subtle Glow Spot */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Illustration Area */}
      <div className="flex-1 w-full flex items-center justify-center relative z-10 mb-2">
        {renderIllustration()}
      </div>

      {/* Text Content */}
      <p className={`${textSemi} pointer-events-none text-[15px] md:text-[16px] text-center font-medium text-neutral-300 group-hover:text-red-100 transition-colors duration-300 relative z-10`}>
        {text}
      </p>

      {/* Decorative Corner (Optional) */}
      <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-red-500/20 group-hover:bg-red-500/60 transition-colors duration-500" />
    </div>
  )
}

export default CardProblem
