import React from "react";
import { Heading, Cards, CountryPicker, Chart } from "./Components";
import Styles from "./App.module.css";
import { CRDDNumberFetch } from "./Api/index";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      country: "",
    };
    this.handelCountryChange = this.handelCountryChange.bind(this);
  }

  async componentDidMount() {
    const CRDDNumber = await CRDDNumberFetch();
    this.setState({
      data: CRDDNumber,
    });
    console.log("componentDidMount");
  }

  handelCountryChange = async (countryName) => {
    this.setState({
      country: countryName,
    });
    const countryCRDDNumber = await CRDDNumberFetch(countryName);

    this.setState({
      data: countryCRDDNumber,
    });

    console.log("[hanedlCountryChange]");
  };

  render() {
    const { data, country } = this.state;
    const { handelCountryChange } = this;
    return (
      <div className={Styles.appContainer}>
        <Heading></Heading>
        <Cards data={data}></Cards>
        <CountryPicker
          handelCountryChange={handelCountryChange}
        ></CountryPicker>
        {data.confirmed && <Chart data={data} countryName={country}></Chart>}
      </div>
    );
  }
}

export default App;
