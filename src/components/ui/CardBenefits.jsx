import { textHeading2, textSemi } from '../../data/uiStyles'

const CardBenefits = ({ title, description, index }) => {
  const num = index + 1;

  const renderIllustration = () => {
    switch (index) {
      case 0: // Benefits 1
        return (
          <div className="relative h-48 w-full rounded-md bg-[#0c0c0c] bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent overflow-hidden">
            <div className="absolute inset-5 flex justify-center sm:justify-start sm:pl-4 items-center">
              <div className="flex gap-x-3">
                <div className="relative h-16 w-24 rounded-md bg-gradient-to-tl from-blue-800 to-blue-500 px-3 py-2 font-semibold shadow-lg shadow-black/30 flex items-end">
                  1
                  <div className="absolute bottom-3 right-3 w-10 h-1.5 bg-white rounded-full"></div>
                  <div className="absolute top-[-8px] left-5 py-0.5 bg-[#141414]/85 border border-blue-200/30 rounded-md text-[10px] text-center shadow-lg shadow-black/30 w-[68px]">Best Deal</div>
                </div>
                <div className="relative h-16 w-24 rounded-md border-2 border-blue-200/10 bg-[#181818]/40 backdrop-blur px-3 py-2 font-semibold shadow-lg shadow-black/30 flex items-end">
                  2
                  <div className="absolute bottom-3 right-3 w-10 h-1.5 bg-white rounded-full"></div>
                </div>
                <div className="relative h-16 w-24 rounded-md border-2 border-blue-200/10 bg-[#181818]/40 backdrop-blur px-3 py-2 font-semibold shadow-lg shadow-black/30 flex items-end">
                  3
                  <div className="absolute bottom-3 right-3 w-10 h-1.5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <div className={`absolute bottom-1.5 left-1.5 p-3 bg-[#0c0c0c] rounded-lg flex items-center justify-center h-[40px] w-[40px] text-[20px] font-bold text-blue-300`}>{num}</div>
          </div>
        );
      case 1: // Benefits 2
        return (
          <div className="relative h-48 w-full rounded-md bg-[#0c0c0c] bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center w-[152px] h-[152px]">
                <div className='absolute top-2 left-1 rotate-[-8deg] p-1 flex justify-center rounded-lg bg-gradient-to-tl from-blue-600 to-blue-300 w-[38px] font-black text-black text-[20px] shadow-lg shadow-black/30'>
                  $
                </div>
                <div className='absolute rotate-[8deg] p-2 rounded-lg bg-[#181818]/40 backdrop-blur border-2 border-blue-300 h-[66px] shadow-lg shadow-black/30 text-white'>
                  <span className="material-symbols-outlined" style={{ fontSize: '48px' }}> qr_code_scanner </span>
                </div>
                <div className='absolute bottom-2 right-1 rotate-[32deg] p-1 flex justify-center rounded-lg bg-gradient-to-tl from-blue-600 to-blue-300 w-[38px] font-black text-black text-[20px] shadow-lg shadow-black/30'>
                  $
                </div>
              </div>
            </div>
            <div className={`absolute bottom-1.5 left-1.5 p-3 bg-[#0c0c0c] rounded-lg flex items-center justify-center h-[40px] w-[40px] text-[20px] font-bold text-blue-300`}>{num}</div>
          </div>
        );
      case 2: // Benefits 3
        return (
          <div className="relative h-48 w-full rounded-md bg-[#0c0c0c] bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent overflow-hidden">
            <div className="absolute inset-5 flex justify-center items-center">
              <div className="relative w-full max-w-xs">
                <div className="p-3 rounded-md border border-blue-200/10 bg-[#181818]/40 backdrop-blur">
                  <div className="flex items-center justify-between gap-3">
                    <div className="space-y-0.5">
                      <p className="text-[10px] uppercase text-blue-300"> Project brief </p>
                      <p className="text-[12px] text-white"> Tell us about your product </p>
                    </div>
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tl from-blue-600 to-blue-300"></span>
                  </div>
                  <div className="mt-2 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="h-4 w-4">
                        <span className="block h-full w-full rounded bg-gradient-to-tl from-blue-600 to-blue-300"></span>
                      </span>
                      <p className="text-[10px] text-white/70"> Goals & Success Metrics </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-slate-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
                      </span>
                      <p className="text-[10px] text-slate-300"> Target Audience & Users </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-slate-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
                      </span>
                      <p className="text-[10px] text-slate-300"> Brand & Constraints </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-3 -bottom-2 rounded-md border border-blue-200/10 bg-[#181818]/40 p-2 backdrop-blur-xs shadow-lg shadow-black/30 w-[120px]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-6 w-3 items-center justify-center rounded-full bg-gradient-to-tl from-blue-600 to-blue-300">
                    </div>
                    <div className="">
                      <p className="text-[10px] font-medium text-white">
                        Kickoff call
                      </p>
                      <p className="text-[9px] text-white/60">
                        30 min discovery
                      </p>
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
