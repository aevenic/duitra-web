import { Link } from 'react-router-dom'

const Button = ({ label, width = '', type, active = false, onClick, url, className = '', ...props }) => {

  const baseStyle = type === 'base'
    ? 'px-4 py-2 rounded-md text-[14px] font-medium shadow-lg shadow-black/10 cursor-pointer bg-blue-600 hover:bg-blue-800 transition-all duration-200'
    : ''

  const navStyle = type === 'nav'
    ? 'px-3 h-[31px] flex items-center rounded-md text-[13px] font-medium shadow-lg shadow-black/10 cursor-pointer bg-blue-600 hover:bg-blue-800 transition-all duration-200'
    : ''

  const stateStyle = type === 'state'
    ? active ? 'bg-blue-600 hover:bg-blue-800 text-white' : 'bg-[#202020] hover:bg-[#141414] text-white/80'
    : ''

  const content = (
    <button
      onClick={onClick}
      className={`${baseStyle} ${navStyle} ${stateStyle} ${width} ${className}`}
      {...props}
    >
      {label}
    </button>
  )

  if (url) {
    return (
      <Link to={url}>
        {content}
      </Link>
    )
  }

  return content
}

export default Button
