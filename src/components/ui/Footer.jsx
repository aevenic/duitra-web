import { Link } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'

const Footer = () => {
	const [offsetY, setOffsetY] = useState(0);
	const [halftoneStyle, setHalftoneStyle] = useState({});
	const footerRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			if (footerRef.current) {
				const rect = footerRef.current.getBoundingClientRect();
				const windowHeight = window.innerHeight;
				if (rect.top <= windowHeight) {
					setOffsetY(rect.top - windowHeight);
				}
			}
		};

		// Generate Random Halftone Pattern
		const opacities = [0.45, 0.30, 0.20, 0.10];
		const cellSize = 20;
		const gridSize = 9;
		const images = [];
		const positions = [];

		for (let x = 0; x < gridSize; x++) {
			for (let y = 0; y < gridSize; y++) {
				const opacity = opacities[Math.floor(Math.random() * opacities.length)];
				images.push(`radial-gradient(rgba(255, 255, 255, ${opacity}) 3px, transparent 0)`);
				positions.push(`${x * cellSize}px ${y * cellSize}px`);
			}
		}

		setHalftoneStyle({
			backgroundImage: images.join(','),
			backgroundPosition: positions.join(','),
			backgroundSize: `${cellSize * gridSize}px ${cellSize * gridSize}px`,
			backgroundRepeat: 'repeat'
		});

		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<footer>
			<div ref={footerRef} className="relative w-full h-[320px] bg-[#212228] overflow-hidden">
				{/* Halftone Texture Layer - Truly Random Opacities */}
				<div
					className="absolute inset-0 pointer-events-none z-0"
					style={halftoneStyle}
				/>

				<div className="absolute inset-x-0 top-0 max-w-[1440px] mx-auto h-full pointer-events-none z-0">
					{/* Parallax Image Layers */}
					{/* Footer 1 - Right Side on Mobile, Left Side on Desktop */}
					<div
						className="absolute top-12 lg:-top-32 right-10 md:left-4 lg:left-16 xl:left-32 h-[200%] lg:h-[350%] pointer-events-none z-0"
						style={{ transform: `translateY(${offsetY * 0.38}px)` }}
					>
						<img
							src="/footer_2.webp"
							alt="Footer Detail"
							className="w-full h-full object-contain object-right-bottom md:object-left-bottom"
						/>
					</div>
				</div>

				{/* Content Overlay */}
				<div className="relative z-10 w-full h-full pointer-events-none">
					{/* "DUITRA" Text */}
					<div className="absolute top-0 left-0 px-4 pb-1 bg-[#0c0c0c] text-[32px] lg:text-[40px] font-semibold text-white pointer-events-auto">
						DUITRA
					</div>

					{/* Links Container */}
					<div className="absolute bottom-0 md:right-0 pl-3 pr-6 pt-4 pb-2 md:pl-2 md:pr-3 md:pt-2.5 bg-[#0c0c0c] flex flex-col md:flex-row gap-y-4 gap-x-6 pointer-events-auto">
						<div>
							<div className='text-white/60 text-[12px] md:text-[14px] pl-1'>Mail</div>
							<Link to='mailto:aevenic@gmail.com' target='_blank' rel='noopener noreferrer' className="px-1 py-0.5 hover:bg-[#202020] cursor-pointer w-fit text-[14px] md:text-[16px] font-medium rounded text-white inline-block">
								aevenic@gmail.com
							</Link>
						</div>
						<div>
							<div className='text-white/60 text-[12px] md:text-[14px] pl-1'>Socials</div>
							<div className="flex gap-x-3">
								<Link to='https://instagram.com/aevenic' target='_blank' rel='noopener noreferrer' className="px-1 py-0.5 hover:bg-[#202020] cursor-pointer text-[14px] md:text-[16px] font-medium rounded text-white">
									Instagram
								</Link>
								<Link to='https://x.com/aevenic' target='_blank' rel='noopener noreferrer' className="px-1 py-0.5 hover:bg-[#202020] cursor-pointer text-[14px] md:text-[16px] font-medium rounded text-white">
									Twitter
								</Link>
							</div>
						</div>
						<div>
							<div className='text-white/60 text-[12px] md:text-[14px] pl-1'>Legal</div>
							<div className="flex gap-x-3">
								<Link to='/privacy-policy' className="px-1 py-0.5 hover:bg-[#202020] cursor-pointer text-[14px] md:text-[16px] font-medium rounded text-white">
									Privacy Policy
								</Link>
								<Link to='/terms-of-service' className="px-1 py-0.5 hover:bg-[#202020] cursor-pointer text-[14px] md:text-[16px] font-medium rounded text-white">
									Terms of Service
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full text-center bg-[#0c0c0c] pt-2 pb-3 text-white/60 text-[12px]">© 2026 Aevenic Stuido. All rights reserved.</div>
		</footer>
	)
}

export default Footer