import { createContext } from 'react'

export const DesignerContext = createContext<DesignerContextProps | null>(null);

export const DesignerDataProvider = ({ children }: ChildrenNode) => {

  

  const value = {

  }

  return (
    <DesignerContext.Provider value={value}>
      {children}
    </DesignerContext.Provider>
  )
}