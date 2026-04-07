"use client";

// ** Third Party Imports
import { Dispatch, SetStateAction, useState } from "react";

// ** Components
import FloatingCart from "@/components/floatingCart";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import Cart from "@/features/cart/components/cart";

// ** Validations

// ** Component Props
interface ModalProps {
  // showModal?: boolean;
  // setShowModal: Dispatch<SetStateAction<boolean>>;
  setSelectAddressModal: Dispatch<SetStateAction<boolean>>;
  isDrawer: boolean;
  setIsDrawer: Dispatch<SetStateAction<boolean>>;
}

const CartDrawer = (props: ModalProps) => {
  // ** State
  // const [isDrawer, setIsDrawer] = useState(false);
  // const [isDrawer, setIsDrawer] = useState(true);
  // ** Props
  // const { showModal, setShowModal } = props;
  const { setSelectAddressModal, isDrawer, setIsDrawer } = props;

  return (
    <Drawer
      direction="right"
      open={isDrawer}
      onOpenChange={setIsDrawer}
      // modal={false}
      modal={true}
    >
      {/* <DrawerTrigger asChild> */}
      {/* <FloatingCart  /> */}
      <FloatingCart setIsDrawer={setIsDrawer} />
      {/* </DrawerTrigger> */}
      <DrawerContent
        className="zz-66 zz-80! h-full w-[400px] mt-0 rounded-none right-0 left-auto"
        // onPointerDownOutside={(e) => {
        //   console.log("hello how are you!!")
        //   // If the modal state is active, prevent the drawer from closing
        //   // e.preventDefault();
        //   // If any modal is open, don't let the drawer close
        //   if (document.querySelector('[role="dialog"]')) {
        //     e.preventDefault();
        //   }
        // }}

        // onPointerDownOutside={(e) => {
        //   // 1. Log to see if it's firing
        //   console.log("Drawer detected outside click");

        //   // 2. Check for the existence of ANY Radix Dialog (Modal)
        //   // Radix modals usually have data-state="open"
        //   const isAnyModalOpen = !!document.querySelector(
        //     '[data-state="open"][role="dialog"]',
        //   );

        //   if (isAnyModalOpen) {
        //     console.log("Preventing drawer close because a modal is open");
        //     e.preventDefault();
        //   }
        // }}
      >
        <div className="sr-only">
          <DrawerHeader>
            <DrawerTitle>Shopping Cart</DrawerTitle>
            <DrawerDescription>
              Review your items and checkout
            </DrawerDescription>
          </DrawerHeader>
        </div>
        <Cart
          setSelectAddressModal={setSelectAddressModal}
          setIsDrawer={setIsDrawer}
        />
        {/* <button
          className="cursor-pointer"
          onClick={() => setSelectAddressModal(true)}
        >
          hi
        </button> */}
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
