import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
// import "primeflex/primeflex.css"; // css utility
// import "primeicons/primeicons.css";
import "primereact/resources/primereact.css"; //
import ToastEle from "../Components/Toast";

import React, { useEffect, useState } from "react";
import "./ShowSchools.scss";

import Card from "./Card";
import { HOST } from "../constants";
import PageNavigation from "../Components/PageNavigation";

// const CardArray = Array(10)
//   .fill(0)
//   .map(() => {
//     return <Card />;
//   });

const ShowSchools = (props) => {
  const [schoolDataArray, setSchoolDataArray] = useState([]);

  const [errorVisibility, setErrorVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const CardArray = schoolDataArray.map((obj) => {
    const { name, address, city, image } = obj;
    return <Card name={name} address={address} city={city} image={image} />;
  });

  useEffect(() => {
    setSchoolDataArray([]);
    fetch(`${HOST}/getSchools`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSchoolDataArray(data[1]);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Some error in loading the data");
        setErrorVisibility(true);
      });
  }, []);

  return (
    <div className="ShowSchools">
      <PageNavigation pageName={"Add Schools"} link={"AddSchool"} />
      <PrimeReactProvider>
        <ToastEle
          errorVisibility={errorVisibility}
          errorMessage={errorMessage}
          setErrorVisibility={setErrorVisibility}
        />
      </PrimeReactProvider>
      <div className="heading">
        <h1> Schools</h1>
      </div>
      {/* <div className="container-wrapper"> */}
      <div className="container">
        {/* <Card /> */}
        {CardArray}
      </div>
      {/* </div> */}
    </div>
  );
};

export default ShowSchools;
