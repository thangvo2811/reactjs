import { useState } from "react";
import "./App.scss";
// import Form from "./components/form/Form";
// import Form2 from "./components/form/Form2";
// a
// import DropDown from "./components/DropDown";
// import SideBarMenu from "./components/SideBarMenu";
// import useClickOutSide from "./hooks/useClickOutSide";
import MovieSearchApp from "./components/MovieSearchApp";

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
      <MovieSearchApp></MovieSearchApp>
    </div>
  );
}

export default App;
