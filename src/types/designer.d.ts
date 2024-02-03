// @types designer.d.ts

type ChildrenNode = {
  children: React.ReactNode;
}
type Toggle = 'OPEN' | 'CLOSE';

type Size = { 
  width: string; 
  height: string; 
}

type AppModalTypes = 'signin' | 'signup';
type ToggleNav = 'openNavModal' | 'userNavModal';
type AppModals = Record<AppModalTypes, Toggle>

type ToggleOption = {
  isToggled: Record<ToggleNav, boolean>;
}
type DesignerContextProps = {
  appModals: AppModals;
  toggleNav: ToggleOption;
  setAppModals: React.Dispatch<React.SetStateAction<AppModals>>;
  setToggleNav: React.Dispatch<React.SetStateAction<ToggleOption>>;
}

type AppStateType = {
  isLoading: boolean;
  isError: boolean;
  error: any;
}

type UserInfo = {
  name?: string,
  email: string;
  password: string;
  confirm_password?: string;
  remember_me?: boolean;
}

type UserDetails = Omit<UserInfo, 'confirm_password'> & { 
  username: string;
  mobileNumber: string;
}