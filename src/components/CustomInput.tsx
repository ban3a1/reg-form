import React, { AnchorHTMLAttributes, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  title?: string;
  placeholder?: string;
  phone?: boolean;
  style?: object;
  onChange: (any) => any;
}
export default function CustomInput({
  children,
  title,
  placeholder,
  style,
  onChange,
}: Props) {
  return (
    <div className="custom-input" style={style}>
      <div className="title">{title}</div>
      <input
        type="text"
        placeholder={placeholder}
        className="custom-input__input"
        onChange={onChange}
      />
    </div>
  );
}
