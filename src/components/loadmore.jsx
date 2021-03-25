import React, { Component } from "react";

class LoadMore extends Component {
  state = {};

  render() {
    return (
      <div className="loadmore">
        <button
          type="button"
          className="load-btn"
          id="load-btn"
          onClick={this.props.incrementPage}
        >
          Load More
        </button>
      </div>
    );
  }
}

export default LoadMore;
