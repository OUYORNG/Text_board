import { useState } from "react"

function Display(){
    const Init = "Welcome to GIC2B Text Board"
    const [text,setText] = useState(Init)
    function handleChange(){
        let Input = document.querySelector(".Input").value
        Input == "" ? setText(Init) : setText(Input)
    }
    return(
        <div class="flex m-3 rounded-md flex-col    ">
        <div class="rounded-md p-10 bg-[#D9D9D9]">
            <marquee behavior="" direction="" class="text-[clamp(15px,4vh,200px)]">{text}</marquee>
        </div>
        <div class="input flex mt-2 rounded-md">
            <input onChange={handleChange} class="Input flex-grow rounded-md p-4 bg-[#F0F0F0] text-xl" type="text" placeholder={Init}/>
        </div>
    </div>
    )
    
}

export default Display;