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
}

const NewAddressModal = (props: ModalProps) => {
  const { showModal, setShowModal } = props;

  return (
    <BaseModal
      setShowModal={() => setShowModal(false)}
      showModal={showModal}
      className="max-w-md p-8 z-100!"
    >
      <div className="flex gap-2 flex-wrap">
        <Button
          className="capitalize bg-[#03050F] cursor-pointer"
          //   onClick={() => setShowModal(1)}
        >
          its a form
        </Button>
      </div>
    </BaseModal>
  );
};

export default NewAddressModal;
