import React, { SetStateAction } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./DropdownInput.scss";

interface Props {
  title?: string;
  placeholder?: string;
  options: any[];
  radio?: boolean;
  setOptions: (option: any) => void;
  onValueChange: (value: any) => any;
}

export default function DropdownInput({
  title,
  placeholder,
  options,
  radio = true,
  setOptions,
  onValueChange,
}: Props) {
  const onChange = (e) => {
    const newArray = options.filter((value) => {
      value = value.value;
      return value !== e.value;
    });
    setOptions(newArray);
    onValueChange?.(e);
  };
  return (
    <div className={`DropdownElement ${radio && "radio"}`}>
      <div className="title">{title}</div>
      <Dropdown
        options={options}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
