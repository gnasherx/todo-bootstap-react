import React from "react";
import TodoHeader from "./TodoHeader";
import { connect } from "react-redux";
import { createTodo, fetchTodos } from "../actions/todoActions";
import TodoItemWithCheckbox from "./TodoItemWithCheckbox";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleKeyUp = event => {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    const { dispatch } = this.props;
    dispatch(createTodo(this.state));
    this.setState({ name: "" });
  };

  render() {
    const { listDetails, todos } = this.props;

    return (
      <div className="card">
        <TodoHeader listDetails={listDetails} />
        <div className="card-body">
          <div className="row">
            <div className="col">
              <div
                className="collapse multi-collapse"
                id="multiCollapseExample2"
              >
                <form onSubmit={this.handleKeyUp}>
                  <div className="form-group">
                    <input
                      type="test"
                      className="form-control"
                      placeholder="New Todo"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </div>
                </form>
              </div>
              <TodoItemWithCheckbox todos={todos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { todos } = state.todoReducer;
  const { listDetails } = state.listReducer;
  return {
    listDetails,
    todos
  };
}

export default connect(mapStateToProps)(Todo);
