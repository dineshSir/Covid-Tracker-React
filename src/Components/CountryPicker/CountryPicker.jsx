import React, { useState, useEffect } from "react";
import Styles from "./CountryPicker.module.css";
import { countriesNameFetch } from "../../Api/index";
import { NativeSelect, FormControl } from "@material-ui/core";

const CountryPicker = ({ handelCountryChange }) => {
  const [countriesName, setCountriesName] = useState([]);
  const [fetchFlag, setfetchFlag] = useState(false);

  useEffect(() => {
    const fetchedCountriesName = async () => {
      setCountriesName(await countriesNameFetch());
    };
    fetchedCountriesName();
  }, [fetchFlag]);
  const selectChangeHandler = (e) => {
    setfetchFlag(!fetchFlag);
    console.log("this is the place where the changes that occur take place ");
    const country = e.target.value;
    handelCountryChange(country);
  };

  return (
    <div align="center" className={Styles.countryPicker}>
      <FormControl>
        <NativeSelect onChange={selectChangeHandler}>
          <option value="global">Global</option>
          {countriesName.map((country, index) => (
            <option key={index} value={country}>
              {country}
              
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
