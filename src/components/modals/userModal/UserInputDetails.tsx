import { useState } from "react";
import InputText from "../../appComponents/InputText";
import PasswordInput from "../../appComponents/PasswordInput";

type UserInputDetailsProps<T> = {
  name: string;
  title: string;
  placeholder?: string;
  value: string;
  disabled: boolean;
  id: string;
  validPassword?: boolean;
  validEmail?: boolean;
  matchingPassword?: boolean;
  type: "tel" | "email" | "text" | "password";
  setUserDetails: React.Dispatch<React.SetStateAction<T>>;
};

export default function UserInputDetails<T>({
  name,
  id,
  title,
  setUserDetails,
  type,
  placeholder,
  value,
  disabled,
  validPassword,
  matchingPassword,
  validEmail,
}: UserInputDetailsProps<T>) {
  const [revealPass, setRevealPass] = useState<Toggle>('CLOSE')
  // const { appModals } = useDesignerContext() as DesignerContextProps;

  return (
    <div className="flex flex-col gap-y-0 w-full">
      <label
        htmlFor={id}
        className="font-montserrat font-medium my-0 relative text-base text-fdt-grey-darker flex items-center gap-x-3"
      >
        {title}
      </label>
      {type === "password" ? (
        <PasswordInput
          name={name}
          disabled={disabled}
          id={id}
          revealPass={revealPass} 
          setRevealPass={setRevealPass}
          validPassword={validPassword}
          matchingPassword={matchingPassword}
          value={value}
          setInputText={setUserDetails}
          classNames="font-montserrat placeholder:font-montserrat"
        />
      ) : (
        <InputText
          type={type}
          name={name}
          id={id}
          placeholder={placeholder ?? title}
          disabled={disabled}
          validEmail={validEmail}
          value={value}
          setInputText={setUserDetails}
          classNames="font-montserrat placeholder:font-montserrat"
        />
      )}
    </div>
  );
}
