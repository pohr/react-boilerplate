import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import fetchData from "../actions/fetch";

const HomePage = props => {
  if (props.count === 0) {
    props.dispatch({ type: "ADD" });
    props.dispatch(fetchData());
  }
  const renderFetch = () => {
    if (props.fetch.loading === true) {
      return "loading ...";
    } else if (props.fetch.error !== null) {
      return (
        <div>
          <div>Error</div>
          <div>{JSON.stringify(props.fetch.error)}</div>
        </div>
      );
    } else {
      return <div>{JSON.stringify(props.fetch.data)}</div>;
    }
  };
  return (
    <div>
      <div>{props.location.search}</div>
      <div>{props.count}</div>
      {renderFetch()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    count: state.count,
    fetch: state.fetch
  };
};
export default connect(mapStateToProps)(withRouter(HomePage));
