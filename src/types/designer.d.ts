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
type ToggleNav = 'openNavModal' | 'userNavModal' | 'notifications' | 'measurements' | 'carts' | "paymentPrompt" | 'cartPreview' | 'adminAccountSetting' | 'pass';
type AppModals = Record<AppModalTypes, Toggle>
type ToggleOption = {
  modalType: ToggleNav;
}

type User = {
  isSignedIn: boolean;
  isAdmin: boolean;
  token?: string;
  id?: string
}

type DesignerContextProps = {
  user: User;
  appModals: AppModals;
  toggleNav: ToggleOption;
  starRating: number[];
  triggerWarning: string;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  setTriggerWarning: React.Dispatch<React.SetStateAction<string>>;
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
  file?: string;
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

type MEASUREMENT_METRICS = "chest/bust" | "stomach" | "top length" | "shoulder" | "sleeve length" | "neck" |
  "muscle" | "waist" | "laps" | "knee";

type MeasurementProps = Record<MEASUREMENT_METRICS, string>;

type ImageReturnType = { status: string, url: string };
type STORAGES = 'displayPictures' | 'products' | 'receipts';