import React from "react";

function TodoItemWithCheckbox({ todos }) {
  return (
    <ul>
      {todos ? (
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
          />
          <label className="form-check-label" htmlFor="defaultCheck1">
            {todos.name}
          </label>
        </div>
      ) : (
        "No todos for now"
      )}
    </ul>
  );
}

export default TodoItemWithCheckbox;
