import React, { useState } from "react";
import dummydata from "./dummydata";
import ProfilePage from "./components/ProfilePage";
import "./styles.css";

const App = () => {
  const [data] = useState(dummydata); //decronstructing dummydata
  console.log(data);
  return (
    <>
      <h1>Pride and Prejudice</h1>
      <ProfilePage cardData={data} />
    </>
  );
};

export default App;
//
// import React, { useState } from "react";
// import ProfilePage from "./components/ProfilePage";
// import dummydata from "./dummydata";

// import "./styles.css";

// const App = () => {
//   const [data] = useState(dummydata);
//   console.log(data);
//   return (
//     <>
//       <h1>Pride and Prejudice</h1>
//       <ProfilePage cardData={data} />
//     </>
//   );
// };
// export default App;
