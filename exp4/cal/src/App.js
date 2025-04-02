import React from "react";
import Calculator from "./Calculator";
import Voting from "./Voting";
import BirthdayReminder from "./BirthdayReminder";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f4f4f4" }}>
      {/* <Calculator /> */}
      {/* <Voting /> */}
      <BirthdayReminder />
    </div>
  );
}

export default App;
