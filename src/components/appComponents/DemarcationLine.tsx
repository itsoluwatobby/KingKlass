

interface DemarcationLineProps {
    classNames: string;
}


const DemarcationLine = ({classNames}: DemarcationLineProps) => {
    return <hr className={`${classNames}`} />;
  };
  
export default DemarcationLine