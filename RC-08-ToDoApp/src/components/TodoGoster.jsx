import React from "react";

const TodoGoster = ({ doing, setDoing }) => {
  console.log(doing);
  return (
    <div>
      {doing.map((x) => (
        <div>

<h3>
{x.text} 

<div>
    {/* ikonlar */}
</div>

</h3>
<h6>{x.day} </h6>

        </div>
      ))}
    </div>
  );
};

export default TodoGoster;
