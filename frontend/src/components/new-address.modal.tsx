"use client";

// ** Third Party Imports
import { Dispatch, SetStateAction, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// ** Components
import { BaseModal } from "@/components/base-modal";
import { Button } from "@/components/ui/button";

// ** Validations

// ** Component Props
interface ModalProps {
  showModal?: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setOrderModal: Dispatch<SetStateAction<boolean>>;
}

const NewAddressModal = (props: ModalProps) => {
  const { showModal, setShowModal, setOrderModal } = props;

  return (
    <BaseModal
      setShowModal={() => setShowModal(false)}
      showModal={showModal}
      className="max-w-md p-8 zz-100!"
    >

      <div className="border-b pb-2 mb-4">
        <h2 className="text-xl font-bold">Add New Address</h2>
      </div>
      {/* Place your form inputs here */}
      <div className="space-y-4">
        <input
          placeholder="Full Name"
          className="w-full border rounded-lg p-2"
        />{" "}
        <input
          placeholder="Phone Number"
          className="w-full border rounded-lg p-2"
        />
        <textarea
          placeholder="Full Address"
          className="w-full border rounded-lg p-2"
          rows={3}
        />
        <button
          onClick={(e) => {
            setShowModal(false);
            setOrderModal(true);
          }}
          className="w-full bg-[#007A7C] text-white text-center py-3 rounded-xl font-bold"
        >
          Save Address
        </button>
      </div>
    </BaseModal>
  );
};

export default NewAddressModal;
