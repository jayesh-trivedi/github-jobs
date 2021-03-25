import React, { Component } from "react";
import logo from "../assets/images/logo.svg";
import pin from "../assets/images/pin.svg";
import searchlogo from "../assets/images/search.svg";

class Header extends Component {
  state = {};

  componentDidMount() {
    this.props.search("", "", false, 1);
  }
  render() {
    return (
      <div className="header">
        <div className="container">
          <a href="/home">
            <img src={logo} />
          </a>
        </div>
        <div className="filter">
          <div className="filter_search">
            <span className="filter_span">
              <img src={searchlogo} />
            </span>
            <input
              type="text"
              id="description"
              placeholder="Filter by title, companies, expertise..."
              name="description"
              value={this.props.description}
              onChange={this.props.handleInputChange("description")}
            />
          </div>
          <div className="filter_location">
            <span className="filter_span">
              <img src={pin} />
            </span>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Filter by location..."
              value={this.props.location}
              onChange={this.props.handleInputChange("location")}
            />
          </div>
          <div className="filter_options">
            <input
              type="checkbox"
              className="checkbox"
              name="fulltime"
              checked={this.props.fulltime}
              onChange={this.props.handleInputChange("fulltime")}
              id="full-time"
            />
            <label>
              <p>Full Time Only</p>
            </label>
            <button
              type="button"
              onClick={() =>
                this.props.search(
                  this.props.description,
                  this.props.location,
                  this.props.fulltime
                )
              }
            >
              <p>Search</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
