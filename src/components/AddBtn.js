import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import DropDown from "./DropDown";




const Popup = ({ show, onClose }) => {
    if (!show) return null;


        
  return (
    
    <div className="popup-overlay " onClick={onClose}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
      <div className="popup-content">
          <h2 className="text-xl">
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> ADD</h2>
            <DropDown></DropDown>
            

          <p></p>
        </div>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        
      </div>
    </div>
  );
};









function AddButton(){
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
      setShowPopup(!showPopup);
    };
    return(<>
 
    <div onClick={togglePopup}   className="bg-teal-950 fixed bottom-4 right-4 rounded-[50%] w-16 h-16 flex justify-center items-center cursor-pointer text-xl text-teal-100 drop-shadow-2xl"><FontAwesomeIcon icon={faPlus} /></div>
    <Popup show={showPopup} onClose={togglePopup} />

    </>)
}


export default AddButton;