import { createContext, useState } from 'react'
import { initAppModals, initNavModals, initUser } from '../utility/initialVariables';

export const DesignerContext = createContext<DesignerContextProps | null>(null);

export const DesignerDataProvider = ({ children }: ChildrenNode) => {
  const [starRating, setStarRating] = useState<number[]>([]);
  const [appModals, setAppModals] = useState<AppModals>(initAppModals);
  const [toggleNav, setToggleNav] = useState<ToggleOption>(initNavModals);
  const [user, setUser] = useState<User>(initUser);


  const value = {
    appModals, setAppModals, user, setUser, toggleNav, setToggleNav, starRating, setStarRating
  }
  return (
    <DesignerContext.Provider value={value}>
      {children}
    </DesignerContext.Provider>
  )
}