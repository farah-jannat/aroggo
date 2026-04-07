"use client";

// ** Third Party Imports
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { BaseModal } from "@/components/base-modal";
import { Button } from "@/components/ui/button";

// ** Component Props
interface ModalProps {
  showModal?: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setNewAddressModal: Dispatch<SetStateAction<boolean>>;
  // setIsDrawer: Dispatch<SetStateAction<boolean>>;
}

const SelectAddressModal = (props: ModalProps) => {
  const { showModal, setShowModal, setNewAddressModal } = props;

  return (
    <>
      <BaseModal
        setShowModal={() => setShowModal(false)}
        showModal={showModal}
        className="max-w-md p-8 zz-90!"
      >
        <div
          className="flex gap-2 flex-wrap"
          onPointerDown={(e) => e.stopPropagation()}
        >
          {/* <Button
            className="capitalize bg-[#03050F] cursor-pointer"
          >
            Create a new address
          </Button> */}

          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-2">
            <h2 className="text-xl font-bold text-slate-800">Address</h2>
            {/* <button
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={24} />
                  </button> */}
          </div>

          {/* Body */}
          <div className="flex flex-col items-center justify-center px-4 py-4 text-center">
            <p className="mb-2 text-gray-500 font-medium">
              No addresses found. Please add an address.
            </p>

            {/* Action Button */}
          </div>

          <div
            onClick={(e) => {
              setShowModal(false);
              setNewAddressModal(true);
            }}
            className="w-full rounded-lg bg-[#00796B] py-2 text-lg font-semibold text-white transition-opacity hover:opacity-90 active:scale-[0.98] text-center"
            // onClick={handleOpenAddForm}
          >
            Add New Address
          </div>
        </div>
      </BaseModal>

      {/* <NewAddressModal
        showModal={showNewAddressModal}
        setShowModal={setShowNewAddressModal}
      /> */}
    </>
  );
};

export default SelectAddressModal;
