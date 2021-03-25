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
      <div id="results" className="results">
        {!this.props.loading && <h1>Loading...</h1>}
        {this.props.jobs.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
      </div>
    );
  }
}

export default JobsBoard;
