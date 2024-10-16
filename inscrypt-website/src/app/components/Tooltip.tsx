import React, { useState } from 'react'

interface TooltipProps {
  content: React.ReactNode
  children: React.ReactNode
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute z-10 px-3 py-2 text-sm text-white bg-gray-800 rounded-md shadow-md transition-opacity duration-300 bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2">
          {content}
        </div>
      )}
    </div>
  )
}