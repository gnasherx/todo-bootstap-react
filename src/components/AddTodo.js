import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { createList } from "../actions/listActions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listName: "",
      listDescription: "",
      nameInvalid: false,
      descriptionInvalid: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { listName, listDescription } = this.state;
    if (listName === "") {
      this.setState({ nameInvalid: true });
    }
    if (listDescription === "") {
      this.setState({ descriptionInvalid: true });
    }
    if (listName && listDescription) {
      const list = {
        name: this.state.listName,
        description: this.state.listDescription,
        createdAt: Date.now()
      };

      this.props.createList(list);
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    const { nameInvalid, descriptionInvalid } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12">
              <div className="w-50 ml-auto mr-auto">
                <p className="h4  text-center m-4">Create new list</p>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="listName">What's the plan?</label>
                    <input
                      type="text"
                      className="form-control"
                      id="listName"
                      aria-describedby="todoHelp"
                      placeholder="Title"
                      onChange={this.handleChange}
                    />
                    <small id="todoHelp" className="form-text text-muted">
                      Give short name to your list
                    </small>
                    {nameInvalid ? (
                      <span className="error text-danger">Name is empty</span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="listDescription">
                      Tell me something more about list
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="listDescription"
                      placeholder="Description"
                      onChange={this.handleChange}
                    />
                    {descriptionInvalid ? (
                      <span className="error text-danger">
                        Description is empty
                      </span>
                    ) : null}
                  </div>
                  <div className="text-center mt-5">
                    <button type="submit" className="btn btn-success ">
                      Create List
                    </button>
                  </div>
                </form>
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    createList: list => dispatch(createList(list))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
