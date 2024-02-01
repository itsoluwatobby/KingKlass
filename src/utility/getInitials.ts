
export const getInitials = (name: string) => {
  if (name.split(' ').length > 1) {
    const [first, last] = name.split(' ', 2);
    const initials = `${first.substring(0,1).toUpperCase()}${last.substring(0,1).toUpperCase()}`
    return initials;
  } 
  else return name.substring(0,1).toUpperCase();
}