import React, { Component } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";

import { fatchData } from "./api";

export class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchData = await fatchData();
    this.setState({ data: fetchData });
  }

  handleCountryChange = async (country) => {
    const fetchData = await fatchData(country);
    this.setState({ data: fetchData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
