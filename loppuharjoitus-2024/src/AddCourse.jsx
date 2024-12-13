import CourseList from "./CourseList";

import BackButton from "./BackButton";

function AddCourse(){

    return(
    <>
    <BackButton />

    <div>
        <input type="text" />
        <button>Add course</button>

        <p>Lisäämisen jälkeen laitetaan joku varmistus siitä että kurssi on saatu lisättyä</p>

    </div>

    <CourseList />

    </>
    )
}

export default AddCourse;