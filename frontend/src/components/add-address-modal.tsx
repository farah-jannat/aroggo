import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronRight, ShoppingCart } from "lucide-react";
import React from "react";

interface AddAddressModalProps {
  isAddFormOpen: boolean;
  setIsAddAddressOpen: (open: boolean) => void; // You'll likely need the setter too
  handleOpenAddForm: () => void;
}
const AddAddressModal = ({
  isAddFormOpen,
  setIsAddAddressOpen,
  handleOpenAddForm,
}: AddAddressModalProps) => {
  return (
    <>
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
      <Dialog open={isAddFormOpen} >
        <DialogTrigger className="w-full">
          {/* <Button variant="outline"> */}
          {/* </Button> */}

          <div
            className="w-full rounded-lg bg-[#00796B] py-2 text-lg font-semibold text-white transition-opacity hover:opacity-90 active:scale-[0.98]"
            onClick={handleOpenAddForm}
          >
            Add New Address
          </div>
        </DialogTrigger>

        <DialogContent className="md:max-w-[500px]">
          <div className="border-b pb-2 mb-4">
            <h2 className="text-xl font-bold">Add New Address</h2>
          </div>
          {/* Place your form inputs here */}
          <div className="space-y-4">
            <input
              placeholder="Full Name"
              className="w-full border rounded-lg p-2"
            />
            <input
              placeholder="Phone Number"
              className="w-full border rounded-lg p-2"
            />
            <textarea
              placeholder="Full Address"
              className="w-full border rounded-lg p-2"
              rows={3}
            />
            <span
              //   onClick={() => setIsAddFormOpen(false)}
              className="w-full bg-[#007A7C] text-white py-3 rounded-xl font-bold"
            >
              Save Address
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddAddressModal;
