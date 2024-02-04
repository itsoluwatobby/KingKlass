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
type ToggleNav = 'openNavModal' | 'userNavModal' | 'notifications' | 'measurements' | 'pass';
type AppModals = Record<AppModalTypes, Toggle>
type ToggleOption = {
  modalType: ToggleNav;
}
type DesignerContextProps = {
  appModals: AppModals;
  toggleNav: ToggleOption;
  starRating: number[];
  setStarRating: React.Dispatch<React.SetStateAction<number[]>>;
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
type UserRole = 'ADMIN' | 'USER';
type Validations = {
  validEmail: boolean;
  validPassword: boolean; 
  matchingPassword: boolean;
}
type Reviews = {
  id?: number;
  rating: number[];
  content: string;
  author: string;
  createdAt: string;
}
type MeasurementProps = {
  [x: string]: string;
  name: string;
}
