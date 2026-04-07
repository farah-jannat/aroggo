"use client";

import { Dispatch, ReactNode, SetStateAction } from "react";
import { Drawer } from "vaul";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "./ui/dialog";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

interface ModalProps {
  children?: ReactNode;
  className?: string;
  showModal?: boolean;
  setShowModal?: Dispatch<SetStateAction<boolean>>;
  onClose?: () => void;
  desktopOnly?: boolean;
  preventDefaultClose?: boolean;
}

export const BaseModal = ({
  children,
  className,
  desktopOnly,
  onClose,
  preventDefaultClose,
  setShowModal,
  showModal,
}: ModalProps) => {
  const closeModal = ({ dragged }: { dragged?: boolean }) => {
    if (preventDefaultClose && !dragged) {
      return;
    }

    onClose && onClose();

    if (setShowModal) {
      setShowModal(false);
    }
  };

  const { isMobile } = useMediaQuery();

  if (isMobile && !desktopOnly) {
    return (
      <Drawer.Root
        open={setShowModal ? showModal : true}
        onOpenChange={(open) => {
          if (!open) {
            closeModal({ dragged: true });
          }
        }}
      >
        <Drawer.Overlay className="fixed inset-0 z-40 bg-gray-100 bg-opacity-10 backdrop-blur" />
        <Drawer.Portal>
          <Drawer.Content
            className={cn(
              "fixed !max-w-none bottom-0 left-0 right-0  z-50 mt-24 rounded-t-[10px] border-t border-gray-200 bg-white",
              className,
            )}
            aria-describedby={undefined}
          >
            <Drawer.Title className="sr-only">This is Dialog</Drawer.Title>

            <div className="sticky top-0 z-20 flex w-full items-center justify-center rounded-t-[10px] bg-inherit">
              <div className="my-3 h-1 w-12 rounded-full bg-gray-300" />
            </div>

            {children}
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    );
  }

  return (
    <Dialog
      open={setShowModal ? showModal : true}
      onOpenChange={(open) => {
        if (!open) {
          closeModal({ dragged: true });
        }
      }}
    >
      <DialogTitle className="sr-only">Dialog</DialogTitle>
      <DialogContent className={"zz-100!"}>{children}</DialogContent>
    </Dialog>
  );

  // return (
  //   <Dialog open={showModal} onOpenChange={setShowModal}>
  //     {/* DialogPortal is the magic that moves the modal out of the Drawer's reach */}
  //     <DialogPortal>
  //       <DialogOverlay className="z-[90] bg-black/40" />
  //       <DialogContent
  //         className={cn("z-[100]", className)}
  //         // This stops the click from reaching the Drawer underneath
  //         onPointerDown={(e) => e.stopPropagation()}
  //       >
  //         <DialogTitle className="sr-only">Modal</DialogTitle>
  //         {children}
  //       </DialogContent>
  //     </DialogPortal>
  //   </Dialog>
  // );
};
