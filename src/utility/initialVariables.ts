export const initContactVar: Record<string, string> = {
  name: '', email: '', message:''
}

export const initAppState: AppStateType = {
  isLoading: false, isError: false, error: ''
}

export const initSignUpInfo: UserInfo = {
  name: '', email: '', password: '', confirm_password: ''
}

export const initSignInInfo: UserInfo = {
  email: '', password: ''
}

const CLOSE = 'CLOSE' as Toggle;
export const initAppModals: AppModals = {
  signin: CLOSE, signup: CLOSE
}

export const initNavModals: ToggleOption = {
  isToggled: {
    openNavModal: false, 
    userNavModal: false
  }
}