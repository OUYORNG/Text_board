import { useContext, useState } from "react";
import { SharedText } from "./SharedText";
import "./css/left.css";
import MyComponent from "./MyComponent";

function Display() {
  const { text, setText } = useContext(SharedText);
  const { Init } = useContext(SharedText);
  const { direction } = useContext(SharedText);
  const { direction1 } = useContext(SharedText);

  function handle() {
    const Input = document.querySelector(".Input").value;
    Input == "" ? setText(Init) : setText(Input);
  }

  return (
    <div class="flex m-3 rounded-md flex-col ">
      <div class="rounded-md p-10 bg-[#D9D9D9] relative">
        {/* <h1 className={`${direction === 1 ? "text Toright" : direction === 0? "text Toleft" : "text Stop"  } ${direction1 === 0 ? "text":"text"}`} >{text}</h1> */}
        <MyComponent></MyComponent>
      </div>
      <div class="input flex mt-2 rounded-md">
        <input
          onChange={handle}
          class="Input flex-grow rounded-md p-4 bg-[#F0F0F0] text-xl"
          type="text"
          placeholder={Init}
        />
      </div>
    </div>
  );
}

export default Display;
