
type LoadingCompProps = {
  isLoading: boolean;
  classNames?: string;
}
export const LoadingComp = ({ isLoading, classNames }: LoadingCompProps) => {

  return (
    <div className={`${isLoading ? 'block' : 'hidden'} absolute rounded-full bg-gray-100 border-2 border-x-gray-700 border-y-green-200 animate-spin ${classNames}`}></div>
  )
}