import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Country extends Component {
  state = {
    country: "",
  };

  componentDidMount() {
    let name = this.props.match.params.name;
    axios
      .get("https://restcountries.eu/rest/v2/name/" + name + "?fullText=true")
      .then((rsp) => {
        this.setState({
          country: rsp.data[0],
        });
      });
  }

  render() {
    const { country } = this.state;
    return (
      <div>
        <div className="g-2 container " style={{ margin: "auto" }}>
          <h2 className="mt-2">{country.nativeName}</h2>
          <hr />
          <div className="card-group">
            <div className="card">
              <div className="card-body">
                <dl className="row">
                  <dt className="col-sm-4">Başkent: </dt>
                  <dd className="col-sm-8">{country.capital}</dd>

                  <dt className="col-sm-4">Nüfus: </dt>
                  <dd className="col-sm-8">{country.population}</dd>

                  <dt className="col-sm-4">Alan</dt>
                  <dd className="col-sm-8">{country.area}</dd>

                  <dt className="col-sm-4">Bölge</dt>
                  <dd className="col-sm-8">{country.region}</dd>

                  <dt className="col-sm-4">Alt Bölge</dt>
                  <dd className="col-sm-8">{country.subregion}</dd>

                  <dt className="col-sm-4">Köken</dt>
                  <dd className="col-sm-8">{country.demonym}</dd>

                  <dt className="col-sm-4">Zaman Dilimi</dt>
                  <dd className="col-sm-8">{country.timezones}</dd>

                  <dt className="col-sm-4">Ülke Kodu</dt>
                  <dd className="col-sm-8">{country.numericCode}</dd>
                </dl>
              </div>
            </div>
            <div className="card">
              <img src={country.flag} className="card-img-top" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Country;
