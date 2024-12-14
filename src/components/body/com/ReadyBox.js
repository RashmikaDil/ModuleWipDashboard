import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faHandsHoldingCircle,  faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ReadyBox({qty,linex,po,comm,date}){
return(<>



<div>
    <div className=" m-2  h-[120px] flex items-center bg-teal-900 w-[400px] rounded-md shadow-lg relative">
    
  <div>
       <label className="absolute bottom-0 left-0 text-[8px] m-2 text-teal-400">{date}</label>
            <h1 className="text-teal-100 text-xl w-[100px] h-[120px] flex justify-center items-center">{linex}</h1>
        </div >
        
        <div className="flex flex-col text-teal-400 w-[200px] text-sm">
            <label className="text-lg text-teal-100 font-bold">QTY : {qty}</label>
            <label>PO : {po}</label>
            <label>Comments : {comm}</label>
            
        </div>
        <div className=" w-[100px] text-sm h-[120px] flex flex-col justify-center">
        <button className="bg-teal-600 rounded-md text-white hover:bg-teal-700 transition-all p-[5px] w-[90px] m-1 text-sm"><FontAwesomeIcon icon={faPaperPlane}/> SEND</button>
        <button className="bg-teal-600 rounded-md text-white hover:bg-teal-700 transition-all  p-[5px] w-[90px] m-1 text-sm"><FontAwesomeIcon icon={faTrash}/> DELETE</button>
        <button className="bg-teal-600 rounded-md text-white hover:bg-teal-700 transition-all  p-[5px] w-[90px] m-1 text-sm"><FontAwesomeIcon icon={faHandsHoldingCircle}/> HOLD</button>


        </div>
      
    </div>

    </div>




</>)
}
export default ReadyBox;