interface InputRootProps {
  children: React.ReactNode
}

interface ErrorMessageProps {
  message: string
}

interface IconProps {
  children: React.ReactNode
}

export const Root = ({ children }: InputRootProps) => {
  return (
    <div>
      { children }
    </div>
  )
}

export const FormField = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input {...props} />
  )
}


export const Label = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label {...props} />
  )
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <p>{message}</p>
  )
}

export const Icon = ({ children }: IconProps) => {
  return (
    <span>{children}</span>
  )
}