import React, { Component } from "react";
import Job from "./job";

class JobsBoard extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }
  render() {
    return (
      <div>
        {!this.props.loading && <h1 className="loading">Loading...</h1>}
        <div id="results" className="results">
          {this.props.jobs.map((job) => {
            return <Job key={job.id} job={job} />;
          })}
        </div>
      </div>
    );
  }
}

export default JobsBoard;
