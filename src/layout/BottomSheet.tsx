import Sheet from "react-modal-sheet";
import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { useDesignerContext } from "../hooks/useDesignerContext";

interface SheetProps {
  children: React.ReactNode;
  classNames?: string;
  title?: string;
}

function BottomSheet({ children, classNames, title}: SheetProps) {
  const [isOpen, setOpen] = useState(true);
  const { setToggleNav } =
    useDesignerContext() as DesignerContextProps;

  return (
    <>
      <Sheet
        isOpen={isOpen}
        onClose={() => {
          setOpen(false)
          setToggleNav({ modalType : "pass"})
        }}
        disableDrag={true}
        detent="content-height"
        tweenConfig={{ ease: 'easeIn', duration: 0.5 }}
      >
        <Sheet.Container className={`!bg-[#F8F8F8] !rounded-tl-3xl !rounded-tr-3xl ${classNames}`}>
          <Sheet.Header className="!flex justify-between p-4 pb-2 pt-[20px]">
            <p className="font-montserrat text-xl font-medium"> {title}</p>
            <HiMiniXMark
              className="text-2xl font-normal text-fdt-grey-darker"
              onClick={() => setOpen(false)}
            />
          </Sheet.Header>
          <Sheet.Content className="px-3">{children}</Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
}

export default BottomSheet;
