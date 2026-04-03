import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronRight, ShoppingCart } from "lucide-react";
import React from "react";

interface AddAddressModalProps {
  isAddFormOpen: boolean;
  setIsAddAddressOpen: (open: boolean) => void; // You'll likely need the setter too
}
const AddAddressModal = ({
  isAddFormOpen,
  setIsAddAddressOpen,
}: AddAddressModalProps) => {
  return (
    <div className="bg-[#007A7C] rounded-xl p-3 flex items-center justify-between text-white shadow-lg cursor-pointer hover:bg-[#006668] transition-all active:scale-[0.98]">
      <div className="flex items-center gap-3 border-r border-white/20 pr-4">
        <div className="bg-white/10 p-2 rounded-lg">
          <ShoppingCart size={20} />
        </div>
        <div>
          <p className="text-[10px] font-medium opacity-80 uppercase">
            1 Items
          </p>
          <p className="text-lg font-bold">৳65</p>
        </div>
      </div>

      <Dialog open={isAddFormOpen} onOpenChange={setIsAddAddressOpen}>
        <DialogTrigger className="w-full">
          {/* <Button variant="outline"> */}
          {/* </Button> */}
          <span className="flex items-center gap-1 font-bold text-sm pl-4">
            Select Address <ChevronRight size={18} />
          </span>
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
    </div>
  );
};

export default AddAddressModal;
