import { useEffect, useState } from "react";
import { setCustomBackgroundImage } from "../../utility/setBackGroundImage";
import InputText from "../appComponents/InputText";
import { initAppState, initContactVar } from "../../utility/initialVariables";
import TextArea from "../appComponents/TextArea";
import { Buttons } from "../appComponents/Buttons";
import { sanitizeEntries } from "../../utility/sanitizeEntries";
import { toast } from "react-toastify";

export const ContactUs = () => {
  const [appState, setAppState] = useState<AppStateType>(initAppState);
  const [contactMessage, setContactMessage] =
    useState<typeof initContactVar>(initContactVar);

  const { name, emails, message } = contactMessage;
  const { isLoading, isError } = appState;
  const canSubmit = [emails, message].every(Boolean);

  const handleSubmit = () => {
    if (!canSubmit || isLoading) return;
    setAppState((prev) => ({ ...prev, loading: true }));
    try {
      const userDetails = sanitizeEntries({ emails, name, message });
      console.log(userDetails);

      setAppState((prev) => ({ ...prev, success: true }));
      setContactMessage(initContactVar);
      toast.success("Request Submitted!");
      // navigate(pathname, { replace: true })
    } catch (error: unknown) {
      console.log(error);
      setAppState((prev) => ({ ...prev, isError: true }));
      toast.error("error message");
    } finally {
      setAppState((prev) => ({ ...prev, loading: false }));
    }
  };

  useEffect(() => {
    if (!isError) return;
    const timeoutId = setTimeout(() => {
      setAppState((prev) => ({ ...prev, isError: false }));
    }, 5000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isError]);

  return (
    <section
      id="contactUs"
      style={setCustomBackgroundImage("/background.png")}
      className="bg-gray-50 text-white px-3 flex flex-col gap-y-5 w-full pt-4 pb-2 md:p-0 transition-all mobile:min-h-[48vh] min-h-[58vh]"
    >
      <div className="md:self-end md:bg-[#311807] flex flex-col gap-y-4 md:w-[55%] xl:w-1/2 md:h-full rounded-md p-3 md:p-10 md:px-12">
        <h1 className="contact--us text-white text-4xl font-medium text-center font-playfair-display">
          Contact Us
        </h1>
        <InputText
          placeholder="Name (optional)"
          name="name"
          value={name}
          id="yourName"
          classNames="py-3 px-3 text-xl placeholder:text-fdt-grey-light-active text-fdt-grey-light-active font-normal rounded-[6px] border-white-500 border border-solid"
          setInputText={setContactMessage}
        />
        <InputText
          placeholder="Email"
          id="yourEmail"
          classNames="py-3 px-3 text-xl placeholder:text-fdt-grey-light-active text-fdt-grey-light-active font-normal rounded-[6px] border-white-500 border border-solid"
          name="emails"
          value={emails}
          setInputText={setContactMessage}
        />

        <TextArea
          classNames="py-3 px-3 text-xl placeholder:text-fdt-grey-light-active text-fdt-grey-light-active font-normal rounded-[6px] border-white-500 border border-solid"
          value={message}
          placeholder="Message"
          name="message"
          setInputText={setContactMessage}
        />

        <Buttons
          onClick={handleSubmit}
          py="py-2"
          px="px-14"
          isLoading={isLoading}
          classNames="bg-[#F2F2F2] rounded-[8px] text-fdt-brown-normal font-bold mt-1 w-full w-fit self-center"
        >
          Send
        </Buttons>
      </div>
    </section>
  );
};
