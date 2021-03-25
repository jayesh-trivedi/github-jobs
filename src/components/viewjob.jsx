import React, { Component } from "react";
import logo from "../assets/images/logo.svg";

class ViewJob extends Component {
  state = { job: [] };

  componentDidMount() {
    fetch(
      "https://jobs.github.com/positions/" +
        this.props.match.params.id +
        ".json"
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          job: result,
        });
      });
  }
  render() {
    return (
      <div>
        <div className="header">
          <div className="container">
            <a href="/home">
              <img src={logo} />
            </a>
          </div>
          <div id="company_info" className="company_info">
            <div class="company_logo">
              <img class="logo" src={this.state.job.company_logo} />
            </div>
            <div class="company_name">
              <p class="center">{this.state.job.company} </p>
            </div>
            <div>
              <button
                type="button"
                class="longbtn"
                onclick="document.location= {this.state.job.company_url}"
              >
                <p>Company Site</p>
              </button>
            </div>
          </div>
        </div>
        <div className="space_between"></div>
        <div id="description" className="description">
          <div class="flex">
            <div>
              <div class="job_posted">
                <p>{this.state.job.type}</p>
              </div>
              <div>
                <h2 class="title">
                  <strong>{this.state.job.title}</strong>
                </h2>
              </div>
              <div>
                <p class="location">{this.state.job.location}</p>
              </div>
            </div>
            <div>
              <button type="button" class="longbtn" onclick="search()">
                <p>Apply Now</p>
              </button>
            </div>
          </div>
          <div
            class="text"
            dangerouslySetInnerHTML={{ __html: this.state.job.description }}
          ></div>
          <h2 class="title">
            <strong>How to apply:- </strong>
          </h2>
          <div
            class="apply text"
            dangerouslySetInnerHTML={{ __html: this.state.job.how_to_apply }}
          ></div>
        </div>
      </div>
    );
  }
}

export default ViewJob;
