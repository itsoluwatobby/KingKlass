import Sheet from "react-modal-sheet";
import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";

interface SheetProps {
  children: React.ReactNode;
  classNames?: string;
}

function BottomSheet({ children, classNames}: SheetProps) {
  const [isOpen, setOpen] = useState(true);

  return (
    <>
      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        disableDrag={true}
        detent="content-height"
      >
        <Sheet.Container className={`${classNames} !bg-[#F8F8F8] !rounded-tl-3xl !rounded-tr-3xl`}>
          <Sheet.Header className="!flex justify-end p-4 pb-1">
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
