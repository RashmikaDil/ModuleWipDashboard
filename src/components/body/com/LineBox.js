import { useState } from "react";

function LineBox({data}){

    const [value] = useState(data.wip);
   
  
    return(<>
  <div className={` transition-all w-[60px] m-2 h-[60px] flex flex-col items-center  text-teal-500 rounded-2xl     ${value >= 600 ? " shadow-xl drop-shadow-xl shadow-teal-700 bg-teal-950 ":value>=400? "shadow-md bg-teal-700 drop-shadow-xl shadow-teal-900 text-teal-950" : "shadow-md drop-shadow-xl bg-teal-400 shadow-teal-500 text-gray-800"}`}>
    <div className="flex justify-center items-center text-xs h-[30px] w-[60px]   ">
<h1 className=" text-center    font-sans font-bold">{data.line}</h1>
</div>
<div className="flex justify-center items-center text-md text-white ">
<h1 >{data.wip}</h1>
</div>
    
    </div>
    
    </>)
}
export default LineBox;