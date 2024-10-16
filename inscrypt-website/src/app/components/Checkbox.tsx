import React, { forwardRef } from 'react'
import { FaCheck } from 'react-icons/fa'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className = '', ...props }, ref) => {
    return (
      <label className="inline-flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            ref={ref}
            {...props}
          />
          <div
            className={`w-5 h-5 border-2 border-gray-300 rounded transition-colors ${
              props.checked ? 'bg-blue-500 border-blue-500' : 'bg-white'
            } ${className}`}
          >
            {props.checked && (
              <FaCheck className="absolute top-0.5 left-0.5 text-white text-xs" />
            )}
          </div>
        </div>
        {label && <span className="ml-2">{label}</span>}
      </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'