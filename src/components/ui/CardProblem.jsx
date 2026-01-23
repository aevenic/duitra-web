import React from 'react'
import { textSemi } from '../../data/uiStyles'

const AnimatedAmount = ({ start, duration, delay, steps, prefix = "$" }) => {
  const [displayValue, setDisplayValue] = React.useState(start);

  React.useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (time) => {
      if (!startTime) startTime = time;

      const timeInMs = time - startTime;
      const delayInMs = (delay || 0) * 1000;
      const durationInMs = duration * 1000;

      let progress = 0;
      if (timeInMs < delayInMs) {
        progress = 0;
      } else {
        const cycleTime = (timeInMs - delayInMs) % durationInMs;
        // Linear progress to match CSS linear timing
        progress = cycleTime / durationInMs;
      }

      let currentValue = start;
      for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        const prevStep = i === 0 ? { offset: 0, value: start } : steps[i - 1];

        if (progress <= step.offset) {
          const stepProgress = (progress - prevStep.offset) / (step.offset - prevStep.offset);
          currentValue = prevStep.value + (step.value - prevStep.value) * stepProgress;
          break;
        } else if (i === steps.length - 1) {
          currentValue = step.value;
        }
      }

      setDisplayValue(Math.round(currentValue));
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [start, duration, delay, steps]);

  return <span className="text-red-400 font-bold">{prefix}{displayValue}</span>;
};

