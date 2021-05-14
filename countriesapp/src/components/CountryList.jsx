import React from "react";
import CountryCard from "./CountryCard";
import axios from "axios";

class CountryList extends React.Component {
  state = {
    countries: [],
  };
  componentDidMount() {
    axios.get("https://restcountries.eu/rest/v2/all").then((rsp) => {
      this.setState({
        countries: rsp.data,
      });
    });
  }
  searchHandler = (e) => {
    axios
      .get("https://restcountries.eu/rest/v2/name/" + e.target.value)
      .then((res) => {
        this.setState({
          countries: res.data,
        });
      });
  };

  render() {
    const countryList = this.state.countries.map((ct) => {
      return (
        <div className="px-2">
          <CountryCard country={ct} key={ct.numericCode} />
        </div>
      );
    });
    return (
      <div className="row row-cols-3 g-2 container " style={{ margin: "auto" }}>
        <input
          type="text"
          name="search"
          className="form-control mb-3"
          onChange={this.searchHandler}
          placeholder="Ülke Adı Giriniz"
        />
        {countryList}
      </div>
    );
  }
}

export default CountryList;
