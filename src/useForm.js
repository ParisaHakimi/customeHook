import { useState } from "react";

const useForm = (initvalue) => {
  const [fields, setFields] = useState(initvalue);
  const changeHandler = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  return { fields, changeHandler };
};

export default useForm;
