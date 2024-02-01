
export function toggleAttributes(parsedObj: Partial<AppModals>, toggleValue: Toggle): Partial<AppModals> {
  const res = Object.fromEntries(Object.keys(parsedObj).map((key) => {
    return [key, toggleValue]
  }))
  return res
}

export const switchModals: Record<AppModalTypes, (arg: AppModals) => AppModals> = {
  'signin'(prev: AppModals){
    const { signin, ...rest } = prev
    return { signin, ...toggleAttributes(rest, 'CLOSE') } as AppModals
  },
  'signup'(prev: AppModals){
    const { signup, ...rest } = prev
    return { signup, ...toggleAttributes(rest, 'CLOSE') } as AppModals
  }
}