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
  modalType: 'pass'
}

export const initUserDetail: UserDetails = {
  name: '', username: '', email: '', password: '', mobileNumber: ''
}

export const inputValidation: Validations = {
  validEmail: false, validPassword: false, matchingPassword: false
}

export const initMeasurements: MeasurementProps = { 
  "Chest/Bust": "", 
  "Stomach": "" , 
  "Top Length": "" , 
  "Shoulder": "" , 
  "Sleeve Length": "", 
  "Neck": "",
  "Muscle": "", 
  "Waist": "", 
  "Laps": "", 
  "Knee": ""
}
