import React from "react";

function Todo({ listDetails }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{listDetails.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {listDetails.description}
        </h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}

export default Todo;
