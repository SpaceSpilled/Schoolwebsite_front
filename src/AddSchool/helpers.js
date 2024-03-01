import { HOST } from "../constants";

const AreStringsEmpty = (arr) => {
  const emptyStringTypes = [];

  for (let strObj of arr) {
    // console.log()
    const str = strObj["str"];
    const type = strObj["type"];
    if (type === "image") {
      continue;
    }
    console.log("str: ", str);
    if (!str || str.length == 0) {
      console.log(`${type} is empty`);
      emptyStringTypes.push(type);
    }
  }

  return emptyStringTypes;
};

const isValidEmailAddress = (email) => {
  const regex = /.+@.+\..+/;
  if (regex.test(email)) return true;
  return false;
};

const isFileImage = (file) => {
  return file && file["type"].split("/")[0] === "image";
};

const sendData = (
  data,
  setErrorMessage,
  setErrorVisibility,
  setToastStatus
) => {
  const formData = new FormData();
  for (let type in data) {
    const key = type;
    const value = data[type];

    formData.append(key, value);
  }
  console.log(formData);

  fetch(`${HOST}/addSchool`, {
    method: "POST",
    mode: "cors",

    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data?.status === "ok") {
        console.log("success");
        setErrorMessage("School data added successfully");
        setErrorVisibility(true);
        setToastStatus("success");
      } else {
        console.log("something wrong");
        setErrorMessage("something wrong");
        setErrorVisibility(true);
      }
    })
    .catch((err) => {
      console.error("err: ", err);
      console.log("some error");
      setErrorMessage("some error");
      setErrorVisibility(true);
    });
};

export { AreStringsEmpty, isValidEmailAddress, isFileImage, sendData };
