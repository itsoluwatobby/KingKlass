import { ChangeEvent } from "react";

type MeasurementCardProps = {
  keyName: MEASUREMENT_METRICS;
  value: string;
  setUserMeasurements: React.Dispatch<React.SetStateAction<MeasurementProps>>;
};
export const MeasurementCard = ({
  keyName,
  value="0",
  setUserMeasurements,
}: MeasurementCardProps) => {
  const handleEntry = (event: ChangeEvent<HTMLInputElement>) => {
    const [name, eventValue] = [event.target.name, event.target.value];
    setUserMeasurements((prev) => ({ ...prev, [name]: eventValue }));
  };

  return (
    <div className="pb-0 py-0 font-montserrat  flex flex-col justify-center items-center p-1.5 bg-inherit gap-y-1.5  w-full">
      <p className="font-normal text-fdt-grey-darker capitalize text-sm">{keyName}</p>

      <input
        type="number"
        inputMode="numeric"
        name={keyName}
        value={value}
        min={0.00}
        defaultValue={0.00}
        placeholder="cm"
        onChange={handleEntry}
        className={`border-b-1 text-xl pb-1 text-center  bg-inherit w-full focus:outline-0 placeholder:text-fdt-grey-dark placeholder:text-xs`}
      />
    </div>
  );
};
