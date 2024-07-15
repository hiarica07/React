import React, { useState } from "react";

const TodoEkle = ({ doing, setDoing }) => {
  const [buton, setButon] = useState(true);

  return (
    <div>
      <header>
        <h1>TO DO APP</h1>
        <button
          onClick={() => setButon(!buton)}
          className="btn"
          style={{ backgroundColor: buton ? "green" : "purple" }}
        >
          {buton ? "CLOSE" : "SHOW"} ADD TASK BAR
        </button>
      </header>
      {buton && (
        <form>
          <div className="formControl">
            <label htmlFor="text">Task</label>
            <input type="text" id="text" />
          </div>
          <div className="formControl">
            <label htmlFor="day">Day & Time</label>
            <input type="datetime-local" id="day" />
          </div>
          <button className="btn btn-submit">SUBMIT</button>
        </form>
      )}
    </div>
  );
};

export default TodoEkle;
