import React from "react";
import { connect } from "react-redux";

import { fetchLists, showListDetails } from "../actions/listActions";
import { fetchTodos } from "../actions/todoActions";

class Sidebar extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchLists()).then(function() {
      dispatch(showListDetails(0));
      dispatch(fetchTodos());
    });
    // this.handleClick = this.handleClick.bind(this);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("Inside shouldComponetnUpdate");
  //   if (this.props.lists === nextProps.lists) {
  //     console.log("returning fasle");
  //     return false;
  //   } else {
  //     console.log("returning true");
  //     return true;
  //   }
  // }

  // componentDidUpdate(prevProps) {
  //   console.log("prevProps: ", prevProps);
  //   if (this.props.lists.length !== prevProps.lists.length) {
  //     console.log("Lists length changed");
  //   }
  // }

  handleClick = index => {
    const { dispatch } = this.props;
    dispatch(showListDetails(index));
  };

  render() {
    const { lists } = this.props;
    return (
      <ul className="list-group">
        {lists ? (
          lists.map((_list, index) => {
            return (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
                onClick={() => this.handleClick(index)}
              >
                {_list.name}
                <span className="badge badge-primary badge-pill">0</span>
              </li>
            );
          })
        ) : (
          <p>List is empty</p>
        )}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  const { lists } = state.listReducer;
  return {
    lists
  };
}

export default connect(mapStateToProps)(Sidebar);
