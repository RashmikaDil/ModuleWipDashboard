import { useState } from "react";

function LineBox({data}){

    const [value] = useState(data.wip);
   
  
    return(<>
  
    <div className={`rounded-md w-[100px] m-2 h-[100px] flex flex-col items-center ${value >= 800 ? "bg-green-400":value>=400? "bg-yellow-400" : "bg-red-600"}`} >
<h1 className=" text-center h-[75px] w-[100px] text-xl">{data.line}</h1>
<h1 >{data.wip}</h1>

    </div>
    
    
    </>)
}
export default LineBox;