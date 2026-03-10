import { FileText, Languages } from "lucide-react";
import React from "react";

const ProductDesc = () => {
  return (
    <div className="w-full  py-4 bg-white">
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {/* Header Section */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-teal-700" />
            <h2 className="text-xl font-bold text-teal-700">
              Product Description
            </h2>
          </div>

          <button className="flex items-center gap-2 px-3 py-1.5 border border-teal-700 rounded-lg text-teal-700 hover:bg-teal-50 transition-colors">
            <Languages size={18} />
            <span className="font-medium">বাংলা</span>
          </button>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="space-y-4 text-black text-[15px] ">
            <p>
              Hand washing with soap is the best way to avoid infections and
              keep your family healthy. However, ordinary soap may be harsh on
              skin and repeated hand washing may leave your hands dry and
              damaged. Your sensitive skin needs a cleanser that is tough on
              germs, but soft on your skin. That's why we created
              <span className="font-medium">
                {" "}
                Lifebuoy Mild Care Germ Protection Hand Wash Liquid
              </span>
              . The goodness of Milk Cream leaves your hands feeling soft and
              healthy while protecting you from germs.
            </p>

            <p>
              So now stay one step ahead of infections, and keep your hands soft
              and healthy. Kids nowadays are superfast. They are always in a
              hurry, even while washing hands. Ordinary Soap takes up to 1
              minute to kill germs – but do kids wash their hands for 1 whole
              minute? Not ours! That's why we created
              <span className="font-medium">
                {" "}
                Lifebuoy Mild Care Hand wash
              </span>{" "}
              – the Superfast caring hand wash for Superfast kids!
            </p>

            <p>
              Powered by our advanced{" "}
              <span className="italic">Activ Naturol Shield</span> formula, it
              gives germ protection in just 10 seconds, while the goodness of
              milk and oats keeps hands nourished. Now no more worrying about
              your kids washing hands long enough with slow soaps!
            </p>

            <p>
              This is a hand wash that cleanses and nourishes! Specially
              designed for sensitive skin, this hand wash prevents skin
              irritation and rashes. Its advanced formula nourishes your skin
              and helps avoid dryness. Handwashing at five key moments in the
              day (washing hands after going to the toilet, before breakfast,
              lunch and dinner, and while having a bath) with Lifebuoy Mild Care
              handwash will keep your kids protected from germs and diseases as
              well as make their hands feel moisturized!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
