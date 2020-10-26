import "./App.css";
import React, { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";

function ToDo({ toDoText, project }) {
  const [selected, setSelected] = React.useState(false);

  return (
    <div className="clickHandleWrapper">
      <OutsideClickHandler onOutsideClick={() => setSelected(false)}>
        <div
          className={`todo${selected ? " selected" : ""}`}
          onClick={() => setSelected(true)}
        >
          <div className="leftPortion">
            <div>checkbox placeholder</div>
            <div className="todo-description">
              <div className="todo-title">{toDoText}</div>
              {project ? <div className="todo-project">{project}</div> : null}
            </div>
            <div>tag(s) placeholder</div>
          </div>

          <div className="rightPortion">deadline placeholder</div>
        </div>
      </OutsideClickHandler>
    </div>
  );
}

function App() {
  return <ToDo toDoText={"This is a dummy todo"} project={"testproject"} />;
}

export default App;
