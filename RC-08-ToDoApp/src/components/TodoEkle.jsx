import React, { useState } from "react";

const TodoEkle = ({ doing, setDoing }) => {
  const [buton, setButon] = useState(true);
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const handleSubmiTT = (e) =>{
    e.preventDefault(); // zorunlu
    setDoing([...doing, {id:doing.length, text:text, day:day, isDone:false}]);
    // input alanlarını boşaltmak için, altta inputlara value veriyoruz, burada da temizliyoruz
    setText("");
    setDay("");
    


  }

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
        <form onSubmit={handleSubmiTT}>
          <div className="formControl">
            <label htmlFor="text">Task</label>
            <input
              type="text"
              id="text"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          </div>
          <div className="formControl">
            <label htmlFor="day">Day & Time</label>
            <input
              type="datetime-local"
              id="day"
              onChange={(e) => setDay(e.target.value)}
              value={day}
            />
          </div>
          <button type="submit" className="btn btn-submit">SUBMIT</button>
        </form>
      )}
    </div>
  );
};

export default TodoEkle;