const CardProblem = ({ text, index }) => {

  const renderIllustration = () => {
    switch (index) {
      case 0: // Money goes out - You don't know why
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <style>
              {`
                @keyframes float-random-1 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 33% { transform: translate(12px, -12px) rotate(8deg); } 66% { transform: translate(-8px, 8px) rotate(-6deg); } }
                @keyframes float-random-2 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 33% { transform: translate(-12px, 12px) rotate(-8deg); } 66% { transform: translate(8px, -8px) rotate(6deg); } }
                @keyframes float-random-3 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 33% { transform: translate(8px, 12px) rotate(6deg); } 66% { transform: translate(-12px, -12px) rotate(-6deg); } }
                @keyframes coin-fall { 0% { transform: translateY(-20px) rotate(0deg); opacity: 0; } 20% { opacity: 1; } 100% { transform: translateY(80px) rotate(360deg); opacity: 0; } }
              `}
            </style>
            <div className="relative w-48 h-40">
              {/* Wallet with question mark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="relative">
                  <div className="w-20 h-16 bg-red-900/50 rounded-xl border-2 border-red-500/40 flex items-center justify-center">
                    <span className="material-symbols-outlined text-red-400 text-3xl">wallet</span>
                  </div>
                  {/* Question mark bubble */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-600/30 rounded-full flex items-center justify-center border border-red-500/50">
                    <span className="material-symbols-outlined text-red-300 text-lg">help</span>
                  </div>
                </div>
              </div>

              {/* Falling coins */}
              <div className="absolute top-0 left-6" style={{ animation: 'coin-fall 2.5s ease-in infinite' }}>
                <span className="material-symbols-outlined text-red-400 text-xl">monetization_on</span>
              </div>
              <div className="absolute top-0 right-6" style={{ animation: 'coin-fall 2.5s ease-in infinite 0.8s' }}>
                <span className="material-symbols-outlined text-red-400 text-xl">monetization_on</span>
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2" style={{ animation: 'coin-fall 2.5s ease-in infinite 1.6s' }}>
                <span className="material-symbols-outlined text-red-400 text-xl">monetization_on</span>
              </div>

              {/* Scattered expense icons */}
              <div className="absolute bottom-0 left-0 flex justify-center items-center w-10 h-10 bg-red-900/30 rounded-lg border border-red-500/20 text-red-400/60" style={{ animation: 'float-random-1 4s ease-in-out infinite' }}>
                <span className="material-symbols-outlined text-lg">restaurant</span>
              </div>
              <div className="absolute bottom-0 right-0 flex justify-center items-center w-10 h-10 bg-red-900/30 rounded-lg border border-red-500/20 text-red-400/60" style={{ animation: 'float-random-2 5s ease-in-out infinite' }}>
                <span className="material-symbols-outlined text-lg">shopping_cart</span>
              </div>
              <div className="absolute top-0 left-0 flex justify-center items-center w-10 h-10 bg-red-900/30 rounded-lg border border-red-500/20 text-red-400/60" style={{ animation: 'float-random-3 4.5s ease-in-out infinite' }}>
                <span className="material-symbols-outlined text-lg">local_gas_station</span>
              </div>
            </div>
          </div>
        );
      case 1: // You make a budget - You break it again
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <style>
              {`
                @keyframes bar-fill-1 { 
                  0% { width: 30%; background: linear-gradient(90deg, #3b82f6, #60a5fa); } 
                  40% { width: 60%; background: linear-gradient(90deg, #f59e0b, #fbbf24); }
                  60% { width: 100%; background: linear-gradient(90deg, #ef4444, #f87171); }
                  100% { width: 100%; background: linear-gradient(90deg, #ef4444, #f87171); }
                }
                @keyframes bar-fill-2 { 
                  0% { width: 20%; background: linear-gradient(90deg, #3b82f6, #60a5fa); } 
                  50% { width: 80%; background: linear-gradient(90deg, #f59e0b, #fbbf24); }
                  70% { width: 110%; background: linear-gradient(90deg, #ef4444, #f87171); }
                  100% { width: 110%; background: linear-gradient(90deg, #ef4444, #f87171); }
                }
                @keyframes bar-fill-3 { 
                  0% { width: 40%; background: linear-gradient(90deg, #3b82f6, #60a5fa); } 
                  60% { width: 90%; background: linear-gradient(90deg, #f59e0b, #fbbf24); }
                  80% { width: 100%; background: linear-gradient(90deg, #ef4444, #f87171); }
                  100% { width: 100%; background: linear-gradient(90deg, #ef4444, #f87171); }
                }
              `}
            </style>
            <div className="w-full flex flex-col items-center gap-8">
              {/* Multiple Budget Categories */}
              <div className="w-full max-w-[200px] flex flex-col gap-3">
                {/* Category 1 - Food */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center text-[10px]">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-red-400 text-xs">restaurant</span>
                      <span className="text-neutral-400 uppercase tracking-wider">Food</span>
                    </div>
                    <AnimatedAmount
                      start={45}
                      duration={3}
                      steps={[
                        { offset: 0.4, value: 90 },
                        { offset: 0.6, value: 150 },
                        { offset: 1, value: 150 }
                      ]}
                    />
                  </div>
                  <div className="h-2.5 w-full bg-neutral-800 rounded-full overflow-hidden border border-neutral-700 relative">
                    <div className="h-full rounded-full" style={{ animation: 'bar-fill-1 3s linear infinite' }}></div>
                    <div className="absolute top-0 left-[83%] w-0.5 h-full bg-white/40"></div>
                  </div>
                </div>

                {/* Category 2 - Shopping */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center text-[10px]">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-red-400 text-xs">shopping_bag</span>
                      <span className="text-neutral-400 uppercase tracking-wider">Shopping</span>
                    </div>
                    <AnimatedAmount
                      start={30}
                      duration={3.5}
                      delay={0.3}
                      steps={[
                        { offset: 0.5, value: 120 },
                        { offset: 0.7, value: 210 },
                        { offset: 1, value: 210 }
                      ]}
                    />
                  </div>
                  <div className="h-2.5 w-full bg-neutral-800 rounded-full overflow-hidden border border-neutral-700 relative">
                    <div className="h-full rounded-full" style={{ animation: 'bar-fill-2 3.5s linear infinite 0.3s' }}></div>
                    <div className="absolute top-0 left-[67%] w-0.5 h-full bg-white/40"></div>
                  </div>
                </div>

                {/* Category 3 - Entertainment */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center text-[10px]">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-red-400 text-xs">sports_esports</span>
                      <span className="text-neutral-400 uppercase tracking-wider">Fun</span>
                    </div>
                    <AnimatedAmount
                      start={60}
                      duration={4}
                      delay={0.6}
                      steps={[
                        { offset: 0.6, value: 135 },
                        { offset: 0.8, value: 150 },
                        { offset: 1, value: 150 }
                      ]}
                    />
                  </div>
                  <div className="h-2.5 w-full bg-neutral-800 rounded-full overflow-hidden border border-neutral-700 relative">
                    <div className="h-full rounded-full" style={{ animation: 'bar-fill-3 4s linear infinite 0.6s' }}></div>
                    <div className="absolute top-0 left-[100%] w-0.5 h-full bg-white/40"></div>
                  </div>
                </div>
              </div>

              {/* Status Text */}
              <div className="flex items-center gap-2 bg-red-900/30 px-3 py-1.5 rounded-full border border-red-500/30">
                <span className="material-symbols-outlined text-red-400 text-sm animate-pulse">sync_problem</span>
                <span className="text-[10px] text-red-300 font-medium uppercase tracking-wider">Cycle Repeats</span>
              </div>
            </div>
          </div>
        );
      case 2: // You track some things - You still don't see the truth
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <style>
              {`
                 @keyframes blur-pulse {
                   0%, 100% { filter: blur(3px); opacity: 0.6; }
                   50% { filter: blur(6px); opacity: 0.3; }
                 }
                 @keyframes eye-blink {
                   0%, 45%, 55%, 100% { transform: scaleY(1); }
                   50% { transform: scaleY(0.1); }
                 }
                 @keyframes data-flicker {
                   0%, 100% { opacity: 0.3; }
                   50% { opacity: 0.7; }
                 }
              `}
            </style>

            {/* Blurry Chart Background - Larger */}
            <div className="absolute inset-0 flex justify-center items-end gap-2 px-4 pb-4" style={{ animation: 'blur-pulse 3s infinite' }}>
              <div className="w-10 h-[35%] bg-gradient-to-t from-red-900/60 to-red-700/30 rounded-t-lg"></div>
              <div className="w-10 h-[55%] bg-gradient-to-t from-red-800/60 to-red-600/30 rounded-t-lg"></div>
              <div className="w-10 h-[40%] bg-gradient-to-t from-red-700/60 to-red-500/30 rounded-t-lg"></div>
              <div className="w-10 h-[70%] bg-gradient-to-t from-red-600/60 to-red-400/30 rounded-t-lg"></div>
              <div className="w-10 h-[45%] bg-gradient-to-t from-red-800/60 to-red-600/30 rounded-t-lg"></div>
            </div>

            {/* Data fragments floating */}
            <div className="absolute top-4 left-4 text-[10px] text-red-400/50 font-mono" style={{ animation: 'data-flicker 2s infinite' }}>$???</div>
            <div className="absolute top-8 right-6 text-[10px] text-red-400/50 font-mono" style={{ animation: 'data-flicker 2s infinite 0.5s' }}>---%</div>
            <div className="absolute bottom-16 left-6 text-[10px] text-red-400/50 font-mono" style={{ animation: 'data-flicker 2s infinite 1s' }}>$???.??</div>

            {/* Confused Eye / Search Icon */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="relative flex items-center justify-center w-16 h-16 bg-neutral-900/90 rounded-full border-2 border-red-500/50 shadow-lg shadow-red-900/30" style={{ animation: 'eye-blink 4s ease-in-out infinite' }}>
                <span className="material-symbols-outlined text-red-400 text-3xl">visibility_off</span>
              </div>
              <div className="text-[10px] text-red-400/70 font-medium tracking-wider uppercase">Missing Data</div>
            </div>
          </div>
        );
      case 3: // Money keeps stressing you - Month after month
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <style>
              {`
                @keyframes pulse-stress {
                  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.5); }
                  50% { transform: scale(1.08); box-shadow: 0 0 0 20px rgba(239, 68, 68, 0); }
                  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
                }
                @keyframes ring-rotate {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
                @keyframes month-fade {
                  0%, 100% { opacity: 0.3; }
                  50% { opacity: 0.8; }
                }
              `}
            </style>
            <div className="relative flex flex-col items-center gap-4">
              {/* Month indicators */}
              <div className="flex gap-2 text-[9px] text-red-400/60 font-mono uppercase tracking-wider">
                <span style={{ animation: 'month-fade 3s infinite' }}>Jan</span>
                <span style={{ animation: 'month-fade 3s infinite 0.3s' }}>Feb</span>
                <span style={{ animation: 'month-fade 3s infinite 0.6s' }}>Mar</span>
                <span style={{ animation: 'month-fade 3s infinite 0.9s' }}>Apr</span>
                <span style={{ animation: 'month-fade 3s infinite 1.2s' }}>May</span>
                <span style={{ animation: 'month-fade 3s infinite 1.5s' }}>...</span>
              </div>

              {/* Stress Gauge */}
              <div className="relative w-28 h-28 flex items-center justify-center">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 rounded-full border-4 border-neutral-800 border-t-red-500 border-r-red-500/50" style={{ animation: 'ring-rotate 8s linear infinite' }}></div>

                {/* Middle ring */}
                <div className="absolute inset-3 rounded-full border-2 border-red-500/20"></div>

                {/* Inner Pulse */}
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/40" style={{ animation: 'pulse-stress 2s infinite' }}>
                  <span className="material-symbols-outlined text-red-500 text-3xl">sentiment_stressed</span>
                </div>

                {/* Stress level indicator */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-red-900/80 px-2 py-0.5 rounded text-[9px] text-red-300 font-bold uppercase tracking-wider">
                  High
                </div>
              </div>

              {/* Repeating pattern indicator */}
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/80"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/60"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/40"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/30"></div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  // Split text by newline for multi-line display
  const textLines = text.split('\n');

  return (
    <div className="group relative w-full h-[360px] p-5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-red-500/40 flex flex-col transition-all duration-500 overflow-hidden">

      {/* Text Content - Multi-line */}
      <div className="relative z-10 flex flex-col gap-0.5">
        {textLines.map((line, i) => (
          <p key={i} className={`text-[15px] md:text-base font-medium leading-snug ${i === 0 ? 'text-neutral-200' : 'text-red-400/90'}`}>
            {line}
          </p>
        ))}
      </div>

      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-900/10 group-hover:via-red-500/5 group-hover:to-transparent transition-all duration-500" />

      {/* Subtle Glow Spot */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Illustration Area - Takes remaining space */}
      <div className="flex-1 w-full flex items-center justify-center relative z-10 mt-4">
        {renderIllustration()}
      </div>

      {/* Decorative Corner */}
      <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-red-500/20 group-hover:bg-red-500/60 transition-colors duration-500" />
    </div>
  )
}

export default CardProblem
