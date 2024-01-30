
export function setCustomBackgroundImage(url: string, props: object = {}) {
  return { 
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'local',
    ...props
  }
}