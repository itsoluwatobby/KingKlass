import { LoadingComp } from "./LoadingComp";


type RequestStagesProps <T>= {
  isLoading: boolean;
  isError: boolean;
  isSuccess?: boolean;
  errorText: string;
  warnText: string;
  targetVal: T[] | T;
  useRelative: boolean;
  children: React.ReactNode;
}

export default function RequestStages<T>({ children, targetVal, isLoading, isSuccess=true, isError, errorText, warnText, useRelative }: RequestStagesProps<T>) {
 
  return (
    <>
      {
        isLoading ?
          <LoadingComp isLoading={isLoading} 
            classNames="w-14 h-14 left-1/2 top-10"
          /> 
          :
          isError ? 
          <p className={`${useRelative ? 'absolute -translate-x-[25%] top-10' : ''} whitespace-nowrap`}>{errorText}</p>
          :
          (
            targetVal ?
            children
            : (
              (isSuccess && !targetVal) ?
              <p className="absolute left-1/4 top-10 whitespace-nowrap text-center capitalize mt-5 text-xl w-full">{warnText}</p>
              : null
            )
          )
      }
    </>
  )
}