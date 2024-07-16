import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "./ui/separator";

type Props = {};

const list = [
  "Select State",
  "Location",
  "Location GSTIn",
  " GSTIn Certificate",
  "POC Name",
  "POC Desigination",
  "POC Email Id ",
  "POC Mobile Number",
  "Address",
];
const list2 = [
  "Select Bank",
  "Account Name",
  "Account Number",
  "Confirm Account Number",
  "IFSC Code",
  "Cancelled Check",
];
const label = list.map((item, index) => (
  <li key={index} style={{ listStyleType: "none" }}>
    <div className="grid max-w-sm items-center gap-1.5 py-4">
      <Label htmlFor="email">{item}</Label>
      <Input type="email" id="email" placeholder={item} />
    </div>
  </li>
));
const label2 = list2.map((item, index) => (
  <li key={index} style={{ listStyleType: "none" }}>
    <div className="grid max-w-sm items-center gap-1.5 py-4">
      <Label htmlFor="email">{item}</Label>
      <Input type="email" id="email" placeholder={item} />
    </div>
  </li>
));
const LabelProps = (props: Props) => {
  return (
    <>
      <main className="m-4 grid grid-cols-4 grid-rows-2 gap-4 py-4">
        {label}
      </main>
      <Separator />
      <div className="m-4">
        <h1 className=" font-bold text-2xl">⭕ Account Details</h1>
        <br />
        <main className="grid grid-cols-4 grid-rows-2 gap-4 py-4">{label2}</main>
      </div>
    </>
  );
};

export default LabelProps;
