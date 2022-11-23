import { createContext, useContext, useState } from "react";

interface AppContextInterface {
  userName: any;
  setUsername?: (userName: string) => void;
  lastName: string;
  setLastname?: (lastName: string) => void;
  phoneNumber: number;
  setPhoneNumber?: (lastName: number) => void;
  email: string;
  setEmail?: (lastName: string) => void;
  group: string;
  setGroup?: (lastName: string) => void;
  lang: string;
  setLang?: (lastName: string) => void;
  category: string;
  setCategory?: (category: string) => void;
}

const AppCtx = createContext<AppContextInterface | null>(null);

export const AppContext = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState(0);
  const [email, setEmail] = useState("");
  const [group, setGroup] = useState("");
  const [lang, setLang] = useState("");
  const [category, setCategory] = useState("");

  const data: AppContextInterface = {
    userName: userName,
    setUsername: setUserName,
    lastName: lastName,
    setLastname: setLastName,
    phoneNumber: number,
    setPhoneNumber: setNumber,
    email: email,
    setEmail: setEmail,
    group: group,
    setGroup: setGroup,
    lang: lang,
    setLang: setLang,
    category: category,
    setCategory: setCategory,
  };

  return (
    <>
      <AppCtx.Provider value={data}>{children}</AppCtx.Provider>
    </>
  );
};

export const useAppContext = () => {
  const data = useContext(AppCtx);
  return data;
};
