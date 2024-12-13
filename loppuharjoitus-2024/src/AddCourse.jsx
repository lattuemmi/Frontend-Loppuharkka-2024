import React, {useState} from "react";
import Popup from "reactjs-popup";

import CourseList from "./CourseList";
import BackButton from "./BackButton";

function AddCourse(){

    
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    

    return(
    <>
    <BackButton />

    <div>
        <input type="text" />
        <button onClick={togglePopup}>Add course</button>
        {isOpen && (
            <div className="popup">
                <p>Tässä popuppi!</p>
                <button onClick={togglePopup}>Close</button>
            </div>
        )}

        <p>Lisäämisen jälkeen laitetaan joku varmistus siitä että kurssi on saatu lisättyä</p>

    </div>

    <CourseList />

    </>
    )
}

export default AddCourse;