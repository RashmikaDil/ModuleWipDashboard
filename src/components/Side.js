import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faHandsHoldingCircle, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Home from "./body/Home";
import Ready from "./body/Ready";
import Sent from "./body/Sent";
import Hold from "./body/Hold";


function Sidebar(){

    let [active,setActive] = useState(1);
   
    const menuItems = [
        { id: 1, label: "Home", icon: faHouse },
        { id: 2, label: "Ready Bins", icon: faCheck },
        { id: 3, label: "Sent", icon: faPaperPlane },
        { id: 4, label: "Hold", icon: faHandsHoldingCircle },
      ];



    return(<>
    <div className='side'>
<div className="bg-teal-900 h-[100vb]">

<div className="w-full p-4 flex justify-center h-[100px] text-teal-200 font-bold text-4xl" >

    <a  href="/">LOGO</a>
</div>


{menuItems.map((item)=> {
    return(
    <div className={`p-2 transition-all text-teal-100 cursor-pointer mb-4  ${active===item.id? "bg-teal-600 p-5":"hover:bg-teal-700 " }`}
    onClick={()=> setActive(item.id)}
    >
    <FontAwesomeIcon icon={item.icon} className="pr-3"/> {item.label}
    </div>
    )
})}


</div></div>
<div className='cbody bg-teal-600  p-10 ' >

<div className="flex flex-wrap">
            {active === 1 && <Home/>   }
</div>

<div className="flex flex-wrap">
{active === 2 && <Ready/>   }</div>
{active === 3 && <Sent/>   }
{active === 4 && <Hold/>   }

</div>
    
    </>)
}
export default Sidebar;