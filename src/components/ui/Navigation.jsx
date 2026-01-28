import { Link } from "react-router-dom"
import Button from "./Button"
import LanguageDropdown from "./LanguageDropdown"

const Navigation = () => {
	return (
		<div className="fixed top-0 w-full z-50 bg-[#0c0c0c]/70 backdrop-blur-md border-b border-white/3">
			<nav className='flex justify-between items-center w-full px-4 py-2.5'>
				<Link to='/'>
					<img src="/brand.svg" alt="logo" className="w-8" />
				</Link>

				<div className="flex items-center gap-x-2">
					<Button
						type='nav'
						url='/download'
						label="Download App"
					/>
					<LanguageDropdown />
				</div>
			</nav>
		</div>
	)
}

export default Navigation