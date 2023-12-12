import React from 'react'

function Button({
    children,
    type="button",
    bgColor= "bg-blue-700",
    textColor="text-white",
    className="",
    ...props
}) {
  return (
    <button className={`py-2 px-4 rounded-lg ${className} ${textColor} ${bgColor}` } {...props}>
      {children}
    </button>
  )
}

export default Button
