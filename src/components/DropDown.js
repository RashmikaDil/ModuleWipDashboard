import { useState } from "react";
import homeData from "./body/data/homeData";

function DropDown(){
    const [selectedOption, setSelectedOption] = useState("");
    const [poNumber,setPonumber]=useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);


  };
  const ponum = (event) =>{
    setPonumber(event.target.value);
  }
  return (
    <div>
      <label htmlFor="dropdown">Production Line:</label>
      <select className="w-auto m-2 border-gray-500 border-2 rounded-md" id="dropdown" value={selectedOption} onChange={handleChange}>

        {homeData.map((homeData,index)=> {
        return(
        <option id="lineDrop" value={homeData.line} key={index}>{homeData.line}</option>
    
    )
    })}
      </select><hr></hr>
      <label htmlFor="po">Production order: </label><br></br>
      <input id="po" type="number" onChange={ponum} className="m-2 border-gray-500 border-2 rounded-md"></input>
      <hr></hr>
      <label htmlFor="po">Qty : </label><br></br>
      <input id="po" type="number" onChange={ponum} className="m-2 border-gray-500 border-2 rounded-md"></input>
     
      <hr></hr>
      <label htmlFor="po">Comment : </label><br></br>
      <input id="po" type="text" onChange={ponum} className="m-2 border-gray-500 border-2 rounded-md"></input>
     
    
     
      <div className="w-[100%] h-auto bg-teal-100">
      <p >
        {selectedOption
          ? `You selected: ${selectedOption}`
          : "Please select an option."}
      </p>
      <p>{poNumber}</p>




      
        
      </div>
      <button className=" m-5 bg-teal-800 p-2 text-teal-100 rounded-md w-32">SUBMIT</button>
    </div>
  );
}

export default DropDown;