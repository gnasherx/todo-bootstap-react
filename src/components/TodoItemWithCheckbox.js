import React from "react";

function TodoItemWithCheckbox({ todos }) {
  return (
    <ul>
      {todos.length > 0 ? (
        todos.map((_todo, index) => {
          return (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                {_todo.name}
              </label>
            </div>
          );
        })
      ) : (
        <p>No todos for today</p>
      )}
    </ul>
  );
}

export default TodoItemWithCheckbox;
