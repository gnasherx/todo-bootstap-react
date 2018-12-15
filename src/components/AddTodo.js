import React from "react";
import Navbar from "./Navbar";

class AddTodo extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12">
              <div className="w-50 ml-auto mr-auto">
                <p class="h4  text-center m-4">Create new list</p>
                <form>
                  <div className="form-group">
                    <label htmlFor="todoTitle">What's the plan?</label>
                    <input
                      type="text"
                      className="form-control"
                      id="todoTitle"
                      aria-describedby="todoHelp"
                      placeholder="Title"
                    />
                    <small id="todoHelp" className="form-text text-muted">
                      Give short title to your list
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="todoDescription">
                      Tell me something more about list
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="todoDescription"
                      placeholder="Description"
                    />
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

export default AddTodo;
