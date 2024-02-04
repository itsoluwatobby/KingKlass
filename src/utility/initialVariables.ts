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

export const initMeasurementParams: MeasurementProps[] = [
  { name: "Chest/Bust", value: "" }, { name: "Stomach", value: "" }, { name: "Top Length", value: "" }, 
  { name: "Shoulder", value: "" }, { name: "Sleeve Length", value: "" }, { name: "Neck", value: "" },
  { name: "Muscle", value: "" }, { name: "Waist", value: "" }, { name: "Laps", value: "" }, 
  { name: "Knee", value: "" }
]
