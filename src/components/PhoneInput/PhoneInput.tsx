import { AnyMxRecord } from "dns";
import React from "react";
import PhoneInputComponent from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./PhoneInput.scss";

interface Props {
  onChange: any;
}

export default function PhoneInput({ onChange }: Props) {
  return (
    <div className="phone-input">
      <div className="title">Номер телефону</div>
      <PhoneInputComponent
        country={"ua"}
        buttonClass={"arrow"}
        onChange={onChange}
      />
    </div>
  );
}
