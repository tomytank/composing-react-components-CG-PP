import React from "react";

const PridePoints = props => {
  console.log(props);
  return (
    <div className="point-container">
      <button onClick={props.incrementPoints}>✚</button>
      <p className="points">{props.points} Pride Level</p>
    </div>
  );
};

export default PridePoints;
