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
}

const CartDrawer = (props: ModalProps) => {
  // ** State
  const [isDrawer, setIsDrawer] = useState(false);
  // ** Props
  // const { showModal, setShowModal } = props;
  const { setSelectAddressModal } = props;

  return (
    <Drawer direction="right" open={isDrawer} onOpenChange={setIsDrawer}>
      {/* <DrawerTrigger asChild> */}
      {/* <FloatingCart  /> */}
      <FloatingCart setIsDrawer={setIsDrawer} />
      {/* </DrawerTrigger> */}
      <DrawerContent className="zz-66 z-60 h-full w-[400px] mt-0 rounded-none right-0 left-auto">
        <div className="sr-only">
          <DrawerHeader>
            <DrawerTitle>Shopping Cart</DrawerTitle>
            <DrawerDescription>
              Review your items and checkout
            </DrawerDescription>
          </DrawerHeader>
        </div>
        <Cart />
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
