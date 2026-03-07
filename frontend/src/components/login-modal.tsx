import React from "react";
import { X, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import Carousel from "@/components/carousel";
import { loginImages } from "@/constants";


const LoginModal = () => {
  //   if (!isOpen) return null;

  return (
    <div className=" flex items-center justify-center ">
      {/* Modal Container */}
      <div className="relative flex w-full max-w-4xl overflow-hidden rounded-2xl bg-white ">
        {/* Left Side: Illustration & Carousel */}
        <div className="hidden w-1/2 flex-col items-center justify-center bg-gray-50 p-2 md:flex">
          <div className="mb-1 relative">
            {/* Replace with your actual SVG or Image */}
            <div className="max-w-[400px] ">
              <Carousel images={loginImages} />
            </div>
          </div>
          <div className="text-center">
            <h3 className="mb-2 text-xl font-bold text-slate-800">
              Quick & easy ordering process
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Now you can order your medicine from Arogga. We provide all the
              medicines you need.
            </p>
          </div>
         
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full p-4 md:w-1/2 ">
          <h2 className="text-2xl font-bold text-slate-800">Login</h2>
          <p className="mt-2 text-sm text-slate-500">
            Login to make an order, access your orders, special offers, health
            tips, and more!
          </p>
          {/* ----------- */}
          <form className="mt-4 space-y-2">
            <FieldGroup>
              <Field>
                <FieldLabel
                  htmlFor="form-name"
                  className="font-bold text-black text-[16px]"
                >
                  Phone Number
                </FieldLabel>
                <div className=" flex rounded-lg border border-gray-300 focus-within:border-teal-500">
                  <button
                    type="button"
                    className="flex w-[200px] items-center gap-1 bg-gray-50 px-2 py-1 text-[16px] font-md text-black border-r"
                  >
                    (+88) BD <ChevronDown size={16} />
                  </button>
                  <Input
                    id="form-phone"
                    type="tel"
                    placeholder="1234567886"
                    className="border-none h-[50px]"
                  />
                </div>
              </Field>
            </FieldGroup>
            <button
              type="button"
              className="flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
            >
              Have a referral code? <ChevronDown size={16} className="ml-1" />
            </button>

            <button className="w-full rounded-lg bg-teal-700 py-3.5 font-bold text-white transition-colors hover:bg-teal-800 shadow-lg shadow-teal-700/20">
              Send
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8 flex items-center justify-center">
            <div className="h-[1px] w-full bg-gray-200"></div>
            <span className="absolute bg-white px-4 text-xs uppercase text-gray-400">
              or
            </span>
          </div>

          {/* Social Logins */}
          <div className="flex justify-center gap-4">
            <button className="flex h-12 w-16 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-all">
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="h-6 w-6"
              />
            </button>
            <button className="flex h-12 w-16 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-all">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="h-6 w-6"
              />
            </button>
          </div>

          <p className="mt-8 text-center text-[11px] leading-relaxed text-slate-500">
            By continuing you agree to{" "}
            <a href="#" className="font-bold text-teal-700 underline">
              Terms & Conditions
            </a>
            ,{" "}
            <a href="#" className="font-bold text-teal-700 underline">
              Privacy Policy
            </a>{" "}
            &{" "}
            <a href="#" className="font-bold text-teal-700 underline">
              Refund-Return Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
