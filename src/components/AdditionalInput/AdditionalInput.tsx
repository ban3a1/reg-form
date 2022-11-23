import React from "react";
import DropdownInput from "../DropdownInput/DropdownInput";
import "react-dropdown/style.css";
import "../DropdownInput/DropdownInput.scss";
import CustomInput from "../CustomInput";
import "./AdditionalInput.scss";

interface Props {
  options: { value: string; label: string }[];
  setOptions: any;
  onChange?: (any) => any;
  category: string | undefined;
  setCategory: ((any) => void) | undefined;
}

export default function AdditionalInput({
  options,
  setOptions,
  category,
  setCategory,
}: Props) {
  return (
    <div>
      <div className="AdditionalElement">
        <DropdownInput
          options={options}
          setOptions={setOptions}
          placeholder={"Оберiть поле"}
          title="Додати нове поле"
          radio={false}
          onValueChange={(e) => {
            console.log(e);
          }}
        />
        <CustomInput
          placeholder="Введіть значення"
          title="Значення поля"
          onChange={() => {}}
        />
      </div>
    </div>
  );
}
