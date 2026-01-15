import { Link } from 'react-router-dom'

const Button = ({ label, width, type = 'default', active = false, onClick, url }) => {

  const baseStyle = type === 'multi' ? 'px-4 py-2 rounded-md text-[14px] font-medium shadow-lg shadow-black/10 cursor-pointer' : 'px-4 py-2 rounded-md text-[14px] font-medium shadow-lg shadow-black/10 cursor-pointer bg-blue-600 hover:bg-blue-800'

  const stateStyle = type === 'multi'
    ? active ? 'bg-blue-600 hover:bg-blue-800' : 'bg-[#202020] hover:bg-[#141414]'
    : ''

  return (
    <Link to={url}>
      <button onClick={onClick} className={`${baseStyle} ${stateStyle} ${width}`}>
        {label}
      </button>
    </Link>
  )
}

export default Button
