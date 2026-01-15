import React from 'react'
import { textHeading2, textSemi } from '../../data/uiStyles'

const CardFeature = ({ features, activeIndex, language }) => {
	return (
		<div className="md:absolute md:bottom-20 md:right-0 z-30 w-full md:max-w-[450px] px-4 pb-4 pt-6 rounded-lg bg-neutral-900/80 backdrop-blur-2xl border border-white/5 shadow-2xl transition-all duration-500">
			<div className="flex flex-col gap-y-2">
				<div className="flex justify-between items-center w-full">
					<div className="text-blue-400 text-[14px] font-semibold uppercase">
						Feature {activeIndex + 1}
					</div>
					{/* Custom Indicators */}
					<div className="flex gap-x-2">
						{features.map((_, index) => (
							<div
								key={index}
								className={`h-2.5 transition-all duration-500 rounded-full ${index === activeIndex ? 'w-6 bg-blue-500' : 'w-2.5 bg-neutral-700'}`}
							/>
						))}
					</div>
				</div>
				<div className={textHeading2}>
					{features[activeIndex].title[language]}
				</div>
				<div className={textSemi}>
					{features[activeIndex].desc[language]}
				</div>
			</div>
		</div>
	)
}

export default CardFeature