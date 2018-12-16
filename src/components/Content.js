import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

function Content({ listDetails }) {
  return <Todo listDetails={listDetails} />;
}

function mapStateToProps(state) {
  const { listDetails } = state.listReducer;
  return {
    listDetails
  };
}

export default connect(mapStateToProps)(Content);
