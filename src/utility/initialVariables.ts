export const initContactVar: Record<string, string> = {
  name: '', emails: '', message:''
}

export const initAppState: AppStateType = {
  isLoading: false, isError: false, error: ''
}

export const initSignUpInfo: UserInfo = {
  name: '', email: '', password: '', confirm_password: ''
}

export const initSignInInfo: UserInfo = {
  email: '', password: '', remember_me: false
}

const CLOSE = 'CLOSE' as Toggle;
export const initAppModals: AppModals = {
  signin: CLOSE, signup: CLOSE
}

export const initNavModals: ToggleOption = {
  modalType: 'pass', prevModal: 'pass'
}

export const initUserDetail: UserDetails = {
  name: '', username: '', email: '', password: '', mobileNumber: '', file: ''
}

export const initUser: User = {
  isSignedIn: false, isAdmin: true, token: '', id: ''
}

export const inputValidation: Validations = {
  validEmail: true, validPassword: false, matchingPassword: false
}

export const initMeasurements: MeasurementProps = { 
  "chest/bust": "", "stomach": "" , "top length": "" , "shoulder": "" , 
  "sleeve length": "", "neck": "", "muscle": "", "waist": "", "laps": "", "knee": ""
}

export const initAccountInfo: Record<string, string> = {
  accountNumber: '', bankName: '', accountName: ''
}