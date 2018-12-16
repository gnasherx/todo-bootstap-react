import React from "react";
import { connect } from "react-redux";

import { fetchLists } from "../actions/listActions";

class Sidebar extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchLists());
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

  render() {
    const { lists } = this.props;
    console.log("Inside sidebar lists: ", lists);
    return (
      <ul className="list-group">
        {lists &&
          lists.map(function(_list, index) {
            return (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {_list.name}
                <span className="badge badge-primary badge-pill">0</span>
              </li>
            );
          })}
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
