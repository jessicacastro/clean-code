interface RootProps {
  children: React.ReactNode
}

export const Root = ({ children }: RootProps) => {
  return (
    <div>
      { children }
    </div>
  )
}