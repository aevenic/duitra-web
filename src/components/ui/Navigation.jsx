import { Link } from "react-router-dom"
import Button from "./Button"

const Navigation = () => {
	return (
		<div className="fixed top-0 w-full z-50 bg-[#0c0c0c]/40 backdrop-blur-sm">
			<nav className='flex justify-between items-center w-full px-5 py-3.5'>
				<Link to='/'>
					<img src="/vite.svg" alt="logo" className="w-9" />
				</Link>
				<Button url='/download' className='px-2 py-1 hover:bg-blue-800 bg-blue-600 text-white rounded' label="Download App" />
			</nav>
		</div>
	)
}

export default Navigation