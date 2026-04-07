"use client";

import NewAddressModal from "@/components/new-address.modal";
import OrderConfirmModal from "@/components/order-confirm-modal";
import SelectAddressModal from "@/components/select-address.modal";
import CartDrawer from "@/components/shopping-cart.drawer";
import { useBrowser } from "@/hooks/use-browser.hook";
import { ReactNode, useState } from "react";

import { Toaster } from "sonner";

interface Props {
  children: ReactNode;
}

export default function Provider(props: Props) {
  //   ** --- Props ---
  const { children } = props;

  // ** --- States ---
  const [selectAddressModal, setSelectAddressModal] = useState(false);
  const [newAddressModal, setNewAddressModal] = useState(false);
  const [isDrawer, setIsDrawer] = useState(false);
  const [orderModal, setOrderModal] = useState(false);

  //   ** --- Hooks ---

  const isBrowser = useBrowser();

  if (!isBrowser) return null;

  return (
    <div>
      {children}
      <CartDrawer
        setSelectAddressModal={setSelectAddressModal}
        isDrawer={isDrawer}
        setIsDrawer={setIsDrawer}
      />

      <SelectAddressModal
        showModal={selectAddressModal}
        setShowModal={setSelectAddressModal}
        setNewAddressModal={setNewAddressModal}
      />

      <NewAddressModal
        showModal={newAddressModal}
        setShowModal={setNewAddressModal}
        setOrderModal={setOrderModal}
      
      />
      <OrderConfirmModal
        orderModal={orderModal}
        setOrderModal={setOrderModal}
      />
      

      <Toaster position="bottom-center" richColors />
    </div>
  );
}
