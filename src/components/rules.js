import React from "react";

const Rules = () => {
  return (
    <div>
      <h2>
        Any live cell with fewer than two live neighbours dies, as if by
        underpopulation.
      </h2>
      <h2>
        Any live cell with two or three live neighbours lives on to the next
        generation.
      </h2>
      <h2>
        Any live cell with more than three live neighbours dies, as if by
        overpopulation.
      </h2>
      <h2>
        Any dead cell with exactly three live neighbours becomes a live cell, as
        if by reproduction.
      </h2>
    </div>
  );
};

export default Rules;
