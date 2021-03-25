import React, { Component } from "react";

class Job extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div>
          <img className="job_logo" src={this.props.job.company_logo} />
        </div>
        <div className="job_posted">
          <p>{this.props.job.type}</p>
        </div>
        <div>
          <h2 className="title">
            <strong>{this.props.job.title}</strong>
          </h2>
        </div>
        <div>
          <p className="company">{this.props.job.company}</p>
        </div>
        <div>
          <p className="location">{this.props.job.location}</p>
        </div>
      </div>
    );
  }
}

export default Job;
