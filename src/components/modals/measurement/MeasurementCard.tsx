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
    <div className="border-b-1  border-red font-montserrat  flex flex-col justify-center items-center p-1.5 bg-inherit gap-y-3  w-full">
      <p className="font-normal text-fdt-grey-dark capitalize">{keyName}</p>

      <input
        type="number"
        inputMode="numeric"
        name={keyName}
        value={value}
        min={0.00}
        defaultValue={0.00}
        placeholder="cm"
        onChange={handleEntry}
        className={`text-xl text-center  bg-inherit w-full focus:outline-0 placeholder:text-fdt-grey-dark placeholder:text-xs`}
      />
    </div>
  );
};
