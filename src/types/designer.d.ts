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
type ToggleNav = 'openNavModal' | 'userNavModal' | 'notifications' | 'measurements' | 'carts' | "paymentPrompt" | 'cartPreview' | 'paymentCheckout' | 'purchasePrompt' | 'adminAccountSetting' | 'orderProgress' | 'pass';
type AppModals = Record<AppModalTypes, Toggle>
type ToggleOption = {
  modalType: ToggleNav;
  prevModal?: ToggleNav;
}

type UserResponse = {
  id: string;
  is_admin: boolean,
  created_at: string,
  email: string,
  first_name?: string,
  last_name: string,
  phone_no: string,
  updated_at: string
}

type User = {
  isSignedIn: boolean;
  isAdmin: boolean;
  access_token?: string;
  id?: string;
  created_at?: string,
  email?: string,
  first_name?: string,
  last_name?: string,
  phone_no?: string,
  updated_at?: string
}

type ProgressType = 'pending' | 'completed';
type PaymentProgress = {
  progress: ProgressType;
}

type DesignerContextProps = {
  user: User;
  appModals: AppModals;
  toggleNav: ToggleOption;
  starRating: number[];
  paymentProgress: PaymentProgress;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  setPaymentProgress: React.Dispatch<React.SetStateAction<PaymentProgress>>;
  setStarRating: React.Dispatch<React.SetStateAction<number[]>>;
  setAppModals: React.Dispatch<React.SetStateAction<AppModals>>;
  setToggleNav: React.Dispatch<React.SetStateAction<ToggleOption>>;
}
type AppStateType = {
  isLoading: boolean;
  isError: boolean;
  isSuccess?: boolean;
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
type ReviewsType = {
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

type OrderStatusType = 'Pending' | 'In progress' | 'Completed';

type OrderPropsTypes = Record<OrderStatusType, { 
  bgColor: string, color: string, width: string }>;

type ProductType = {
  id: string;
  img_url: string;
  price: string | number;
  estimated: number;
  name: string;
  created_at: string;
  description?: string;
}