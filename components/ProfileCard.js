import React, { useState } from "react";
import Title from "./Title";
import Copy from "./Copy";
import ProfileImage from "./ProfileImage";
import PridePoints from "./PridePoints";

const ProfileCard = props => {
  const [points, setPoints] = useState(props.cardData.pride);
  //console.log(props.cardData.pride);
  const incrementPoints = () => {
    setPoints(points => points + 1);
  };

  return (
    <>
      <ProfileImage image={props.cardData.profileImg} />
      <div>
        <Title name={props.cardData.name} />
        <PridePoints points={points} incrementPoints={incrementPoints} />
      </div>
      <Copy copy={props.cardData.copy} />
    </>
  );
};
//Notes
export default ProfileCard;

// import React, { useState } from "react";
// import Title from "./Title";
// import Copy from "./Copy";
// import ProfileImage from "./ProfileImage";
// import PridePoints from "./PridePoints";

// const ProfileCard = props => {
//   const [points, setPoints] = useState(
//     props.cardData.pride
//   );

//   const incrementPoints = () => {
//     setPoints(points => points + 1);
//   };

//   return (
//     <>
//       <ProfileImage
//         image={props.cardData.profileImg}
//       />
//       <div>
//         <Title name={props.cardData.name} />
//         <PridePoints
//           points={points}
//           incrementPoints={incrementPoints}
//         />
//       </div>
//       <Copy copy={props.cardData.copy} />
//     </>
//   );
// };
// export default ProfileCard;
