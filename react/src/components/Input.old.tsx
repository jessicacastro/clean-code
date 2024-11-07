import { ReactNode } from "react"

interface InputProps {
  label?: string
  icon?: ReactNode
  leftIcon?: ReactNode
  errorMessage?: string
}
export const Input = ({ label, icon = null, leftIcon = null, errorMessage }: InputProps) => {
  return (
    <>
      { 
        label ? 
          <label htmlFor={label}>{label}</label> : 
          null 
      }
        
      { leftIcon }
      <input type="text" id={label} />

      { icon }

      { 
        errorMessage ? 
          <span>{errorMessage}</span> : 
          null 
      }
    </>
  )
}