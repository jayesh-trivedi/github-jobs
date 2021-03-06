import React, { Component } from "react";
import Header from "./header";
import JobsBoard from "./jobsboard";
import LoadMore from "./loadmore";

class Home extends Component {
  state = {
    description: "",
    fulltime: false,
    location: "",
    page: 1,
    isLoaded: false,
    jobs: [],
    error: "",
  };

  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  handleInputChange = (property) => {
    return (e) => {
      this.setState({
        [property]: e.target.value,
      });
    };
  };

  incrementPage = () => {
    this.setState({ page: this.state.page + 1 });
    this.search(
      this.state.description,
      this.state.location,
      this.state.fulltime,
      this.state.page
    );
  };

  search(description, location, fulltime, page) {
    fetch(
      "https://jobs.github.com/positions.json?description=" +
        description +
        "&location=" +
        location +
        "&full_time=" +
        fulltime +
        "&page=" +
        page
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            jobs: result,
          });
        },
        (error) => {
          console.log("wrong");
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    return (
      <React.Fragment>
        <Header
          handleInputChange={this.handleInputChange}
          description={this.state.description}
          location={this.state.location}
          fulltime={this.state.fulltime}
          page={this.state.page}
          search={this.search}
        />
        <div className="space_between"></div>
        <JobsBoard jobs={this.state.jobs} loading={this.state.isLoaded} />
        <div className="space_between"></div>
        <LoadMore
          description={this.state.description}
          location={this.state.location}
          fulltime={this.state.fulltime}
          page={this.state.page}
          search={this.search}
          incrementPage={this.incrementPage}
        />
      </React.Fragment>
    );
  }
}

export default Home;
