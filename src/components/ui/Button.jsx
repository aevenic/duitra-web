import { Link } from 'react-router-dom'

const Button = ({ label, width = '', type = 'default', active = false, onClick, url, className = '', ...props }) => {

  const baseStyle = type === 'multi'
    ? 'px-4 py-2 rounded-md text-[14px] font-medium shadow-lg shadow-black/10 cursor-pointer transition-all duration-200'
    : 'px-4 py-2 rounded-md text-[14px] font-medium shadow-lg shadow-black/10 cursor-pointer bg-blue-600 hover:bg-blue-800 transition-all duration-200'

  const stateStyle = type === 'multi'
    ? active ? 'bg-blue-600 hover:bg-blue-800 text-white' : 'bg-[#202020] hover:bg-[#141414] text-white/80'
    : 'text-white'

  const content = (
    <button
      onClick={onClick}
      className={`${baseStyle} ${stateStyle} ${width} ${className}`}
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
