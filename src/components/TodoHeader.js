import React from "react";

function TodoHeader(props) {
  let { name, description } = props.listDetails;
  return (
    <div className="card-header">
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div>
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted text-truncate">
            {description}
          </h6>
        </div>
        <div>
          <button
            className="btn btn-secondary"
            type="button"
            data-toggle="collapse"
            data-target="#multiCollapseExample2"
            aria-expanded="false"
            aria-controls="multiCollapseExample2"
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoHeader;
