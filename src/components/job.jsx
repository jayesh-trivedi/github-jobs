import React, { Component } from "react";
import { Link } from "react-router-dom";
class Job extends Component {
  state = {};
  render() {
    return (
      <Link
        to={`/job/${this.props.job.id}`}
        key={this.props.job.id}
        style={{ textDecoration: "none" }}
      >
        <div className="card" id={this.props.job.id}>
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
      </Link>
    );
  }
}

export default Job;
