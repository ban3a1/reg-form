import React, { useState } from "react";
import "./App.scss";
import add from "./img/add.svg";
import cross from "./img/cross.svg";
import CustomInput from "./components/CustomInput";
import PhoneInput from "./components/PhoneInput/PhoneInput";
import DropdownInput from "./components/DropdownInput/DropdownInput";
import AdditionalInput from "./components/AdditionalInput/AdditionalInput";
import { useAppContext } from "./contexts/Context";
import { groupOptions, languageOptions, additionalOptions } from "./data";

function App() {
  const [options, setOptions] = useState(additionalOptions);
  const [additionalFieldsNumber, setAdditionalFieldsNumber] = useState<
    number[]
  >([]);
  const [number, setNumber] = useState<number>(0);
  const onAdd = () => {
    additionalFieldsNumber.length < 4 &&
      setAdditionalFieldsNumber((prev) => {
        setNumber((prev) => prev + 1);
        const add = [...prev, number];
        return add;
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const data = useAppContext();

  const onUsernameChange = (e) => {
    console.log(e.target.value);
  };
  const onLastnameChange = (e) => {
    console.log(e.target.value);
  };

  const onPhoneChange = (e) => {
    console.log(e);
  };

  const onEmailChange = (e) => {
    console.log(e.target.value);
  };

  const onGroupChange = (e) => {
    console.log(e);
  };
  const onLanguageChange = (e) => {
    console.log(e.value);
  };

  const onCategoryChange = (e) => {
    console.log(e.value);
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <div className="form-container">
        <div className="form-content">
          <div className="form__header">
            <div className="header__text-group">
              <div className="header__img">
                <img src={add} alt="" />
              </div>
              <div className="header__text">Додати користувача</div>
            </div>
            <div className="close">
              <img src={cross} alt="" />
            </div>
          </div>
          <div className="line"></div>
          <form action="" className="form">
            <CustomInput
              title="Ім’я"
              placeholder="Марина"
              onChange={onUsernameChange}
            />
            <CustomInput
              title="Прізвище"
              placeholder="Коноваленко"
              onChange={onLastnameChange}
            />
            <PhoneInput onChange={onPhoneChange} />
            <CustomInput
              title="Email"
              placeholder="example.com"
              style={{ marginLeft: "-16px" }}
              onChange={onEmailChange}
            />
            <DropdownInput
              title="Група користувачiв"
              placeholder="Оберiть групу"
              options={groupOptions}
              onValueChange={onGroupChange}
              setOptions={() => {}}
            />
            <DropdownInput
              title="Мова"
              placeholder="Оберiть мову"
              options={languageOptions}
              onValueChange={onLanguageChange}
              setOptions={() => {}}
            />

            <>
              {additionalFieldsNumber.map((i) => {
                return (
                  <AdditionalInput
                    options={options}
                    key={i}
                    setOptions={setOptions}
                    category={data?.category}
                    setCategory={data?.setCategory}
                  />
                );
              })}
            </>
            <div
              className={`add ${
                additionalFieldsNumber.length > 3 && "disabled"
              }`}
            >
              <a onClick={onAdd}>Додати поле</a>
            </div>
            <button className="submit" onClick={onSubmit}>
              Додати користувача
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
