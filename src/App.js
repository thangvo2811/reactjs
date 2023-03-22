import { useState } from "react";
import "./App.scss";
import SignUpFormFinal from "./components/form/SignUpFormFinal";

function App() {
  // const [show, setShow] = useState(false);
  // const { showDropdown, setShowDropdown, dropDownRef } =
  //   useClickOutSide("button");
  return (
    // <div>
    //   <button
    //     onClick={() => setShowDropdown(true)}
    //     className="inline-block m-3 p-3 rounded-lg text-white bg-green-400"
    //   >
    //     Show Menu
    //   </button>
    //   <SideBarMenu show={showDropdown} ref={dropDownRef}></SideBarMenu>
    //   <DropDown></DropDown>
    // </div>
    <div>
      <SignUpFormFinal></SignUpFormFinal>
    </div>
  );
}

export default App;
